import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props)=>{
  return (
    <h1>{props.course}</h1>
  )

}
const Part=(props)=>{
  return(
    <p>
        {props.part} {props.exercises}
    </p>
  )
}
const Content=(props)=>{
  return(
    <>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
    </>
  )
}

const Total = (props)=>{
  return(
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )

}
const App = () => {
  // const-definitions
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises} part2={course.parts[1].name} exercises2={course.parts[1].exercises} part3={course.parts[2].name} exercises3={course.parts[2].exercises}/>
      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

