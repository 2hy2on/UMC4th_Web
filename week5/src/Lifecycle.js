import React,{useEffect, useState} from "react";
const UnmountTest =()=>{

    useEffect(()=>{
        console.log("Mount!!!!!!");

        return ()=>{
            //unmount 시점에 실행 됨!!!
          console.log("Unmount");  
        };
    },[])
    return <div>unmount testining component</div>
}
const Lifecycle = ()=>{
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    useEffect(()=>{
        console.log('Mount!');
    },[]);

    useEffect(()=>{
        console.log('Update!');
    });

    useEffect(()=>{
        console.log(`count is update ${count}`);
        if(count > 5){
            alert("count가 5를 넘었습니다. 따라서 1로 초기화합니다.");
            setCount(1);
        }
    },[count]);

    useEffect(()=>{
        console.log(`text is update ${text}`);
    },[text]);


    return (<div style={{padding: 20, color:'black'}}>
        <div>
            {count}
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
        <div>
            <input value={text} onChange={(e)=>setText(e.target.value)}></input>
        </div>
        <div>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnmountTest/>}
        </div>
    </div>
    );
}
//컴포넌트는 부모가 props변경되거나 state가 바뀌거나 부모가 rerendering되면
export default Lifecycle;