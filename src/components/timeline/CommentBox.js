import styled from "styled-components";
import CommentCard from "./CommentCard";

import { useEffect, useState } from "react";
import { useAuth } from "../../context/Context";
import { getComments } from "../../service/Service";
import { IconContext } from "react-icons";
import {FaRegPaperPlane} from "react-icons/fa"

export default function CommentBox(props) {
  const { user } = useAuth();
  const { id } = props;
  const [comments, setComents] = useState("");
  const [commentsAreLoading, setCommentsAreLoading] = useState(false);
  const [newComment, setNewComment] = useState(false)

  useEffect(() => {
    setCommentsAreLoading(true);

    getComments(`comments/`, id)
      .then((ans) => {
        console.log(ans.data);
        setComents(ans.data);
        setCommentsAreLoading(false);
      })
      .catch((err) => {
        setCommentsAreLoading(false);
        console.log(err.response.data);
      });
  }, [newComment]);



  return (
    <Container>
        {!commentsAreLoading && typeof comments === "string" && (
            <NoCommentsYet>Comment something!</NoCommentsYet>
        )}

        {!commentsAreLoading && typeof comments !== "string" && (
            <CommentsContainer>
                {comments.map((c) => (
                    <CommentCard imageUrl={c.imageUrl} userName={c.name} commentText={c.text} />
                ))}
            </CommentsContainer>
        )}
        <CommentBar>
            <UserImage src={user.user.imageUrl}/>

            <WriteCommentForm>
                <input type="text" name="write" value="write" placeholder="write a comment"></input>
            </WriteCommentForm>

            <IconContext.Provider value={{ size: '20px', cursor: 'pointer',  color:'#fff' }}>
                <h2>  <FaRegPaperPlane /> </h2>
            </IconContext.Provider>

        </CommentBar>
    </Container>
  );
}

const Container = styled.div``

const NoCommentsYet = styled.h2``

const CommentsContainer = styled.div``

const CommentBar = styled.div``

const UserImage = styled.img``

const WriteCommentForm = styled.form``

