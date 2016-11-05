var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');

export class Todo extends React.Component{
  render () {
    var {previousText, isEdit, text, id, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;
    if (completed) {
      message = 'Completed ';
      timestamp = completedAt;
    }
    return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
  };


  var renderImage = () => {
    if (isEdit) {
      return (<img
      style={{float: 'right'}}
        onClick={() => {
          dispatch(actions.updateTodo(id, { isEdit: !isEdit, text: previousText }));
        }}
        src='https://cdn4.iconfinder.com/data/icons/32x32-free-design-icons/32/Cancel.png' alt="cancel icon" width={30} height={30} />)
    } else {
      return (<img
      style={{float: 'right'}}
        onClick={() => {
          dispatch(actions.updateTodo(id, { isEdit: !isEdit, previousText: text }));
        }}
        src='https://cdn1.iconfinder.com/data/icons/design-6/24/Pencil-512.png' alt="edit icon" width={30} height={30} />)
    }
  }

    return (
      <div className={todoClassName}>
        <div className="todo__child">
          {isEdit ? <img ref="Ok" src='https://cdn4.iconfinder.com/data/icons/32x32-free-design-icons/32/Ok.png' width={30} height={30}
            onClick={() => {
              dispatch(actions.updateTodo(id, { isEdit: !isEdit }));
              dispatch(actions.saveToDatabase(id));
            }}/> : <input ref="checkbox" type="checkbox" checked={completed} onClick={() => {
            dispatch(actions.startToggleTodo(id, !completed));
          }}/> }
        </div>
        <div className="todo__child">
          {isEdit ? <input type="text" value={text} ref="changeText" onChange={() => {
            var changeText = this.refs.changeText.value;
            dispatch(actions.updateTodo(id, {text: changeText }));
          }}/>  : <p>{text}</p> }
          <p className="todo__subtext">{renderDate()}</p>
        </div>
        <div className="todo__child">
          { completed ? null : renderImage() }
        </div>
      </div>

    );
  }
}

export default connect()(Todo);
