import React, { Component, Fragment } from "react";
import "./styles/global/App.scss";

// Import components
import Root from "./components/Root/Root";
import MenuBar from "./components/MenuBar/MenuBar";
import Main from "./components/Main/Main";
import List from "./components/List/List";
import InputForm from "./components/InputForm/InputForm";
import IconLink from "./components/IconLink/IconLink";
import Badge from "./components/Badge/Badge";
import { settings } from "./styles/global/settings";
import { AddNewTask } from "./components/Button/ButtonStyled";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    list: [],
    completedTask: [],
    pendingItem: "",
    highPriority: false,
    isMobile:
      window.innerWidth <
      parseInt(settings.breakpoints.desktop.replace("px", "")),
    modalShown: false,
  };

  sortByPriority = (arr) => {
    const hpArr = arr.filter((item) => item.highPriority);
    const restArr = arr.filter((item) => !item.highPriority);
    return hpArr.concat(restArr);
  };

  taskCompleted = (id) => {
    const { completedTask, list } = this.state;
    const element = list.find((item) => id === item.id);
    element.isCompleted = true;
    completedTask.unshift(element);
    this.setState({
      completedTask: this.sortByPriority(completedTask),
    });
    this.removeTask(id);
  };

  removeTask = (id) => {
    this.setState({ list: this.state.list.filter((item) => id !== item.id) });
  };

  handleChange = (e) => this.setState({ pendingItem: e.target.value });

  handlePriority = (e) => {
    this.setState({ highPriority: e });
  };

  handleModal = () => {
    this.setState({ modalShown: !this.state.modalShown });
  };

  lastItemId = 0;

  newItemSubmitHandler = (e) => {
    e.preventDefault();

    let sortedList = [
      {
        name: this.state.pendingItem,
        isEditing: false,
        id: this.lastItemId++,
        highPriority: this.state.highPriority,
        isCompleted: false,
      },
      ...this.state.list,
    ];

    this.setState({
      list: this.sortByPriority(sortedList),
      pendingItem: "",
      highPriority: false,
    });
  };

  render() {
    return (
      <Root>
        <MenuBar>
          <li>
            <IconLink
              url="/dashboard"
              active
              icon="dashboard"
              label="Dashboard"
            >
              <Badge>
                {this.state.completedTask.length}/
                {this.state.list.length + this.state.completedTask.length}
              </Badge>
            </IconLink>
          </li>
          <li>
            <IconLink url="/calendar" icon="calendar" label="Calendar" />
          </li>
          <li>
            <IconLink url="/teams" icon="teams" label="Teams" />
          </li>
          <li>
            <IconLink url="/charts" icon="charts" label="Charts" />
          </li>
          <li>
            <IconLink url="/settings" icon="settings" label="Settings" />
          </li>
        </MenuBar>
        <Main>
          <div className="container">
            {this.state.isMobile && (
              <Fragment>
                <AddNewTask type="button" onClick={this.handleModal}>
                  New Task <span>+</span>
                </AddNewTask>
                <Modal isShown={this.state.modalShown} title="New task">
                  <InputForm
                    newItemSubmitHandler={this.newItemSubmitHandler}
                    handleChange={this.handleChange}
                    handlePriority={this.handlePriority}
                    handleClose={this.handleModal}
                    title="New task"
                    priorityState={this.state.highPriority}
                    pendingItem={this.state.pendingItem}
                  />
                </Modal>
              </Fragment>
            )}
            {!this.state.isMobile && (
              <Fragment>
                <h2>New task</h2>
                <InputForm
                  newItemSubmitHandler={this.newItemSubmitHandler}
                  handleChange={this.handleChange}
                  handlePriority={this.handlePriority}
                  priorityState={this.state.highPriority}
                  pendingItem={this.state.pendingItem}
                />
              </Fragment>
            )}

            {this.state.list.length > 0 && (
              <div>
                <h2>
                  <span>In progress</span>
                  <Badge type="circle">{this.state.list.length}</Badge>
                </h2>
                <List
                  list={this.state.list}
                  removeTask={this.removeTask}
                  taskCompleted={this.taskCompleted}
                />
              </div>
            )}
            {this.state.completedTask.length > 0 && (
              <div>
                <h2>
                  <span>Done</span>
                  <Badge type="circle">{this.state.completedTask.length}</Badge>
                </h2>
                <List list={this.state.completedTask} />
              </div>
            )}
          </div>
        </Main>
      </Root>
    );
  }
}

export default App;
