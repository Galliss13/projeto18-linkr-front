import styled from "styled-components";
import { useAuth } from "../../context/Context";
import { deletePost } from "../../service/Service";
import { useState } from "react";

export default function PostDeleteModal(props) {
  const { handleToggleDel, postId } = props;
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { token } = user;
  console.log(token);
  
  function delPost() {
    setLoading(true);
    deletePost(`post/${postId}`, token)
      .then((res) => {
        handleToggleDel();
        setLoading(false);
      })
      .catch((err) => {
        handleToggleDel();
        setLoading(false);
        alert("Could not delete post");
      });
  }

  return (
    <ContainerBackground>
      <Container>
        <h2>Are you sure you want delete this post?</h2>
        <Buttons>
          <button
            color="#fff"
            backgroudcolor="#1877F2"
            onClick={() => handleToggleDel()}
          >
            No, go back
          </button>
          <button
            color="#1877F2"
            backgroudcolor="#FFF"
            onClick={() => delPost()}
            disabled={loading ? true : false}
          >
            {loading ? "Deleting..." : "Yes, delete it"}
          </button>
        </Buttons>
      </Container>
    </ContainerBackground>
  );
}

const ContainerBackground = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 597px;
  height: 262px;
  background-color: #333333;
  border-radius: 50px;
  h2 {
    width: 338px;
    height: 82px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    text-align: center;
    color: #ffffff;
  }
`;

const Buttons = styled.button`
  display: flex;
  justify-content: space-between;
  button {
    width: 134px;
    height: 37px;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroudcolor};
    border-radius: 5px;
  }
`;
