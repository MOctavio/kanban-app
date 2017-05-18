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
          defaultValue={this.props.note.task}
          onBlur={this.finishEdit}
          onKeyPress={this.checkEnter}
          required/>
        <span className="bar"></span>
      </article>
    )
  };

  renderNote = () => {
    const onDelete = this.props.onDelete;
    return (
      <article className="note-content" onClick={this.edit}>
        <span>{this.props.note.task}</span>
        {onDelete
          ? this.renderDelete()
          : null}
      </article>
    );
  };

  renderDelete = () => {
    return (
      <artcle className="delete-note" onClick={() => {this.delete(this.props.note.id)}}>
        <Icon name="trash-o" />
      </artcle>
    );
  };

  edit = () => {
    this.setState({editing: true});
  };

  delete = (id) => {
    this.props.onDelete(id);
  };

  checkEnter = (e) => {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = (e) => {
    const value = e.target.value;
    if (this.props.onEdit) {
      this.props.onEdit({id: this.props.note.id, task: value});
      this.setState({editing: false});
    }
  };
}
