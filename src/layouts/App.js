import React, { Component } from 'react';
import Addtask from '../components/AddTask'
import List from '../components/List'
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

  currentDate = new Date().toISOString().slice(0, 10);
  id = 0;

  state = {
    inputValue: "",
    list: [],
    doneList: [],
    date: this.currentDate,
    message: '',

    errors: {
      epmtyTask: false,
      existingTask: false
    }

  }

  messages = {
    task_empty: 'Wpisz zadanie',
    task_existing: 'Takie zadanie istnieje',
  }

  handleAddTask = () => {

    const validation = this.formValidation();

    if (validation.correct) {
      const list = this.state.list;
      list.push({
        id: this.id,
        text: this.state.inputValue,
        date: this.state.date
      });
      this.setState({
        list,
        inputValue: "",
        message: 'Zadanie dodane!',

        errors: {
          epmtyTask: false,
          existingTask: false
        }

      })
      this.id++;
    } else {
      this.setState({
        errors: {
          emptyTask: !validation.task_length,
          existingTask: !validation.task_unique,
        }
      })
    }
  }

  formValidation = () => {
    let task_length = false;
    let task_unique = false;
    let correct = false;

    if (this.state.inputValue.length > 0 && this.state.inputValue.trim().length > 0) {
      task_length = true;
    }

    let elements = this.state.list.filter(element => (
      element.text === this.state.inputValue
    ))

    if (!elements.length > 0) {
      task_unique = true;
    }

    if (task_length && task_unique) {
      correct = true
    }

    return ({
      correct,
      task_length,
      task_unique,
    })

  }

  handleInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleDate = (e) => {

    if (e.target.value < this.currentDate) document.querySelector("input[type=date]").value = `${this.currentDate}`;

    this.setState({
      date: e.target.value
    })

  }

  handleDeleteTask = (id) => {

    const list = [...this.state.list]
    const index = list.findIndex(item => item.id === id);

    const doneList = [...this.state.doneList]
    const index2 = doneList.findIndex(item => item.id === id);

    if (index !== -1) { list.splice(index, 1) }
    else {
      doneList.splice(index2, 1)
    }

    this.setState({
      list,
      doneList
    })

  }

  handleDoneTasks = (id) => {
    const list = Array.from(this.state.list);
    const doneList = Array.from(this.state.doneList);

    const index = list.findIndex(item => item.id === id);
    const doneTask = list.find(item => item.id === id);

    doneTask.finished = true;

    doneList.push(doneTask);
    list.splice(index, 1)

    this.setState({
      list,
      doneList
    })
  }

  componentDidUpdate() {
    if (this.state.message !== '') {
      setTimeout(() => this.setState({
        message: ''
      }), 2000)
    }
  }

  render() {
    return (
      <Router>
        <Addtask
          value={this.state.inputValue}
          getInputValue={this.handleInputValue}
          addTask={this.handleAddTask}
          date={this.state.date}
          getDate={this.handleDate}
          minDate={this.currentDate}
          messages={this.messages}
          errors={this.state.errors}
          success={this.state.message}
        />
        <List
          doneList={this.state.doneList}
          done={this.handleDoneTasks}
          remove={this.handleDeleteTask}
          list={this.state.list}
          date={this.state.date}
        />
      </Router>
    )
  }
}

export default App;