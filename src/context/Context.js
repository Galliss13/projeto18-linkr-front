import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState({
    user: "",
    token: ""
  });
  const [isLoading, setIsLoading] = useState(false)

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

// Para usar o context importar useAuth deste arquivo e fazer o destruct
/*
    Exemplo:

    import {useAuth} from './context/Context'

    const {user_name, token} = useAuth()
*/
