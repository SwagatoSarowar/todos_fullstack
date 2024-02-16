import { useEffect, useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = async function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/todos/createtodo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ item }),
        }
      );
      if (!response.ok) throw new Error("Could not create a todo");
      console.log(await response.json());
    } catch (error) {
      console.log(error);
    } finally {
      setItem("");
    }
  };

  const handleDeleteTodo = async function (id: string) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/todos/deletetodo/${id}`,
        { method: "DELETE" }
      );

      if (!response.ok) throw new Error("Could not delete");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/todos/todoslist"
        );

        if (!response.ok) throw new Error("Could not load data");

        const data = await response.json();
        setTodoList(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [todoList]);

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button>+ Add Todo</button>
      </form>
      <div>
        <ol>
          {!todoList.length && <h1>Add todos first</h1>}
          {todoList.map((todo, index) => (
            <li key={index}>
              {todo?.item}
              <button onClick={() => handleDeleteTodo(todo?._id)}>❌</button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
