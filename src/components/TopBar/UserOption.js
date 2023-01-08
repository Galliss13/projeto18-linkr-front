import { UserOptionCss } from "./style";


export default function UserOption(props){
    
    const {id, imageUrl, name} = props.data

    return(
        <UserOptionCss>
            <img src={imageUrl} alt={imageUrl} />
            <p>{name}</p>
        </UserOptionCss>
    );
}