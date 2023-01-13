import styled from "styled-components";
import UserImage from "../elements/UserImage";
import LinkCard from "./LinkCard";
import PostDeleteModal from "./PostDeleteModal";
import DelEditIcons from "./PostDelEditIcons";
import TextEditBox from "./TextEditBox";
import PostDescription from "./PostDescription";
import LikesCard from "./LikesCard";
import CommentCard from "./CommentCard";
import CommentBox from "./CommentBox";

import { useAuth } from "../../context/Context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Post(props) {
  const {
    id,
    imageUrl,
    name,
    text,
    link,
    title,
    description,
    image,
    userId,
    likes,
    comments,
  } = props.post;
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openTextEditBox, setOpenTextEditBox] = useState(false);
  const [openCommentBox, setOpenCommentBox] = useState(false);
  const { user } = useAuth();
  const editObject = { link, text };
  const navigate = useNavigate();

  function verifyUserPost(userName, postOwnerName) {
    if (userName === postOwnerName) {
      return true;
    }
    return false;
  }
  const isUserPost = verifyUserPost(user.name, name);

  function handleToggleDel() {
    setOpenDeleteModal(!openDeleteModal);
  }
  function handleToggleEdit() {
    setOpenTextEditBox(!openTextEditBox);
  }
  function handleToggleComment() {
    setOpenCommentBox(!openCommentBox);
  }
  function handleUserRedirect() {
    navigate(`/user/${userId}`);
  }

  return (
    <Container>
      <ContentContainer openCommentBox={openCommentBox} key={id}>
        <ImageContainer>
          <UserImage imageUrl={imageUrl} />
          <LikesCard id={id} likes={likes} />
          <CommentCard
            id={id}
            postComments={comments}
            handleToggleComment={handleToggleComment}
          />
        </ImageContainer>

        <PostContainer>
          <UserName onClick={handleUserRedirect}>{name}</UserName>

          {isUserPost && (
            <DelEditIcons
              postId={id}
              editObject={editObject}
              handleToggleEdit={handleToggleEdit}
              handleToggleDel={handleToggleDel}
            />
          )}

          {openDeleteModal && (
            <PostDeleteModal postId={id} handleToggleDel={handleToggleDel} />
          )}

          {openTextEditBox && (
            <TextEditBox
              postId={id}
              handleToggleEdit={handleToggleEdit}
              previousText={text}
            />
          )}

          {!openTextEditBox && <PostDescription text={text} />}

          <LinkCard
            link={link}
            title={title}
            description={description}
            image={image}
          />
        </PostContainer>
      </ContentContainer>

      {openCommentBox && (
        <CommentContainer>
          <CommentBox id={id} imageUrl={imageUrl} />
        </CommentContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: max-content;
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  border-radius: 16px;

  margin-top: 20px;
`;

const ContentContainer = styled.div`
  position: relative;
  width: 611px;
  padding: 16px 21px 16px 18px;
  display: flex;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: #171717;
`;

const CommentContainer = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
  background-color: #1e1e1e;
  border-radius: 16px;

`;

const ImageContainer = styled.div`
  margin-right: 18px;
  display: flex;
  flex-direction: column;
`;

const PostContainer = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`;

const UserName = styled.div`
  height: 30px;
  margin-top: 5px;
  font-size: 19px;
  font-family: Lato, sans-serif;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
`;
