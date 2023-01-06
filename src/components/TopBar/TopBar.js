
import UserImage from "../elements/UserImage";
import { SlArrowDown } from 'react-icons/sl'
import { IconContext } from "react-icons";
import { useState } from "react";
import { Header, Layoff, LogoutButton } from "./style";

export default function TopBar() {

  const [select, setSelect] = useState(false)



  return (
    <Header select={select}>

      <article>
        <h1>linkr</h1>

        <div onClick={() => setSelect(!select)}>

          <section>

            <IconContext.Provider value={{ size: '25px', cursor: 'pointer' }}>
              <h2> <SlArrowDown />  </h2>
            </IconContext.Provider>

          </section>
          
          <UserImage />

        </div>
      </article>

      <LogoutButton onClick={() => console.log('clica')} select={select} >Logout</LogoutButton>

      <Layoff select={select} onClick={()=>setSelect(!select)}/>

    </Header>
  );
}

