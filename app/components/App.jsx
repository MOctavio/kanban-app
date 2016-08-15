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
    }
    render() {
        const notes = this.state.notes;
        return (
            <div>
            <button onClick={this.addNote}>Add note</button>
            <Notes notes={notes} onEdit={this.editNote}/>
            </div>
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
}
