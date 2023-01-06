import styled from "styled-components";

export const Header = styled.header`

  position: fixed;
  width: 100%;
  top: 0;
  z-index: 5;
  
  
  article{
    position: absolute;
    height: 72px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #151515;
    padding: 0 30px;
    z-index: 4;
    

    h1{
    font-family: "Passion One", cursive;
    font-size: 49px;
    color: #ffffff;
    }
    div{
      display: flex;
      align-items: center;
      gap: 30px;
      cursor: pointer;
      
      h2{
        color: white;
        transition: .5s;
        transform: ${props => props.select ? 'rotate(180deg)' : 'rotate(360deg)'};
      }
    }
  }


`;

export const Layoff = styled.div`

  display: ${props => props.select ? 'initial': 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

export const LogoutButton = styled.button`

  position: absolute;
  top: ${props => props.select ? '72px' : '22px'};
  right: 0;
  width: 150px;
  height: 50px;
  border-radius: 0 0 0 20px;
  border: none;
  background-color:  #151515;
  color: white;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.05em;
  transition: .5s;
  z-index: 3;
  
  cursor: pointer;

  &&:hover{
    text-decoration-line: underline;
  }
`;