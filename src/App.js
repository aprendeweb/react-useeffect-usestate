import { useEffect, useState } from 'react';
import Saludar from './Saludar';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTasks(json))
  }, []);


  return (
    <div>
      <section>
        <button onClick={() => setUpdate(!update)}>Update</button>
      </section>
      <section>
        {update ? <Saludar /> : null}
      </section>
      <section>
        {tasks.length ? tasks.map(task => {
          return (
            <div key={task.id}>
              <span>{task.title}</span>
            </div>
          )
        }) : null}
      </section>
    </div>
  )
}

export default App;