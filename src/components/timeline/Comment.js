import styled from "styled-components"

export default function Comment(props) {
    const {imageUrl, userName, commentText} =  props
    return (
        <CommentContainer> 
            <Image src={imageUrl}/>
            <CommentContent>
                <h2>{userName}</h2>
                <h3>{commentText}</h3>
            </CommentContent>
        </CommentContainer>
    )
};

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const CommentContent = styled.div`
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

const Image = styled.image`
    width: 39px;
    height: 39px;
    border-radius: 85px;
`


