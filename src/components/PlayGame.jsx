import { useRef } from "react";

export default function PlayGame({setUserName}){
    const inputRef=useRef();
const handleClick=()=>{
    inputRef.current.value && setUserName(inputRef.current.value);
};

    return (
        <div className="play">
            <input type="text"  placeholder="Enter Your Name" className="inputbox" 
            ref={inputRef}
            />
            <button className="playGame" type="submit" onClick={handleClick}>Start ➡</button>
        </div>
       
    );
}