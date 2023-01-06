import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './assets/styles/GlobalStyle'
import SignIn from "./pages/auth/SignIn";
import Singup from "./pages/auth/SingUp";
import HashtagTimeline from "./pages/timeline/HashtagTimeline";
import Timeline from "./pages/timeline/Timeline";


export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/singUp" element={<Singup/>} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/hashtags/:hashtag" element={<HashtagTimeline />} />
        </Routes>
    </BrowserRouter>
  )
}
