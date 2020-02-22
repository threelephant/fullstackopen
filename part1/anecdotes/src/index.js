import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [maxVotes, setMaxVotes] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))

  const nextAnecdote = () => {
    if (selected + 1 === props.anecdotes.length) {
      setSelected(0)
    } else {
      setSelected(selected + 1)
    }
  }

  const upVote = (anecdote) => () => {
    const copy = [...votes]
    copy[anecdote] += 1
    setVotes(copy)

    let maxVote = copy.indexOf(Math.max(...copy))
    setMaxVotes(maxVote)
  }

  return (
    <>
    <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={upVote(selected)}>
        vote
      </button>
      <button onClick={nextAnecdote}>
        next anecdote
      </button>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[maxVotes]}</p>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />, 
  document.getElementById('root')
)

