import styled from "styled-components";
import { TfiPencil, TfiTrash } from "react-icons/tfi";
import { IconContext } from "react-icons";
import { useRef } from "react";


export default function DelEditIcons (props) {
    const {handleToggleDel, handleToggleEdit} = props
    return (
        <Container>
            <section onClick={() => handleToggleEdit()}>
                <IconContext.Provider value={{ size: '20px', cursor: 'pointer',  color:'#fff' }}>
                <h2>  <TfiPencil /> </h2>
                </IconContext.Provider>
            </section>
            <section onClick={() => handleToggleDel()}>
                <IconContext.Provider value={{ size: '20px', cursor: 'pointer', color:'#fff' }}>
                <h2>  <TfiTrash /> </h2>
                </IconContext.Provider>
            </section>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30px;
    position: absolute;
    right: 30px;
    top: 5px;
    section {
        margin: 5px;
    }
`