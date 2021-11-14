import { useState ,useEffect,memo} from 'react';
import './App.css';
import PlayGame from './components/PlayGame';
import Quizy from './components/Quizy';
import Timer from './components/Timer';
function App() {
  const [questionNumber,setQuestionNumber]=useState(1);
  const [stop,setStop]=useState(false);
  const [earned,setEarned]=useState("₹ 0");
  const [username,setUserName]=useState(null);
  const data=[
  {id:1,amount:"₹ 1000"},
  {id:2,amount:"₹ 2000"},
  {id:3,amount:"₹ 3000"},
  {id:4,amount:"₹ 4000"},
  {id:5,amount:"₹ 10000"},
  {id:6,amount:"₹ 20000"},
  {id:7,amount:"₹ 30000"},
  {id:8,amount:"₹ 40000"},
  {id:9,amount:"₹ 100000"},
  {id:10,amount:"₹ 200000"},
  {id:11,amount:"₹ 300000"},
  {id:12,amount:"₹ 400000"},
  {id:13,amount:"₹ 500000"},
  {id:14,amount:"₹ 700000"},
  {id:15,amount:"₹ 1000000"},
].reverse();

const QA=[
  {
    id:1,
    question:"What is the actual measurement of data that can be sent over network?",
  answers:[
    {
      text:"Bandwidth",
      correct:false,
    },
    {
      text:"Throughput",
      correct:true,
    },{
      text:"Queue size",
      correct:false,
    },{
      text:" Coaxial cables",
      correct:false,
    },
  ],
  },{
    id:2,
    question:"Which of these has the highest transmission capacity?",
  answers:[
    {
      text:"Twisted pair cables",
      correct:false,
    },
    {
      text:"Coaxial cables",
      correct:false,
    },{
      text:"Optical fibers",
      correct:true,
    },{
      text:"All have the same",
      correct:false,
    },
  ],
  },
  {
    id:3,
    question:"Indian Railways completed the trial runs of new Vistadome tourist coaches, manufactured by which unit?",
  answers:[
    {
      text:"Banaras Locomotive Works",
      correct:false,
    },
    {
      text:"Integral Coach Factory",
      correct:true,
    },{
      text:"Modern Coach Factory",
      correct:false,
    },{
      text:"Rail Wheel Plant",
      correct:false,
    },
  ],
  },
  {
    id:4,
    question:"Covishield, the first vaccine to get emergency-use nod from DGCI, is being manufactured by which company?",
  answers:[
    {
      text:"Bharat Biotech",
      correct:false,
    },
    {
      text:"Serum Institute of India",
      correct:true,
    },{
      text:"Biocon",
      correct:false,
    },{
      text:"Dr Reddys Labs",
      correct:false,
    },
  ],
  },
   {
    id:5,
    question:"Which financial institution has launched “Digital Payments Index (DPI)”?",
  answers:[
    {
      text:"RBI",
      correct:true,
    },
    {
      text:"NPCI",
      correct:false,
    },{
      text:"Finance Ministry",
      correct:false,
    },{
      text:"State Bank of India",
      correct:false,
    },
  ],
  },
   {
    id:6,
    question:"Which Indian city is to play host to the 51st edition of the International Film Festival of India (IFFI)?",
  answers:[
    {
      text:"Goa",
      correct:true,
    },
    {
      text:"Chennai",
      correct:false,
    },{
      text:"Cochin",
      correct:false,
    },{
      text:"Kolkata",
      correct:false,
    },
  ],
  },
   {
    id:7,
    question:"K-9 Journal, which was recently released, is associated with which field?",
  answers:[
    {
      text:"Medicine",
      correct:false,
    },
    {
      text:"Policing",
      correct:true,
    },{
      text:"Pandemic",
      correct:false,
    },{
      text:"Robotics",
      correct:false,
    },
  ],
  },
  {
    id:8,
    question:"Which Defence force has proposed to acquire 12 high-performance patrol boats?",
  answers:[
    {
      text:"Indian Navy",
      correct:false,
    },
    {
      text:"Indian Coast Guard",
      correct:false,
    },{
      text:"Indian Air Force",
      correct:false,
    },{
      text:"Indian Army",
      correct:true,
    },
  ],
  },
  {
    id:9,
    question:"DRDO is to establish Biodigester Mk-II Technology in which state’s metro rail network?",
  answers:[
    {
      text:"Kerala",
      correct:false,
    },
    {
      text:"Maharashtra",
      correct:true,
    },{
      text:"Tamil Nadu",
      correct:false,
    },{
      text:"Karnataka",
      correct:false,
    },
  ],
  },
  {
    id:10,
    question:"What is used in most programs that is a part of a program and guides the user through certain steps?",
  answers:[
    {
      text:"Software",
      correct:false,
    },
    {
      text:"Wizard",
      correct:true,
    },{
      text:"Wiki",
      correct:false,
    },{
      text:"Debit card",
      correct:false,
    },
  ],
  },
   {
    id:11,
    question:"Which among the following are not Objects in Access Database? ",
  answers:[
    {
      text:"Table",
      correct:false,
    },
    {
      text:"Form",
      correct:false,
    },{
      text:"Query",
      correct:false,
    },{
      text:"Pivot table",
      correct:true,
    },
  ],
  },
   {
    id:12,
    question:"Core Banking Solutions are developed to perform__?",
  answers:[
    {
      text:"recording of transactions",
      correct:false,
    },
    {
      text:"passbook maintenance",
      correct:false,
    },{
      text:"interest calculations",
      correct:false,
    },{
      text:"All of the above",
      correct:true,
    },
  ],
  },
  {
    id:13,
    question:"What was UNIVAC?",
  answers:[
    {
      text:"A computer",
      correct:true,
    },
    {
      text:"A Super computer",
      correct:false,
    },{
      text:"A software Programme",
      correct:false,
    },{
      text:"A Computer Manufacturer",
      correct:false,
    },
  ],
  },
  {
    id:14,
    question:"In which year Microsoft was founded ?",
  answers:[
    {
      text:"1970",
      correct:false,
    },
    {
      text:"1974",
      correct:false,
    },{
      text:"1975",
      correct:true,
    },{
      text:"1976",
      correct:false,
    },
  ],
  },
   {
    id:15,
    question:"How many banks are promoting the National Payments Corporation of India (NPCI)?",
  answers:[
    {
      text:"6",
      correct:false,
    },
    {
      text:"8",
      correct:false,
    },{
      text:"10",
      correct:true,
    },{
      text:"12",
      correct:false,
    },
  ],
  },
];
console.log("App component render now");
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(data.find((i) => i.id === questionNumber - 1).amount);
  }, [questionNumber, data]);
  return (
    <div className="test">
      {username?<>
      <div className="main">
       {stop?<div><h1 className="finalScore">You Earned :{""} {earned}</h1>
       <h1 className="finalScore1"> Thank You 🙏 <span className="nameDisplay">{username}</span>  For Playing </h1></div>:(
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
 </> :<PlayGame setUserName={setUserName}/> }
      
         </div>

  );
}

export default memo(App);
