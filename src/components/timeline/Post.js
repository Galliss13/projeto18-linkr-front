import ReactHashtag from "react-hashtag"
import styled from "styled-components"
import UserImage from "../elements/UserImage"

export default function Post() {


    return (
        <Container>
            <ImageContainer>
                <UserImage />
            </ImageContainer>
            <PostContainer>
                <UserName>User</UserName>
                <PostDescription>
                    <ReactHashtag renderHashtag={(hashtagValue) => (
                    <StyledHashtag href={`hashtags/${hashtagValue.split('#')[1]}`}>
                        {hashtagValue}
                    </StyledHashtag>
                    )}>
                        Teste de exemplo de hashtag #exemplo #dois #3
                    </ReactHashtag>
                </PostDescription>
                <UrlLink></UrlLink>
            </PostContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 611px;
    height: 200px;  /* configurar depois de acordo com a altura do link e da descrição */
    margin-top: 16px;
    padding: 16px 22px 16px 18px;
    display: flex;
    border-radius: 16px;
    box-sizing: border-box;
    background-color: #171717;
`

const ImageContainer = styled.div`
    margin-right: 18px;
`

const PostContainer = styled.div``

const UserName = styled.h1``

const PostDescription = styled.h2`
color: white;
`

const UrlLink = styled.div``

const StyledHashtag = styled.a`
    color: tomato;
`;