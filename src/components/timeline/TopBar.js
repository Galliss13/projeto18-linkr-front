import styled from "styled-components"

export default function TopBar() {
    return (
        <Container>
            <Logo>
                <Linkr>Linkr</Linkr>
            </Logo>
            <UserContainer>
                <DropdownList />
                <UserImage />
            </UserContainer>
        </Container>
    )
}

const Container = styled.div`
    height: 72px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Logo = styled.div`
    margin-left: 28px;
    display: flex;
    align-items: center;
`

const Linkr = styled.h1`
    font-family: 'Passion One', cursive;
    font-size: 49px;
`

const UserContainer = styled.div`
    width: 90px;
    margin-right: 28px;
    display: flex;
    align-items: center;
`

const DropdownList = styled.div``

const UserImage = styled.img``