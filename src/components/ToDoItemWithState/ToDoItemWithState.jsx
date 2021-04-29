import { Component } from "react";

export class ToDoItemWithState extends Component {
  state = {
    nrOfClick: 0,
  };

  handleIncreaseClick = () => {
    console.log("click on item");
    this.setState({ nrOfClick: this.state.nrOfClick + 1 });
  };

  render() {
    return (
      <div className="to-do-item" onClick={this.handleIncreaseClick}>
        <input type="checkbox" defaultChecked={this.props.checkValue} />
        <p>{this.props.label}</p>
        <img
          src="https://previews.123rf.com/images/iconscart/iconscart1903/iconscart190300018/118811393-trash-icon.jpg"
          alt="trash"
        />
        <p>{this.state.nrOfClick}</p>
      </div>
    );
  }
}
