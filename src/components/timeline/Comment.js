import styled from "styled-components"
import UserImage from "../elements/UserImage"

export default function Comment(props) {
    const {imageUrl, userName, commentText} =  props
    return (
        <CommentContainer> 
            <UserImage imageUrl={imageUrl} />
            <CommentContent>
                <h2>{userName}</h2>
                <h3>{commentText}</h3>
            </CommentContent>
        </CommentContainer>
    )
};

const CommentContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 600px;
    height: 70px;
`

const CommentContent = styled.div`
    position: absolute;
    left: 80px;
    display: flex;
    flex-direction: column;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    h2 {
        color: #F3F3F3;
    }
    h3 {
        color: #ACACAC;
    }
`



