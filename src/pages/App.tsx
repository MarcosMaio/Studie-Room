import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss'
import Timer from '../components/Timer';
import { Itask } from '../types/task';


function App() {

  const [task,setTask] = useState<Itask[]>([]); //Podemos tipar o useState dizendo que ele pode ser ou um array de ITarefa ou ele vai ser um array vazio.
  const [selected, setSelected] = useState<Itask>()

  function selectedTask(taskSelected: Itask){
    setSelected(taskSelected);
    setTask(oldTask => oldTask.map(task => ({ //Aqui eu pego o estado anterior do setTarefas e dou um map nele para verificar se aquela tarefa na qual eu to inteirando e a tarefa selecionada ou não.
      ...task, //vou retornar um objeto que e um spread de tarefas
      selected: task.id === taskSelected.id ? true : false //aqui eu faço uma condição de que se tarefas.id for igual a tarefaselecionada.id eu retorno true se não retorna false.
    })));
  }

  function finalizarTarefa() {
    if(selected) {
      setSelected(undefined);
      setTask(oldTask => oldTask.map(task => {
        if(task.id === selected.id){
        return {
          ...task,
          selected: false,
          completed: true
        }
      }
  return task;
}))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask} />
      <List 
          task={task}
          selectedTask={selectedTask}
      />
      <Timer 
        finalizarTarefa={finalizarTarefa}
        selected={selected}
      />
    </div>
  );
}

export default App;

