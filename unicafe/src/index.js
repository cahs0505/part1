import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick,text})=>{
  
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics =(props)=>{
  if(props.all===0){
    return(
      <div>No feeback given</div>
    )
  }
  return(
    <table>
      <tbody>
        <tr>
          <td>
            good
          </td>
          <td>
            {props.good}
          </td>
        </tr>
        <tr>
          <td>
            neutral
          </td>
          <td>
            {props.neutral}
          </td>
        </tr>
        <tr>
          <td>
            bad
          </td>
          <td>
            {props.bad}
          </td>
        </tr>
        <tr>
          <td>
            all
          </td>
          <td>
            {props.all}
          </td>
        </tr>
        <tr>
          <td>
            average
          </td>
          <td>
            {props.average}
          </td>
        </tr>
        <tr>
          <td>
            positive
          </td>
          <td>
            {props.positive}
          </td>
        </tr>
      </tbody>
    </table>
    // <div>
    // <Statistic type={'good'} score={}/>
    // <Statistic type={'neutral'} score={props.neutral}/>
    // <Statistic type={'bad'} score={props.bad}/>
    // <Statistic type={'all'} score={props.all}/>
    // <Statistic type={'average'} score={props.average}/>
    // <Statistic type={'positive'} score={props.positive}/>
    // </div>
  )
}
// const Statistic =({type,score})=>{
  
//   return(
//     <div>{type} {score}</div>
//   )
// }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const handleGood = ()=>{
  setGood(good+1)
}
const handleNeutral = ()=>{
  setNeutral(neutral+1)
}
const handleBad = ()=>{
  setBad(bad+1)
}
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text='good'/>
      <Button onClick={handleNeutral} text='neutral'/>
      <Button onClick={handleBad} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} all={good+bad+neutral} average={(good-bad)/(good+bad+neutral)} positive= {good/(good+bad+neutral)*100+'%'}/>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
