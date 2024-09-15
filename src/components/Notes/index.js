import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {MainHeading} from './styledComponents'

import './index.css'

// const notesList = [
//   {
//     id: 1,
//     title: 'React',
//     note: 'React JS is an open-source JavaScript library used to build user interfaces',
//   },
//   {
//     id: 2,
//     title: 'React Hooks',
//     note: 'Hooks are the new addition in React',
//   },
//   {
//     id: 3,
//     title: 'React Hooks',
//     note: 'Hooks are the new addition in React',
//   },
// ]

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, addNote] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNote = event => {
    setNote(event.target.value)
  }

  const onClickAdd = event => {
    event.preventDefault()
    addNote(prevState => [...prevState, {id: uuidv4(), title, note}])
    setTitle('')
    setNote('')
  }

  return (
    <div className="bg-continaer">
      <div className="inner-container">
        <MainHeading>Notes</MainHeading>
        <form className="inputs-continaer" onSubmit={onClickAdd}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
          <textarea
            placeholder="Take a Note..."
            rows="5"
            value={note}
            onChange={onChangeNote}
          />
          <div className="add-button-container">
            <button type="submit">Add</button>
          </div>
        </form>
        {notesList.length > 0 ? (
          <ul>
            {notesList.map(eachNote => (
              <NoteItem key={eachNote.id} eachNote={eachNote} />
            ))}
          </ul>
        ) : (
          <div className="empty-notes-container">
            <img
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <h1 className="empty-notes-heading">No Notes Yet</h1>
            <p className="empty-notes-dis">Notes you add will appear here</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Notes
