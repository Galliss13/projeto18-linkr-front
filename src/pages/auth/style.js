import styled from "styled-components";


export const SingInPage = styled.main`

    display: flex;

    aside{
            width: 650px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center ;
            gap: 15px;
        
        form{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center ;
            gap: 15px;

            input{
                width: 66%;
                height: 65px;
                background: #FFFFFF;
                border-radius: 6px;
                padding: 0 10px;
                font-family: 'Oswald';
                font-style: normal;
                font-weight: 700;
                font-size: 27px;
                line-height: 40px;
                border: none;
            }

            button{
                width: 66%;
                height: 65px;
                background: #1877F2;
                border-radius: 6px;
                color: white;
                border: none;
                font-family: 'Oswald';
                font-size: 27px;
                font-weight: 700;
                cursor: pointer;
                transition: 0.5s;
            }
            button:hover{
                opacity: 0.8;
            }
        }

    }

    span{
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
        cursor: pointer;
    }
    span:hover{
        text-decoration-line: underline;

    }
    


`;