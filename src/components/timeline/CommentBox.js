import styled from "styled-components";
import CommentCard from "./CommentCard";

import { useEffect, useState } from "react";
import { useAuth } from "../../context/Context";
import { getComments, postComment } from "../../service/Service";
import { IconContext } from "react-icons";
import { FaRegPaperPlane } from "react-icons/fa"
import { RotatingLines } from "react-loader-spinner";


export default function CommentBox(props) {
  const { user } = useAuth();
  const { token } = user
  const { id } = props;
  const [comments, setComents] = useState("");
  const [text, setText] = useState("")
  const [commentsAreLoading, setCommentsAreLoading] = useState(false);
  const [IsNewUserCommentLoading, setIsNewUserCommentLoading] = useState(false)
  const [renderComments, setRenderComments] =  useState(false)

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
  }, [id, renderComments]);



  function handleSubmit(e) {
    e.preventDefault()
    setIsNewUserCommentLoading(true)
    const commentObject = { text }
    postComment(`comments`, id, commentObject, token).then(ans => {
        setIsNewUserCommentLoading(false)
        setText("")
        setRenderComments(!renderComments)
    }).catch(err => {
        setIsNewUserCommentLoading(false)
        console.log(err.response.data)
        alert("Something went wrong, please try again");
    })
  }

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

            <WriteCommentForm onSubmit={handleSubmit}>
                <input 
                onChange={e => setText(e.target.value)} 
                type="text" 
                name="text" 
                value={text}
                placeholder="write a comment">

                </input>
            </WriteCommentForm>
            

            {IsNewUserCommentLoading ? (
                <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
              />
            ) :

            <IconContext.Provider value={{ 
                size: '20px', 
                cursor: 'pointer',  
                color:'#fff' }}>
                <h2>  <FaRegPaperPlane /> </h2>
            </IconContext.Provider>}

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

