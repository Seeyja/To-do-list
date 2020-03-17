import React, { Component } from 'react';
import Addtask from './AddTask'
import List from './List'


class App extends Component {

  currentDate = new Date().toISOString().slice(0, 10);
  id = 0;

  state = {
    inputValue: "",
    list: [],
    doneList: [],
    date: this.currentDate,
    emptyTask: false
  }

  handleAddTask = () => {
    if (this.state.inputValue.length > 0) {
      const list = this.state.list;
      list.push({
        id: this.id,
        text: this.state.inputValue,
        date: this.state.date
      });
      this.setState({
        list,
        inputValue: "",
        emptyTask: false,
      })
      this.id++;
    } else {
      this.setState({
        inputValue: "",
        emptyTask: true,
      })
    }
  }

  handleInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleDate = (e) => {
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


  render() {
    return (
      <>
        <Addtask
          value={this.state.inputValue}
          getInputValue={this.handleInputValue}
          addTask={this.handleAddTask}
          date={this.state.date}
          getDate={this.handleDate}
          minDate={this.currentDate}
          emptyTask={this.state.emptyTask}
        />
        <List
          doneList={this.state.doneList}
          done={this.handleDoneTasks}
          delete={this.handleDeleteTask}
          list={this.state.list}
          date={this.state.date}
        />
      </ >
    )
  }
}

export default App;
