import uuid from 'node-uuid';
import React, {Component} from 'react';
import Notes from './Notes.jsx'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Review Webpack'
                }, {
                    id: uuid.v4(),
                    task: 'Learn React'
                }, {
                    id: uuid.v4(),
                    task: 'Learn React-Redux'
                }
            ]
        };
        // experimental feature
        // this.addNote = this.addNote.bind(this);
        // this.editNote = this.editNote.bind(this);
        // this.deleteNote = this.deleteNote.bind(this);
    }
    render() {
        const notes = this.state.notes;
        return (
            <section className="container">
              <Notes notes={notes}
                  onEdit={this.editNote}
                  onDelete={this.deleteNote}/>
              <button onClick={this.addNote}>Add note</button>
            </section>
        );
    }
    addNote = () => {
        this.setState({
            notes: this.state.notes.concat([
                {
                    id: uuid.v4(),
                    task: 'New task'
                }
            ])
        });
    };
    editNote = (id, task) => {
        if(!task.trim()) return;

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
