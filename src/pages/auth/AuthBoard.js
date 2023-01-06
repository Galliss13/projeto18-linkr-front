import styled from "styled-components";


export default function AuthBoard(){
    return(
        <Board>

            <h1>linkr</h1>
            <h2>save, share and discover <br/>the best links on the web</h2>
        </Board>
    );
}

const Board = styled.section`

    background-color: #151515;
    color: white;
    width: 65%;
    height: 100vh;
    padding: 300px 20px 0 6%;
    h1{
        font-family: 'Passion One', cursive;
        font-weight: 700;
        font-size: 106px;
        letter-spacing: 0.05em;
   }
    h2{
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
    }

    @media (max-width: 800px) {
        width: 100%;
        height: 300px;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        h1{
            font-size: 5em;
            
        }
        h2{
            font-size: 2em;
            line-height: 40px;
        }
    }

`;