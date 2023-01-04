import styled from "styled-components"
import UserImage from "../elements/UserImage"

export default function PostBar() {
    return (
        <Container>
            <ImageContainer>
                <UserImage />
            </ImageContainer>
            <PostContainer>
                <Header>What are you going to share today?</Header>
                <LinkInput placeholder="http://..." />
                <DescriptionInput placeholder="Awesome article about #javascript" />
                <PublishButton>Publish</PublishButton>
            </PostContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 611px;
    height: 209px;
    padding: 16px 22px 16px 18px;
    display: flex;
    box-sizing: border-box;
    border-radius: 16px;
    background-color: #FFFFFF;
    color: #707070;
    font-family: Lato, sans-serif;
`

const ImageContainer = styled.div`
    margin-right: 18px;
`

const PostContainer = styled.div`
    width: 100%;
    position: relative;
    box-sizing: border-box;

    input, button {
        font-family: Lato, sans-serif;
    }
`

const Header = styled.h1`
    height: 35px;
    margin-top: 5px;
    font-size: 20px;
    font-weight: 300;
`

const LinkInput = styled.input`
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    border: 0;
    border-radius: 5px;
    background-color: #EFEFEF;
    padding: 0 13px;
    font-size: 15px;
    font-weight: 300;
    color: #949494;

    &:focus {
        outline: none;
    }
`

const DescriptionInput = styled.input`
    width: 100%;
    height: 66px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 0;
    border-radius: 5px;
    background-color: #EFEFEF;
    padding: 0 13px;
    font-size: 15px;
    font-weight: 300;
    color: #949494;

    &:focus {
        outline: none;
    }
`

const PublishButton = styled.button`
    width: 112px;
    height: 31px;
    margin-top: 5px;
    position: absolute;
    bottom: 0;
    right: 0;
    border: 0;
    border-radius: 5px;
    background-color: #1877F2;
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
`