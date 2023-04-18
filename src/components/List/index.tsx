import React, {} from 'react'
import style from './List.module.scss'
import Iten from './Item'
import { Itask } from '../../types/task'

interface listProps {
    task: Itask[],
    selectedTask: (taskSelected: Itask) => void
}

export default function List({ task, selectedTask}: listProps) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Studies of the day !</h2>
            <ul>
                {task.map(iten => (
                    <Iten //{...item} Dessa forma, conseguimos utilizar todos os atributos que existem dentro daquele objeto como prop para esse componente. Isso é muito bom, porque se tiver muitas propriedades dentro daquele objeto, não precisamos ficar escrevendo uma por uma. Basta desestruturar dentro do componente e ele já consegue nos mostrar tudo.
//se você estiver utilizando esse item de uma API, e essa API tem um monte de informação, pode vir informação demais, o Typescript pode apontar erro dizendo que tem alguma propriedade que você não tipou. Então pode dar alguns problemas.                     
                        selectedTask={selectedTask}
                        key={iten.id}
                        {...iten}
                    /> 
                ))}
            </ul>
        </aside>
    )
}
