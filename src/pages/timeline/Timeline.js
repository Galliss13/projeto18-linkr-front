import { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "../../components/timeline/Post";
import PostBar from "../../components/timeline/PostBar";
import TopBar from "../../components/TopBar/TopBar.js";
import axios from "axios";
import Trending from "../../components/timeline/Trending";
import { getPersistLogin, urlAxios } from "../../service/Service";
import SearchBar from "../../components/TopBar/SearchBar";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/Context";
import { ThreeDots } from "react-loader-spinner";
import FollowButton from "../../components/FollowButton/FollowButton";

export default function Timeline() {
  /* Criar estados e chamadas de contexto */
  const [posts, setPosts] = useState([]);
  const [header, setHeader] = useState("");
  const [reload, setReload] = useState(true);
  const [error, setError] = useState();
  /* Criar useEffect para fazer requisição dos posts */
  const { id } = useParams();
  const { user, refresh, isLoading, setIsLoading } = useAuth();
  const { token } = user;
  useEffect(() => {
    setIsLoading(true);
    let path = urlAxios;
    if (id) {
      path = `user/${id}`;
    } else {
      path = "timeline";
    }
    getPersistLogin(path, token)
      .then((ans) => {
        
        setPosts(ans.data);
        setIsLoading(false);
        if (id) {
          console.log(ans)
          console.log(ans.data[0].name)
          setHeader(ans.data[0].name + "'s posts");
        } else {
          setHeader("timeline");
        }
      })
      .catch((err) => {
        setIsLoading(false)
        if (err.response.status === 404) {
          setError("User " + err.response.data)
        }
        console.log(err.response.data);
      });
  }, [id, token, reload, refresh]);
  
  return (
    <Container>
      {/* Header */}
      <TopBar />
      {/* SearchBar shows when width from page is less then 800px */}
      <SearchBar screen={"<800"} />
      { (id && id != user.userId) && <FollowButton/>}
      <main>
        <Main>
          {error && (
            <HeaderContainer>{error}</HeaderContainer>
          )}
          {isLoading && (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#ffffff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          )}
          {!isLoading && <HeaderContainer>{header}</HeaderContainer>}
          <TimelineContainer>
            {!id && <PostBar />}
            {isLoading && (
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#ffffff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            )}
            {!isLoading && typeof posts === "string" && (
                <EmptyPosts>{posts}</EmptyPosts>
            )}
            {!isLoading && typeof posts !== "string" && (
              <PostContainer>
                {posts.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </PostContainer>
            )}
          </TimelineContainer>
        </Main>
        <nav></nav>
      </main>
      <Trending />
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
  main {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
  }

  @media (max-width: 1100px) {
    main {
      nav {
        display: none;
      }
    }
  }
`;

const Main = styled.div`
  height: 100%;
`;

const HeaderContainer = styled.h1`
  margin-bottom: 43px;
  font-family: Oswald, sans-serif;
  font-weight: 700;
  font-size: 43px;
  color: #ffffff;
`;

const TimelineContainer = styled.div`
  margin-bottom: 29px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 29px;
`;

const EmptyPosts = styled.h1`
 font-family: Lato, sans-serif;
 font-size: 17px;
 color: #ffffff;
`

