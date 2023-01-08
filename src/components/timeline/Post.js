import styled from "styled-components";
import UserImage from "../elements/UserImage";
import LinkCard from "./LinkCard";
import ReactHashtag from "react-hashtag";
import LikesCard from "./LikesCard";
import { urlAxios } from "../../service/Service";
import axios from "axios";

export default function Post(props) {
  const { imageUrl, name, text, link, title, description, image, id, userId } = props;
  // function redirectToProfile() {
  //   const URL = urlAxios + `user/${userId}`
  //   const request = axios.get(URL)
  //   request.then((ans) => {

  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }
  return (
    <Container key={id}>
      <ImageContainer>
        <UserImage imageUrl={imageUrl} />
        <LikesCard id={id} />
      </ImageContainer>
      <PostContainer>
        <UserName>{name}</UserName>
        <PostDescription>
          <ReactHashtag
            renderHashtag={(hashtagValue) => (
              <StyledHashtag href={`hashtags/${hashtagValue.split("#")[1]}`}>
                {hashtagValue}
              </StyledHashtag>
            )}
          >
            {text}
          </ReactHashtag>
        </PostDescription>
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
  display: flex;
  flex-direction: column;
`;

const PostContainer = styled.div`
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

const StyledHashtag = styled.a`
  font-weight: 700;
  color: #b7b7b7;
`;
