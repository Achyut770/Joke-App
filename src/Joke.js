import React from "react"
import list from "./jokesData"

export default function Joke(props) {
    const [num , setNum] = React.useState(0)
    const [prevBoolean , setPrevBoolean] =React.useState(false)
    const [nextBoolean , setNextBoolean] = React.useState(false)
    const [showBoolean , setShowBoolean] = React.useState()
    
    
    const prev = ()=>{
        if (num <=1){
            return setPrevBoolean(true)
        }else if (num>1){
            return setPrevBoolean(false)
        }
    }
    const next = ()=>{
        if (num < list.length-1){
            return setNextBoolean(false)
        }
        else if (num >= list.length-1){
            return setNextBoolean(true)
        }
    }
    
const show =()=>{
    if(num==0){
       return  setShowBoolean(false)
    }
    else  {
       return  setShowBoolean(true)
    }
}
    
    
    React.useEffect(()=>{
        prev();
        next();
        show();
     
    },[num])
    
    const decrement =()=>{
        setNum((a)=>{
            if (a>1){
                return a-1
            }
            else if(a<=1){
                return a
            }
        })
    }
    
    const increment =()=>{
        setNum((a)=>{
            if (a < list.length-1){
                return a+1
            } else {
                return a
            }
        })
    }
    
    return (<div className="Container">
    <div className="title">Joke App</div>
        <div className="joke">
        <div className="main">
        <div>
        <button onClick={()=>{
             return setNum(0)
         }}>Restart</button>
      { prevBoolean ? <button className="prev">Prev</button> : <button onClick={decrement} >Prev</button>}
        { nextBoolean ? <button className="prev">Next</button> : <button onClick={increment}>Next</button>}</div>
         
         <div>
         
   { showBoolean && <span className="big">Setup:</span>}   <p className={showBoolean ? "":"start"}>{list[num].setup}</p><br />
   { showBoolean && <span  className="big" >Punchline:</span> } <p>{list[num].punchline}</p>
         </div>
         </div>
        </div>
        </div>
    )
}