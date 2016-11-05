var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch UPDATE_TODO action on click', () => {
    var todoData = {
      id: 11,
      text: 'Clean bathroom',
      completed: false,
      isEdit: false
    };
    var action = actions.startToggleTodo(todoData.id, !todoData.completed);

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click(todo.refs.checkbox);

    expect(spy).toHaveBeenCalledWith(action);
  })

  it('should dispatch actions UPDATE_TODO & saveToDatabase when isEdit is true and img is clicked', () => {
    var todoData = {
      id: 11,
      text: 'Clean bathroom',
      completed: false,
      isEdit: true
    };
    var action = actions.updateTodo(todoData.id, { isEdit: !todoData.isEdit });
    var action2 = actions.saveToDatabase(todoData.id);

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    TestUtils.Simulate.click(todo.refs.Ok);

    expect(spy).toHaveBeenCalledWith(action);
    expect(spy).toHaveBeenCalledWith(action2);
  })
});
