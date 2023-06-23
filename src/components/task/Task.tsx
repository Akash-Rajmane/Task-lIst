import React, { useContext, useState } from "react";
import "./task.css";
import { TodoContext, todoContext } from "../../context/Todo";

type subTask = {
  subtask: string;
};

const Task = () => {
  const { todos, setTodos } = useContext(TodoContext) as todoContext;
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [subtasks, setSubTasks] = useState<Array<subTask>>([{ subtask: "" }]);

  const titleChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const descriptionChangeHandler = (
    e: React.FormEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.currentTarget.value);
  };

  const addSubTask = () => {
    let newSubTask: subTask = {
      subtask: "",
    };
    setSubTasks([...subtasks, newSubTask]);
  };

  const removeSubTask = (index: number) => {
    let data = [...subtasks];
    data.splice(index, 1);
    setSubTasks(data);
  };

  const subTaskHandler = (event: any, index: number) => {
    let data = [...subtasks];
    data[index] = event.target.value;
    setSubTasks(data);
  };

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.length < 3 && description === "") {
      alert(
        "Please enter the task with 3 or more characters OR task should have a description"
      );
      return;
    }

    setTodos([
      ...todos,
      { id: new Date().getTime(), title, description, subtasks: subtasks },
    ]);
    setTitle("");
    setDescription("");
    setSubTasks([{ subtask: "" }]);
  };

  return (
    <form
      className={"formContainer"}
      onSubmit={formSubmitHandler}
      autoComplete="off"
    >
      <label htmlFor="task" id="label1">
        Task <span className={"mandate"}>*</span>
      </label>
      <input
        type="text"
        value={title}
        id="task"
        onChange={titleChangeHandler}
        required
      />
      <label htmlFor="description" id="label2">
        Description
      </label>
      <textarea
        id="description"
        rows={5}
        onChange={descriptionChangeHandler}
        value={description}
      ></textarea>
      {subtasks.map((el, index) => {
        return (
          <div className="dynamic-content">
            <input
              type="text"
              value={el.subtask}
              placeholder="sub task"
              onChange={(event) => subTaskHandler(event, index)}
            />
            <button onClick={addSubTask} type="button">
              +
            </button>
            <button
              onClick={() => removeSubTask(index)}
              disabled={subtasks.length === 1 ? true : false}
              type="button"
            >
              -
            </button>
          </div>
        );
      })}
      <button className={"btn"} type="submit">
        Add Task
      </button>
    </form>
  );
};

export default Task;
