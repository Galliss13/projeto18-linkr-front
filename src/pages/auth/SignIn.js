import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/Context"
import { getPersistLogin, postSingInSingUp } from "../../service/Service"
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

    useEffect(() => {

        if (localStorage.token && !user.user) {

            getPersistLogin('persist-login', localStorage.token).then(e => {

                setUser(e.data)
                navigate('/timeline')
            })
        }
        // eslint-disable-next-line
    }, [])


    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function handleSubmit(e) {

        e.preventDefault()

        setIsDisable(true)

        if (!form.email || !form.password) {

            setIsDisable(false)
            return alert('Preencha todos os campos!')
        }

        if (form.password.length < 6) {

            setIsDisable(false)
            return alert('Senha precisa ter 6 ou mais digitos!')
        }

        postSingInSingUp('sign-in', form)
            .then(e => {

                setUser(e.data)
                localStorage.setItem('token', e.data.token)

                navigate('/timeline')

            })
            .catch(e => {
                alert(e.response.data)

            })
        setIsDisable(false)
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