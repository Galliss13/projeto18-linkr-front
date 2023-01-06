import { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "../../components/timeline/Post";
import TopBar from "../../components/TopBar/TopBar.js";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function HashtagTimeline() {
  const [posts, setPosts] = useState([]);
  const { hashtag } = useParams();
  
  useEffect(() => {
    const URL = `https://projeto18-linkr-back-1ssc.onrender.com/posts/${hashtag}`;
    const request = axios.get(URL);
    request
      .then((ans) => {
        setPosts(ans.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <TopBar />
      <Main>
        <HeaderContainer>#{hashtag}</HeaderContainer>
        <TimelineContainer>
          <PostContainer>{posts.map(Post)}</PostContainer>
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
  padding-top: 72px;
`;

const Main = styled.div`
  height: 100%;
  margin: 53px 241px 29px;
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
