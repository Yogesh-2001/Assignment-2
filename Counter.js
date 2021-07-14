import React,{useState} from 'react';
const Counter = ()=>{

const [count,setCount] = useState(0);
const InputEvent=()=>{
  if(count>=25){
    setCount(25)
  }else{
    setCount(count+1)
  }

}
return(
<>
<h1 style={{textAlign:'center'}}>Counter {count}</h1>
<div className='buttons'>
<button onClick={InputEvent}>➕</button>
<button onClick={()=>setCount(count-1)}> ➖</button>
<button onClick={()=>setCount(0)}><i class="material-icons md-18">refresh</i></button>
</div>
</>
)

};


export default Counter;