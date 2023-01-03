import styled from "styled-components";


export const SingInPage = styled.main`

    display: flex;
    

    form{
        width: 650px;
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
        }
    }
`;