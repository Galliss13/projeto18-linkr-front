import styled from "styled-components";
import UserImage from "../elements/UserImage";
import LinkCard from "./LinkCard";
import PostDeleteModal from "./PostDeleteModal";
import DelEditIcons from "./PostDelEditIcons";
import TextEditBox from "./TextEditBox";
import PostDescription from "./PostDescription";

import { useAuth } from "../../context/Context";
import { useState } from "react";

export default function Post(props) {
  const { id, imageUrl, name, text, link, title, description, image } = props;
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openTextEditBox, setOpenTextEditBox] = useState(false);
  const { user } = useAuth();
  const editObject = { link, text };

  function verifyUserPost(userName, postOwnerName) {
    if (userName === postOwnerName) {
      return true;
    }
    return false;
  }
  const isUserPost = verifyUserPost(user.user, name);

  function handleToggleDel() {
    setOpenDeleteModal(!openDeleteModal);
  }
  function handleToggleEdit() {
    setOpenTextEditBox(!openTextEditBox);
  }

  return (
    <Container>
      <ImageContainer>
        <UserImage imageUrl={imageUrl} />
      </ImageContainer>

      <PostContainer>
        <UserName>{name}</UserName>

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

        {!openTextEditBox && <PostDescription />}

        <LinkCard
          link={link}
          title={title}
          description={description}
          image={image}
        />
      </PostContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 611px;
  /* height: 200px; */
  margin-top: 16px;
  padding: 16px 21px 16px 18px;
  display: flex;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: #171717;
`;

const ImageContainer = styled.div`
  margin-right: 18px;
`;

const PostContainer = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`;

const UserName = styled.h1`
  height: 30px;
  margin-top: 5px;
  font-size: 19px;
  font-family: Lato, sans-serif;
  font-weight: 400;
  color: #ffffff;
`;

const PostDescription = styled.h2`
  margin-bottom: 15px;
  font-size: 17px;
  font-family: Lato, sans-serif;
  font-weight: 400;
  line-height: 130%;
  color: #b7b7b7;
`;
