import uuid from 'node-uuid';
import React, {Component} from 'react';
import Notes from './note/Notes.jsx';
import AddNote from '../containers/AddNote.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    // this.state = NoteStore.getState();
    this.state = {
      notes: []
    };
  }
  render() {
    const notes = this.state.notes;
    return (
      <section className="container">
        <Notes notes={notes} onEdit={this.editNote} onDelete={this.deleteNote}/>
        <AddNote/>
      </section>
    );
  }

  editNote = (id, task) => {
    if (!task.trim())
      return;

    const notes = this.state.notes.map(note => {
      if (note.id == id && task) {
        note.task = task;
      }
      return note;
    });
    this.setState({notes});
  };
  deleteNote = (id) => { // , e) => {
    // e.stopPropagation(); http://stackoverflow.com/questions/24415631/reactjs-syntheticevent-stoppropagation-only-works-with-react-events
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  };
}
