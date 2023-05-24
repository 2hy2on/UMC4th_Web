import axios from "axios";
import { useEffect,useState } from "react";
//849ab74539e64a86f632aa8b6f4d44c3 --rest
const Auth = () =>{
    // const Rest_api_key='849ab74539e64a86f632aa8b6f4d44c3';
    // const redirect_uri = 'http://localhost:3000/auth';
    // //oauth 요청 url
    // const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${Rest_api_key}&redirect_uri=${redirect_uri}`
    // const handleLogin = () =>{
    //     window.location.href = kakaoURL
    // }
    // return(
    //     <>
    //     <button onClick={handleLogin}>카카오 로그인</button>
    //     {/* <h1>안녕</h1> */}
    //     </>
    // )
    const params = new URL(window.location.href).searchParams; //다음과 같은 코드를 실행하면 현재 페이지의 URL
    const code = params.get('code');
    const REST_API_KEY = '74797431b649651d7ae38aac77a6f64d'
    const grantType = "authorization_code";
    const REDIRECT_URI ='http://localhost:3000/auth'
    const [user, setUser] = useState({
        email: '',
        profile: '',
        nickname: ''
      });
    useEffect(()=>{
        axios.post(
            `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
            {},
            {headers: { "Content-Type": "application/x-www-form-urlencoded" }}
        ).then((res) =>{
                console.log(res);
                const {access_token} = res.data; //구조 분해 할당
                //성공하고 토큰을 얻었으면
                axios.post(
                    `https://kapi.kakao.com/v2/user/me`,
                    {}, //바디가 비었다는 뜻
                    {
                        headers: {
                            "Authorization": `Bearer ${access_token}`,
                            "Content-Type": "application/x-www-form-urlencoded",
                        }
                    }
    
                )
                .then((res) => { //정보 가져오기 서ㅇ공
                    console.log('토큰을 통해 회원 정보',res);
                    console.log('토큰을 통해 회원 정보 이메일',user.email);
                    console.log('토큰을 통해 회원 정보 닉네임',user.nickname);
                    console.log('토큰을 통해 회원 정보 프로필',user.profile);
                    const email = res.data.kakao_account.email;
                    const nickname = res.data.properties.nickname;
                    const profile = res.data.properties.profile_image;
          
                    setUser({
                      email: email,
                      nickname: nickname,
                      profile: profile
                    });
                })
                
        })
        .catch((err) =>{
            console.log(err);
        })
        // console.log(data);
    }, []);
    

    return(
    <>
        <div>
            {code} //이게 인가 코드
            <p>Email: {user.email}</p>
      <p>Nickname: {user.nickname}</p>
      <img src={user.profile} alt="Profile" />
        </div>
    </>
    );
};

export default Auth;