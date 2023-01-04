import { useState, useEffect } from "react";

function App() {
    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([]);
    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(toDo);
        if(toDo === "") {
            return;
        }
        // 수정하는 함수를 사용할 때 2가지 방법(하나는 함수를 사용, 다른 하나는 직접 값을 대입)
        // 첫 번째 방법은 현재 state을 계산하거나 새로운 state을 만드는데 사용할 수 있게된다.
        setTodos(currentArray => [toDo, ...currentArray]);
        setTodo("");
    };
    console.log(toDos);
    return <div>
        <h1>My To Dos ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
            <button>Add To Do</button>
        </form>
        <hr/>
        <ul>
            {toDos.map((item,index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>;
}

export default App;