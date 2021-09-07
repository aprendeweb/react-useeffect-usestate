import { useEffect, useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => { setTasks(json) })
  }, []);

  useEffect(() => {
    console.log("Me ejecuté")
  }, [update]);


  return (
    <div>
      <section>
        <button onClick={() => setUpdate(!update)}>Update</button>
      </section>
      <section>
        {tasks.length ?
          tasks.map((task) => {
            return (
              <span key={task.id}>
                <p>{task.title}</p>
              </span>)
          })
          : null}
      </section>
    </div>
  )
}

export default App;
