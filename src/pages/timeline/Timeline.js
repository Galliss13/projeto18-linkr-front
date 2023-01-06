import styled from "styled-components";
import Post from "../../components/timeline/Post";
import PostBar from "../../components/timeline/PostBar";
import TopBar from "../../components/TopBar/TopBar";


export default function Timeline() {
  return (
    <Container>
      <TopBar />
      <Main>
        <HeaderContainer>timeline</HeaderContainer>
        <TimelineContainer>
          <PostBar />
          {/* PostContainer */}
          <PostContainer>
            {/* Do posts map */}
            <Post />
            <Post />
          </PostContainer>
        </TimelineContainer>
      </Main>
      {/* Trending (fazer componente separado) */}
      {/* Header */}
      {/* HashtagsContainer */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #333333;
`;

const Main = styled.div`
  height: 100%;
  margin: 53px 241px 0;
`;

const HeaderContainer = styled.h1`
  margin-bottom: 43px;
  font-family: Oswald, sans-serif;
  font-weight: 700;
  font-size: 43px;
  color: #ffffff;
`;

const TimelineContainer = styled.div``;

const PostContainer = styled.div`
    margin-top: 29px;
`;
