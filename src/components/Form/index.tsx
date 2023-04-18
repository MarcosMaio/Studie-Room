import React, {} from 'react'
import Button from '../Button'
import style from './Form.module.scss'
import { Itask } from '../../types/task'
import { v4 as uuidv4 } from 'uuid';

export default class Form extends React.Component <{
    setTask: React.Dispatch<React.SetStateAction<Itask[]>>
}>{
    
    state = {
        task: '',
        time: '01:00:00'
    }

    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTask(oldtask => 
            [...oldtask, 
                {...this.state, 
                    selected: false,
                    completed: false,
                    id: uuidv4()
            }
        ]
        );
        this.setState({
            task: '',
            time: '01:00'
        })
    }
    
    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor='task'>
                        Add a new study
                    </label>
                    <input 
                        type='text'
                        name='task'
                        id='task'
                        value={this.state.task}
                        onChange={event => this.setState ({...this.state, task: event.target.value}
                            )}
                            
                        placeholder='What do you want to study now?'
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='time'>
                        Time
                    </label>
                    <input 
                        type='time'
                        step='1'
                        name='time'
                        value={this.state.time}
                        onChange={event => this.setState({ ...this.state, time: event.target.value})} // esse código é usado como um manipulador de eventos onChange em um elemento de formulário, que é acionado quando o valor desse elemento é alterado pelo usuário.
                        //O código usa o operador spread (três pontos) para criar uma cópia do objeto de estado atual (this.state) e, em seguida, substitui a propriedade "time" por um novo valor, que é o valor do elemento de formulário que acionou o evento onChange (event.target.value).
                        id='time'
                        min='00:00:00'
                        max='01:30:00'
                        required
                    />
                </div>
            <Button
            children="To add"
            />
        </form>
    )}}
    

