import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/Context"
import { postSingInSingUp } from "../../service/Service"
import AuthBoard from "./AuthBoard"
import { AuthPages } from "./style"



export default function SignIn() {

    const [isDisable, setIsDisable] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const { user, setUser } = useAuth()


    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function handleSubmit(e) {

        e.preventDefault()

        setIsDisable(true)

        if (!form.email || !form.password) {
            alert('Preencha todos os campos!')
            setIsDisable(false)
            return
        }

        if (form.password.length < 6) {
            setIsDisable(false)
            return alert('Senha precisa ter 6 ou mais digitos!')
        }
        postSingInSingUp('/', form)
            .then(e => {

                setUser(e.data)
                navigate('/timeline')

            })
            .catch(e => {
                alert(e.response.data)
                setIsDisable(false)
            })
    }

    return (
        <AuthPages>
            <AuthBoard />
            <aside>
                <form onSubmit={handleSubmit} >
                    <fieldset disabled={isDisable}>
                        <input name="email" placeholder="e-mail" type='email' id='email' onChange={handleForm} />
                        <input name='password' placeholder='password' type='password' id='password' onChange={handleForm} />
                        <button type="submit" >Log In</button>
                    </fieldset>
                </form>
                <span onClick={() => navigate('/singUp')}>First time? Create an account!</span>
            </aside>
        </AuthPages>
    )
}