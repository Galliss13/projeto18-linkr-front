import { useState } from "react";
import { FollowButtonCss } from "./style";


export default function FollowButton(){

    const [isFollowing, setIsFollowing] = useState(false)

    function FollowUser(){
        setIsFollowing(!isFollowing)
    }

    return(
        <FollowButtonCss onClick={FollowUser} isFollowing={isFollowing}>
            {isFollowing ? 'Unfollow': "Follow"}
        </FollowButtonCss>
    );
}