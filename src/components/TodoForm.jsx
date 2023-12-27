import { useState } from "react";

function TodoForm({ addTodo }) {
  const [todo, settodo] = useState("");

  const add = (e) => {
    e.preventDefault();
    // console.log(e)
    if (!todo) return;
    // console.log(todo)
    addTodo({ id: Date.now(), todo: todo, completed: false });
    // console.log(addTodo)
    settodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Task..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
