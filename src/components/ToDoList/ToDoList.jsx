import { Component } from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";

// "ToDoList" is a class component
// we define class component when we need state, and the state can change during the lifetime of a component
// we can use the internal state of a component to write logic inside render method so that when the state changes our component changes its rendered component as well
// a component has a state so that we can have functionality in our apps, without state every component would be static

// more info on the state: https://reactjs.org/docs/state-and-lifecycle.html

export class ToDoList extends Component {
  // here we declare the initial state
  // our state will hold information regarding the list of to-do items as well as the current value in the add new item input
  state = {
    toDoList: [],
    inputValue: "",
    shouldCreateUser: false,
    isInvalid: false,
  };

  // removeItem is passed down to ToDoItem component and from there is triggered
  // we need to define it here because when here is the state the we want to change
  removeItem = (itemText) => {
    // "setState" will trigger a call of the render method of this component
    // without setState the component would not update its rendered component and the user wouldn't see anything change in the webpage
    // when we call setState we pass as an argument and object that will be merged to the current state

    const filteredToDoList = this.state.toDoList.filter(
      (itemData) => itemData.item !== itemText
    );

    this.setState({
      toDoList: filteredToDoList,
    });

    const payload = {
      id: "osvathdavid",
      todo: filteredToDoList,
    };

    fetch("https://simple-json-server-scit.herokuapp.com/todo/osvathdavid", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  };

  updateCheckStatus = (index, value) => {
    console.log(index, value);

    const newList = this.state.toDoList.map((item, itemIndex) => {
      if (itemIndex === index) {
        item.checked = value;
      }

      return item;
    });

    this.setState({ toDoList: newList });

    const payload = {
      id: "osvathdavid",
      todo: newList,
    };

    fetch("https://simple-json-server-scit.herokuapp.com/todo/osvathdavid", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  };

  componentDidMount() {
    //  console.log("ToDoList has finished mounting");

    fetch("https://simple-json-server-scit.herokuapp.com/todo/osvathdavid")
      .then((r) => r.json())
      .then((json) => {
        console.log(json);
        if (json.todo) {
          this.setState({ toDoList: json.todo });
        } else {
          this.setState({ shouldCreateUser: true });
        }
      });
  }

  componentWillUnmount() {
    // console.log("ToDoList will be unmounted");
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value, isInvalid: false });
  };

  handleAddItem = () => {
    if (this.state.inputValue === "") {
      this.setState({ isInvalid: true });
    } else {
      this.setState({
        toDoList: [
          { checked: false, item: this.state.inputValue },
          ...this.state.toDoList,
        ],
        inputValue: "",
        isInvalid: false,
      });

      const payload = {
        id: "osvathdavid",
        todo: [
          { checked: false, item: this.state.inputValue },
          ...this.state.toDoList,
        ],
      };

      if (this.state.shouldCreateUser) {
        fetch("https://simple-json-server-scit.herokuapp.com/todo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        this.setState({ shouldCreateUser: false });
      } else {
        fetch("https://simple-json-server-scit.herokuapp.com/todo/osvathdavid", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      }
    }
  };

  render() {
    console.log("ToDoList - render");
    console.log(this.state);

    return (
      <div className="to-do-list">
        {this.state.toDoList.map((itemData, index) => (
          <ToDoItem
            key={index + itemData.item}
            checkValue={itemData.checked}
            label={itemData.item}
            removeItem={this.removeItem}
            itemIndex={index}
            updateCheckStatus={this.updateCheckStatus}
          />
        ))}

        <div className="add-item">
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            style={{
              border: this.state.isInvalid ? "4px solid red" : undefined,
            }}
          />
          <button onClick={this.handleAddItem}>+</button>
        </div>
      </div>
    );
  }
}
