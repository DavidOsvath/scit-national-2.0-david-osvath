import "./ToDoItem.css";

// This is a function react component
// by using props out reusable component can adapt to attributes passed in its parent component
// to see how this component is used check ToDoList.jsx file
// we use "{}" to evaluate values and interpolate them in our html objects
// every classic react component (div, p, input, etc.) use event-like attribute (onClick, onChange, onMouseDown, etc) to link a function to an event
// in props we can pass anything from strings, bool, number to objects and functions.
// we pass a "removeItem" method from the parent component so that when user click on trash can we trigger the "removeItem" function that is defined in "ToDoList.jsx"

// for more info in Component and Props: https://reactjs.org/docs/components-and-props.html

export function ToDoItem(props) {
  return (
    <div className="to-do-item">
      <input
        type="checkbox"
        defaultChecked={props.checkValue}
        onChange={() => {
          props.updateCheckStatus(props.itemIndex, !props.checkValue);
        }}
      />
      <p>{props.label}</p>
      <img
        src="https://image.freepik.com/free-icon/trash-bin-symbol_318-10194.jpg"
        alt="trash"
        onClick={(event) => props.removeItem(props.label)}
      />
    </div>
  );
}
