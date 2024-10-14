import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.comment}>{props.state}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good - bad)/total
  const positive = good/total*100

  return(
    <div>
    <p>good: {good}</p>
    <p>neutral: {neutral}</p>
    <p>bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Average: {average}</p>
    <p>Positive: {positive}%</p>
    </div>
  )
}


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    console.log('customer give you a good review')
    setGood(good+1)
  }
  const handleClickNeu = () => {
    console.log('customer give you a soso review')
    setNeutral(neutral+1)
  }
  const handleClickBad = () => {
    console.log('customer give you a sucks review')
    setBad(bad+1)
  }

  return(
    <div>
    <h1>give feedback plz👀</h1>
    <Button comment={handleClickGood} state='good' />
    <Button comment={handleClickNeu} state='neutral' />
    <Button comment={handleClickBad} state='bad' />
    <h2>comments</h2>
    <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
