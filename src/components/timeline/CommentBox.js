import styled from "styled-components";
import Comment from "./Comment";
import UserImage from "../elements/UserImage";

import { useEffect, useState } from "react";
import { useAuth } from "../../context/Context";
import { getComments, postComment } from "../../service/Service";
import { IconContext } from "react-icons";
import { FaRegPaperPlane } from "react-icons/fa";
import { RotatingLines } from "react-loader-spinner";

export default function CommentBox(props) {
  const { user } = useAuth();
  const { token, imageUrl, name } = user;
  const { id } = props;
  const [comments, setComents] = useState("");
  const [text, setText] = useState("");
  const [commentsAreLoading, setCommentsAreLoading] = useState(false);
  const [IsNewUserCommentLoading, setIsNewUserCommentLoading] = useState(false);
  const [renderComments, setRenderComments] = useState(false);

  useEffect(() => {
    setCommentsAreLoading(true);

    getComments(`comments`, id)
      .then((ans) => {
        console.log(ans.data);
        setComents(ans.data);
        setCommentsAreLoading(false);
      })
      .catch((err) => {
        setCommentsAreLoading(false);
        console.log(err.response.data);
      });
  }, [id, renderComments]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsNewUserCommentLoading(true);
    const commentObject = { text };
    postComment(`comments`, id, commentObject, token)
      .then((ans) => {
        setIsNewUserCommentLoading(false);
        setText("");
        setRenderComments(!renderComments);
      })
      .catch((err) => {
        setIsNewUserCommentLoading(false);
        console.log(err.response.data);
        alert("Something went wrong, please try again");
      });
  }

  return (
    <Container>
      {!commentsAreLoading && typeof comments !== "string" && (
        <CommentsContainer>
          {comments.map((c) => (
            <Comment
              imageUrl={imageUrl}
              userName={name}
              commentText={c.text}
            />
          ))}
        </CommentsContainer>
      )}
      <CommentBar>
        <UserImage imageUrl={imageUrl} />

        <FormComment onSubmit={handleSubmit}>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            name="text"
            value={text}
            placeholder="write a comment"
          ></input>
        </FormComment>

        {IsNewUserCommentLoading ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        ) : (
          <IconContext.Provider
            value={{
              size: "20px",
              cursor: "pointer",
              color: "#fff",
            }}
          >
            <h2>
              <FaRegPaperPlane />
            </h2>
          </IconContext.Provider>
        )}
      </CommentBar>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-top: 20px;
  background-color: #1e1e1e;
  border-radius: 16px;
`;

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #1e1e1e;
`;

const CommentBar = styled.div`
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 83px;
`;

const FormComment = styled.form`
  input {
    width: 480px;
    height: 39px;
    background-color: #252525;
    border-radius: 8px;
    ::placeholder {
      font-family: "Lato";
      font-style: italic;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.05em;
      color: #575757;
    }
  }
`;
