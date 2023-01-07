import styled from "styled-components";
import { TfiPencil, TfiTrash } from "react-icons/tfi";
import { IconContext } from "react-icons";
import { urlAxios, editPost, deletePost } from "../../service/Service";
import { useRef } from "react";


export default function DelEditIcons (props) {
    const {handleToggleDel} = props
    return (
        <Container>
            <section>
                <IconContext.Provider value={{ size: '25px', cursor: 'pointer',  color:'#fff' }}>
                <h2>  <TfiPencil /> </h2>
                </IconContext.Provider>
            </section>
            <section onClick={() => handleToggleDel()}>
                <IconContext.Provider value={{ size: '25px', cursor: 'pointer', color:'#fff' }}>
                <h2>  <TfiTrash /> </h2>
                </IconContext.Provider>
            </section>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    position: absolute;
    right: 10px;
`