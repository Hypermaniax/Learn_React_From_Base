import NewTask from "./NewTask";

export default function Task({ handleAddTask, project, handleDeleteTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
      <NewTask onAdd={handleAddTask} />
      {project.length === 0 && (
        <p className="text-stone-800 my-4">THIS PROJECT DONT HAVE A TASK</p>
      )}
      {project.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {project.map((prev) => (
            <li key={prev.idTask} className="flex justify-between my-4">
              <span>
                {prev.taskText}
              </span>
              <button
                onClick={() => handleDeleteTask(prev.idTask)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
