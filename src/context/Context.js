import React, { useState } from "react";


export const AuthContext = React.createContext({})


export const AuthProvider = (props) => {

    const [user, setUser] = useState(
        {
            user:'',
            token:'',

        }
    )

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => React.useContext(AuthContext)

// Para usar o context importar useAuth deste arquivo e fazer o destruct
/*
    Exemplo:

    import {useAuth} from './context/Context'

    const {user_name, token} = useAuth()
*/