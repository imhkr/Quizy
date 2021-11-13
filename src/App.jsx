import { useState ,useEffect} from 'react';
import './App.css';
import Quizy from './components/Quizy';
import Timer from './components/Timer';
function App() {
  const [questionNumber,setQuestionNumber]=useState(1);
  const [stop,setStop]=useState(false);
  const [earned,setEarned]=useState("₹ 0");
  const [username,setUserName]=useState(null);
  const data=[
  {id:1,amount:"1000"},
  {id:2,amount:"2000"},
  {id:3,amount:"3000"},
  {id:4,amount:"4000"},
  {id:5,amount:"10000"},
  {id:6,amount:"20000"},
  {id:7,amount:"30000"},
  {id:8,amount:"40000"},
  {id:9,amount:"100000"},
  {id:10,amount:"200000"},
  {id:11,amount:"300000"},
  {id:12,amount:"400000"},
  {id:13,amount:"500000"},
  {id:14,amount:"700000"},
  {id:15,amount:"1000000"},
].reverse();

const QA=[
  {
    id:1,
    question:"Rolex is a company that specializes in what type of product?",
  answers:[
    {
      text:"Phone",
      correct:false,
    },
    {
      text:"Watches",
      correct:true,
    },{
      text:"Phone",
      correct:false,
    },{
      text:"Phone",
      correct:false,
    },
  ],
  },{
    id:1,
    question:"Pesiphon is a company that specializes in what type of product?",
  answers:[
    {
      text:"Phone",
      correct:false,
    },
    {
      text:"Watches",
      correct:false,
    },{
      text:"Food",
      correct:true,
    },{
      text:"Phone",
      correct:false,
    },
  ],
  },
];
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(data.find((i) => i.id === questionNumber - 1).amount);
  }, [questionNumber, data]);
  return (
    <div className="test">
      
     <div className="main">
       {stop?<h1 className="finalScore">You Earned:{earned}</h1>:(
       <>
<div className="top">
  <div className="timer">
    <Timer setStop={setStop} questionNumber={questionNumber}/>
  </div>
</div>
<div className="bottom">
 <Quizy
  data={QA}
  setStop={setStop}
  questionNumber={questionNumber}
  setQuestionNumber={setQuestionNumber}
  />
</div>
</>)}
    </div>

      <div className="sideui">
<ul className="moneyList">
  {data.map((item)=>(
  <li className={questionNumber===item.id ? "moneyListItem active" : "moneyListItem" }>
    <span className="questionNumber">{item.id}</span>
   <span className="questionAmount">{" "}{item.amount} </span>
  </li>))}
</ul>
      </div>
    </div>

  );
}

export default App;
