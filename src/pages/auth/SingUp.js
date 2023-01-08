import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Context";
import { getPersistLogin, postSingInSingUp } from "../../service/Service";
import AuthBoard from "./AuthBoard";
import { AuthPages } from "./style";


export default function Singup() {

    const [isDisable, setIsDisable] = useState(false)
    const {user, setUser} = useAuth()
    const [form, setForm] = useState({
        email: '',
        password: '',
        name: '',
        imageUrl: ''
    })
    const navigate = useNavigate()

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

        if (!form.email || !form.password || !form.name || !form.imageUrl) {
            setIsDisable(false)
            alert('Preencha todos os campos!')
            return
        }
        if (form.password.length < 6) {
            setIsDisable(false)
            return alert('Senha precisa ter 6 ou mais digitos!')
        }
        postSingInSingUp('sign-up', form)
            .then(e => {

                navigate('/')
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
                <form onSubmit={handleSubmit}>
                    <fieldset disabled={isDisable}>
                        <input name="email" placeholder="e-mail" type='email' id='email' onChange={handleForm} />
                        <input name='password' placeholder='password' type='password' id='password' onChange={handleForm} />
                        <input name="name" placeholder="name" type="text" id="name" onChange={handleForm} />
                        <input name="imageUrl" placeholder="picture url" type="url" id="imageUrl" onChange={handleForm} />
                        <button type="submit" >Sign Up</button>
                    </fieldset>
                </form>
                <span onClick={() => navigate('/')}>Switch back to log in</span>
            </aside>
        </AuthPages>
    );


}