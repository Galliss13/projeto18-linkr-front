import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../context/Context.js";
import ReactHashtag from "react-hashtag";
import { getPersistLogin } from "../../service/Service.js";

export default function Trending() {
  const [trendingHashtags, setTrendingHashtags] = useState();
  const { user } = useAuth();
  const { token } = user;

  useEffect(() => {
    getPersistLogin("trending", token)
      .then((ans) => {
        setTrendingHashtags(ans.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <TrendingContainer>
      <TrendingHeader>Trending</TrendingHeader>
      {trendingHashtags?.map((h) => {
        return (
          <ReactHashtag
            renderHashtag={(hashtagValue) => (
              <StyledHashtag href={`../hashtags/${hashtagValue.split("#")[1]}`}>
                {hashtagValue}
              </StyledHashtag>
            )}
          >
            {h.hashtag}
          </ReactHashtag>
        );
      })}
    </TrendingContainer>
  );
}

const TrendingHeader = styled.h1`
  width: 100%;
  border-bottom: 1.5px solid grey;
  padding-bottom: 15px;
  font-family: Oswald, sans-serif;
  font-weight: 700;
  font-size: 27px;
`;
const TrendingContainer = styled.div`
  width: 25%;
  height: auto;
  background-color: #171717;
  color: #ffffff;
  position: fixed;
  right: 241px;
  top: 210px;
  padding: 20px;
  border-radius: 16px;
`;

const StyledHashtag = styled.a`
  margin-top: 10px;
  font-family: Lato, sans-serif;
  font-weight: 700;
  font-size: 19px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
`;
