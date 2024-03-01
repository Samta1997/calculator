import {useState } from "react"

function App() {
  const[expression, setExpression]=useState('')
  const[result, setResult]=useState('0')
  const[sign, setSign]=useState('')
  const[bool, setBool]=useState(false)
  const[calculated, setCalculated]=useState(false)
  const[digitLimit, setDigitLimit]=useState(false)
  const handleClick=(value)=>{
    if(!digitLimit){
      if(result!=='Error'){
        if (calculated && (value === '+' || value === '-' || value === '*' || value === '/')) {
          // Start a new calculation using the previous result
          setExpression(result + value);
          setResult('');
          setBool(true);
          setSign(value);
          setCalculated(false);
      }
       else if(calculated){
          setExpression(value)
          setResult(value)
          setCalculated(false)
          setDigitLimit(false)
        }
        else{
          if (value === '.' && result.includes('.')) {
            // Ignore additional decimal points
            return;
        }
          setExpression(expression.concat(value))
          if(result==='0'){
            if(value==='0'){
              setExpression('0')
            }
            setResult(value)
          }
          else{
            if(value==='-'|| value==='+' ||value==='*'||value==='/'){
              setBool(true)
              setSign(value)
              setResult('')
            }
            if(value!=='-' && value!=='+' && value!=='*' && value!=='/'){
              setBool(false)
              setResult(value)
              if(result.length>20 || expression.length>45)
              {
                setDigitLimit(true)
                setExpression(expression)
              }
              if(!digitLimit){
                setResult(result.concat(value))
              } 
            }
          } 
        }
      }
      else{
        setExpression('');
        setResult('0')
        setBool(false)
        setDigitLimit(false)
      }
    }
    else{
     setResult("Digit Limit Met")
    }    
  }
  
  const clear=()=>{
    setExpression('');
    setResult('0')
    setBool(false)
    setDigitLimit(false)
  }
  
  const calculate=()=>{
    try{
      const expressionToEval=eval(expression);
      setResult(expressionToEval)
      setExpression(expression.concat('='+expressionToEval))
      setCalculated(true)
      
    }
    catch(error){
      setResult('Error')
    }
   
  }

  return (
    <div className="author">
    <div className="container">
      <div id="exp">
        <div id="display-1">{expression}</div>
        <div id="display">{bool?sign:result}</div>
      </div>
      <div className="grid">
        <div id="clear" className="grid-items" onClick={clear}>AC</div>
        <div id="divide"  className="grid-items" onClick={()=>handleClick("/")}>/</div>
        <div id="multiply"  className="grid-items" onClick={()=>handleClick("*")}>*</div>
        <div id="seven"  className="grid-items" onClick={()=>handleClick("7")}>7</div>
        <div id="eight" className="grid-items" onClick={()=>handleClick("8")}>8</div>
        <div id="nine" className="grid-items" onClick={()=>handleClick("9")}>9</div>
        <div id="subtract" className="grid-items" onClick={()=>handleClick("-")}>-</div>
        <div id="four" className="grid-items" onClick={()=>handleClick("4")}>4</div>
        <div id="five" className="grid-items" onClick={()=>handleClick("5")}>5</div>
        <div id="six" className="grid-items" onClick={()=>handleClick("6")}>6</div>
        <div id="add" className="grid-items" onClick={()=>handleClick("+")}>+</div>
        <div id="one" className="grid-items" onClick={()=>handleClick("1")}>1</div>
        <div id="two" className="grid-items" onClick={()=>handleClick("2")}>2</div>
        <div id="three" className="grid-items" onClick={()=>handleClick("3")}>3</div>
        <div id="equals" className="grid-items" onClick={calculate}>=</div>
        <div id="zero" className="grid-items " onClick={()=>handleClick("0")}>0</div>
        <div id="decimal" className="grid-items" onClick={()=>handleClick(".")}>.</div>
      </div>
    </div>
    <div id="footer">Designed and Coded by <br/> Dharmender Singh</div>
    </div>
  )
}

export default App
