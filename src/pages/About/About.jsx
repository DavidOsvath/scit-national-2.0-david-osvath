import { Counter } from "../../components/Counter/Counter";

export function About() {
    return (
        <div className="about" >
            <h2>To Do App Info</h2>
            <p>This app will store your tasks on the server</p>
            <p>Feel free to add as many as you like on the home page</p>
            <Counter />
        </div>
    );
}