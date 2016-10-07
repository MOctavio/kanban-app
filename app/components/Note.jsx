import React, {Component} from 'react';
import {Icon} from 'react-fa'

export default class Note extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };
    }
    componentDidUpdate() {
        if (this.state.editing) {
            this._input.focus();
        }
    }
    render() {
        if (this.state.editing) {
            return this.renderEdit();
        }
        return this.renderNote();
    }

    renderEdit = () => {
        return (
          <article className="note-content">
              <input type="text"
                ref={(c) => this._input = c}
                defaultValue={this.props.task}
                onBlur={this.finishEdit}
                onKeyPress={this.checkEnter}
                required/>
              <span className="bar"></span>
          </article>
          // <button className="edit-note" onClick={this.finishEdit}>(y)</button>
        )
    };
    renderNote = () => {
        const onDelete = this.props.onDelete;
        return (
            <article className="note-content" onClick={this.edit}>
                <span>{this.props.task}</span>
                {onDelete ? this.renderDelete() : null}
            </article>
        );
    };
    renderDelete = () => {
        return <Icon name="trash-o" className="delete-note" onClick={this.props.onDelete}/>
    };

    edit = () => {
        this.setState({
            editing: true
        });
    };
    checkEnter = (e) => {
        if (e.key === 'Enter') {
            this.finishEdit(e);
        }
    };
    finishEdit = (e) => {
        const value = e.target.value;
        if (this.props.onEdit) {
            this.props.onEdit(value);
            this.setState({
                editing: false
            });
        }
    };
}
