import styled from "styled-components"

export default function CommentCard(props) {
    const {imageUrl, userName, commentText} =  props
    return (
        <CommentContainer> 
            <Image src={imageUrl}/>
            <Name>{userName}</Name>
            <Text>{commentText}</Text>
        </CommentContainer>
    )
};

const CommentContainer = styled.div``

const Image = styled.image``

const Name = styled.h2``

const Text = styled.h3``
