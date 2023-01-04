import styled from "styled-components"
import TopBar from "../../components/timeline/TopBar"

export default function Timeline() {
    return (
        <Container>
            {/* TopBar */}
            <TopBar />
            {/* Main */}
            <Main>
                {/* Timeline */}
                <Timeline>
                    {/* Header */}
                    {/* PostBar */}
                    {/* PostContainer */}
                    <PostContainer></PostContainer>
                </Timeline>
            </Main>
                {/* Trending (fazer componente separado) */}
                    {/* Header */}
                    {/* HashtagsContainer */}
            */
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #333333;
`

const Main = styled.div``

const PostContainer = styled.div``