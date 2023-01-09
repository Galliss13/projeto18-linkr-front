import { IconContext } from "react-icons";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export function HeartOutline() {
  return (
    <IconContext.Provider value={{color: 'white', size: '25px'}}>
      <div>
        <AiOutlineHeart />
      </div>
    </IconContext.Provider>
  );
}

export function HeartFilled() {
    return (
      <IconContext.Provider value={{color: 'red', size: '25px'}}>
        <div>
          <AiFillHeart />
        </div>
      </IconContext.Provider>
    );
  }
  
