var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export class AddTodo extends React.Component {
constructor (props) {
  super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit (e) {
  e.preventDefault();
  var todoText = this.refs.todoText.value;
  var {dispatch} = this.props;

  if (todoText.length > 0) {
    this.refs.todoText.value = '';
    dispatch(actions.startAddTodo(todoText));
  } else {
    this.refs.todoText.focus();
  }
}

render () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="What do you need to do" ref="todoText" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
