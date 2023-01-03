import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthBoard from "./AuthBoard";
import { AuthPages } from "./style";


export default function Singup() {

    const [isDisable, setIsDisable] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: '',
        userName: '',
        pictureUrl: ''
    })
    const navigate = useNavigate()


    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!form.email || !form.password || !form.userName || !form.pictureUrl) {
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
                <form onSubmit={handleSubmit}>
                    <fieldset disabled={isDisable}>
                        <input name="email" placeholder="e-mail" type='email' id='email' onChange={handleForm} />
                        <input name='password' placeholder='password' type='password' id='password' onChange={handleForm} />
                        <input name="userName" placeholder="username" type="text" id="userName" onChange={handleForm} />
                        <input name="pictureUrl" placeholder="picture url" type="url" id="pictureUrl" onChange={handleForm} />
                        <button type="submit" >Sign Up</button>
                    </fieldset>
                </form>
                <span onClick={() => navigate('/')}>Switch back to log in</span>
            </aside>
        </AuthPages>
    );


}