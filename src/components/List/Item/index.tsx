import React from 'react'
import style from './item.module.scss'
import { Itask } from '../../../types/task'

interface itenProps extends Itask { //a interface nos proporciona a possibilidade de estender outra interface, utilizando, nesse caso, a instrução extends ITarefa.Isso significa que teremos todos os tipos do ITarefa(tarefa, tempo, selecionado e assim por diante), agora incluindo a função selecionaTarefa, reaproveitando a interface que criamos anteriormente. 
    selectedTask: (taskSelected: Itask) => void
}

export default function Iten({
    task, 
    time, 
    selected, 
    completed, 
    id, 
    selectedTask}:itenProps) 
{
    console.log('item atual: ', {task, time, selected, completed, id});

        return (
            <li className={`${style.item} ${selected ? style.itemSelecionado : ''  } ${completed ? style.itemCompletado : ''}`} onClick={() => !completed && selectedTask({
                task, 
                time, 
                selected, 
                completed, 
                id
            })}>
                <h3>{task}</h3>
                <span>{time}</span>
                {completed && <span className={style.concluido} aria-label='Tarefa Completada'></span>}
            </li>
        )
    }
