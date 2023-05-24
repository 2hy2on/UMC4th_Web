import styled from 'styled-components';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [location, setLocation] = useState('');
  const API_KEY = "0e921329c4ac5aa5f8e0b06db3b9fcd7";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  const [result, setResult] = useState({});

  const searchWeather = async(e) =>{
      if(e.key == 'Enter'){
        try{
            const data = await axios({
              method: 'get',
              url: url
            })
            console.log(data);
            setResult(data);
        }
        catch(err){
          alert(err);
        }
      } //엔터 눌렀을때 
  } //비동기 방식으로 진행
  return (
    <AppWrap>
      <div className="appContentWrap">
        <input
        placeholder='도시를 입력하세요'
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
        type='text'
        onKeyDown={searchWeather}
        />
        {
          Object.keys(result).length !== 0 && (
            <ResultWrap>
            <div className='city'>{result.data.name}</div>
            <div className='temp'>
              {Math.round(((result.data.main.temp -273.15) * 10)/10)}
              </div>
            <div className='sky'>{result.data.weather[0].main}</div>
          </ResultWrap>
          )
        }
      </div>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  
  .appContentWrap{
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      position: absolute;
      border:1px blue solid;
      padding: 50px;
  }
`

const ResultWrap = styled.div`
  margin-top: 68px;
  padding: 10px;
  border: 1px black solid;
  border-radius: 8px;
`;
