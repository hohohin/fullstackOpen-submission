import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const voteArray = anecdotes.map((anecdote, index) => ({id: index, anecdote: anecdote, vote:0}))

  const [selected, setSelected] = useState(0)

  const [votes, setVote] = useState(voteArray)

  const [champion, setRank] = useState(voteArray[0])

  const handleSelect =() => {
    // const select = Math.floor(Math.random()*10)
    //better way: const randomItem = array[Math.floor(Math.random() * array.length)];
    const select = Math.floor(Math.random() * anecdotes.length)
    setSelected(select)
  }

  const handleVote = () => {
    const temVote = [...votes]
    temVote[selected].vote += 1
    setVote(temVote)

    if (votes[selected].vote > champion.vote) {
      setRank(votes[selected])
      console.log(champion, 'champion changed')
    } 
  }

  return (
    <div>
      <h1>{anecdotes[selected]}</h1>
      <button onClick={handleVote}>
        vote this anecdote ({votes[selected].vote} {votes[selected].vote === 1 ? 'vote' : 'votes'} now)
      </button>
      <button onClick={handleSelect}>next anecdotes</button>
      <p>Most Voted(has {champion.vote} {champion.vote === 1 ? 'vote' : 'votes'}):</p>
      <p><strong>{champion.anecdote}</strong></p>
      {console.log('anecdote',champion.id, 'is champion now with ', champion.vote, 'vote' )}
    </div>
  )
}

export default App