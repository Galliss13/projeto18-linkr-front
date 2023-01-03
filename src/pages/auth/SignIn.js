import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthBoard from "./AuthBoard"
import { AuthPages } from "./style"



export default function SignIn() {

    const [isDisable, setIsDisable] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()


    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!form.email || !form.password) {
            alert('Preencha todos os campos!')
            return
        }

        setIsDisable(true)

        console.log(form)
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