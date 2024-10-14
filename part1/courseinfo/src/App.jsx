const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  const mparts = props.parts.map(part => (
    <p key={part.name}>{part.name} {part.exercises}</p>
  )
  )
  return(
    <div>
      {mparts}
    </div>
  )
}

const Total = (props) => {
  const total = props.parts.reduce((sum,parts) => sum + parts.exercises, 0)
  return(
    <div>
    <p><strong>Number of exercises: </strong>
    {total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name:'Half Stack application development',
    parts:[
    {
      name:'Fundamentals of React',
      exercises:11
    }
    ,
    {
      name:'Using props to pass data',
      exercises:7
    }
    ,
    {
      name:'State of a component',
      exercises:14
    }
    ]
  }

  
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <p>this is ver1.5</p>
    </div>
  )
}

export default App