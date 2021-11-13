import { useEffect,useState,setTimeOut, useMemo } from "react";
import "./Quizy.css"
import useSound from "use-sound";
import play from "../sounds/play.mp3"
import correct from "../sounds/correct.mp3"
import wait from "../sounds/wait.mp3"
import wrong from "../sounds/wrong.mp3"

export default function Quizy({data,setStop,questionNumber,setQuestionNumber})
{
    const[question,setQuestion]=useState(null);
    const[clickedanswer,setclickedanswer]=useState(null);
   const [className,setClassName]=useState("answer");
   const [startplay]=useSound(play)
   const [waitplease]=useSound(wait)
   const [correctanswer]=useSound(correct)
   const [wronganswer]=useSound(wrong)

useMemo(()=>
{
    startplay()
},[startplay]);
    useEffect(()=>
    {
     setQuestion(data[questionNumber-1]);   
    },[data,questionNumber]);

    const delay=(duration,callback)=>{
        setTimeout(() => {
           callback() 
        }, duration);
    }
const handleClick=(i)=>{
setclickedanswer(i);
setClassName("answer active");
waitplease();
delay(3000,()=>
setClassName(i.correct ? "answer correct":"answer incorrect")
);
delay(5000,()=>{
    if(i.correct)
    {
        correctanswer();
delay(1000,()=>{
 setQuestionNumber((prev)=>prev+1);
        setclickedanswer(null);
});    
    }
    else
    {
            wronganswer();
        delay(1000,()=>{
setStop(true);
        });
    }
});
};
    return(
<div className="quizy">
    <div className="question">
        {question?.question}
    </div>
    <div className="answers">
        {question?.answers.map((i)=>(
         <div className={clickedanswer===i? className : "answer"} onClick={()=>handleClick(i)}>
       {i.text}
        </div>
        ))}
    </div>
</div>
    );
}