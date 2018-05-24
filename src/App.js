import React, { Component } from 'react';
import TaskList from './TaskList.js';
import Date from './Date.js';
import Avatar from './Avatar.js';
import AddButton from './AddButton.js';
import TaskForm from './TaskForm.js';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: [
          {
              'time': '12',
              'period': 'AM',
              'activity_title': 'Task 1',
              'activity_description': 'Task 1 Description'
          }, {
              'time': '9',
              'period': 'AM',
              'activity_title': 'Task 2',
              'activity_description': 'Task 2 Description'
          }, {
              'time': '11',
              'period': 'AM',
              'activity_title': 'Task 3',
              'activity_description': 'Task 3 Desc'
          }, {
              'time': '3',
              'period': 'PM',
              'activity_title': 'Task 4',
              'activity_description': 'Task 4 Desc'
          }, {
              'time': '6',
              'period': 'PM',
              'activity_title': 'Task 5',
              'activity_description': 'Task 5 desc'
          }
      ],
      modalIsOpen: false
    };
  }
  addTask(){
    this.setState({modalIsOpen:true});
    var task = {'time': '5', 'period': 'AM', 'activity_title': 'Jogging', 'activity_description': 'Go for a run!'};
    var tasks = this.state.tasks.concat(task);
    this.setState({tasks: tasks});
    <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
  }
  render() {
    return (
      <div style={{padding: '30px 30px'}}>
          <Avatar />
          <br />
          <Date />
          <br />
          <TaskList tasks={this.state.tasks} />
          <br />
          <AddButton onClick={this.addTask.bind(this)} />
          {this.state.modalIsOpen ?  <TaskForm isOpen={this.state.modalIsOpen} /> : null}
      </div>
    );
  }
}

export default App;
