import logo from './logo.svg';
import './App.css';
import Auth from './Auth';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const Rest_api_key = '74797431b649651d7ae38aac77a6f64d';
  const redirect_uri = 'http://localhost:3000/auth';
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${Rest_api_key}&redirect_uri=${redirect_uri}`;
  const handleLogin = () =>{
    window.location.href = kakaoURL
}

return(
    <>
    <button onClick={handleLogin}>카카오 로그인</button>
    {/* <h1>안녕</h1> */}
    <Routes>
      <Route path="/auth" element={<Auth/>}/>
    </Routes>
    </>

    
);
}

export default App;
