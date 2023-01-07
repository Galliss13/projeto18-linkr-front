import { useEffect, useState } from "react"
import { useAuth } from "../../context/Context.js";
import { getPersistLogin } from "../../service/Service";

export default function LikesCard({id}) {
    const [likes, setLikes] = useState();
    const [isLiked, setIsLiked] = useState(false);
    const { token } = useAuth();

    useEffect(() => {
        getPersistLogin(`likes/${id}`, token)
        .then((ans) => {
            setLikes(ans.data);
          })
          .catch((err) => {
            console.log(err);
          })
    }, [])

    //fazer outro useEffect com rota de userLikesPost pra verificar valor inicial de isLiked

    function handleClick() {
        if (isLiked) {
            //delete like
        }
        else {
            // post like
        }
    }

    return (
        <div>
            <h1>likes</h1>
        </div>
    )
};
