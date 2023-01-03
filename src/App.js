import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './assets/styles/GlobalStyle'
import SignIn from "./pages/auth/SignIn";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
    </BrowserRouter>
  )
}
