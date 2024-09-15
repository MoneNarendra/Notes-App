import './index.css'

const NoteItem = props => {
  const {eachNote} = props
  const {title, note} = eachNote
  return (
    <li>
      <h1 className="note-title">{title}</h1>
      <p className="note">{note}</p>
    </li>
  )
}

export default NoteItem
