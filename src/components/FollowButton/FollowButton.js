import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/Context";
import { checkFollow } from "../../service/Service";
import { FollowButtonCss } from "./style";


export default function FollowButton(){

    const [isFollowing, setIsFollowing] = useState(false)
    const {user} = useAuth()
    const personId = Number(useParams().id)

    useEffect(()=>{

        checkFollow('follow', user.userId, personId, user.token)
        .then( e =>{
            console.log(e.data)
            if(e.data){
                setIsFollowing(true)
            }
        }).catch( e => console.log(e.response.data))
    }, [])

    console.log(personId);
    console.log(user);

    function FollowUser(){

        
    }

    return(
        <FollowButtonCss onClick={FollowUser} isFollowing={isFollowing}>
            {isFollowing ? 'Unfollow': "Follow"}
        </FollowButtonCss>
    );
}