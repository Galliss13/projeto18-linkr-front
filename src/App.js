import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './assets/styles/GlobalStyle'
import SignIn from "./pages/auth/SignIn";
import Singup from "./pages/auth/SingUp";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/singUp" element={<Singup/>} />
        </Routes>
    </BrowserRouter>
  )
}
