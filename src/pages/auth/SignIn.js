import { useAuth } from "../../context/Context"
import AuthBoard from "./AuthBoard"
import { SingInPage } from "./style"



export default function SignIn() {

    
    return (
        <SingInPage>
            <AuthBoard/>
        </SingInPage>
    )
}