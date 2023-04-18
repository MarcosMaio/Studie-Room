import styles from './Timer.module.scss'
import Button from '../Button'
import Clock from './Clock'
import { Itask } from '../../types/task'
import { useEffect, useState } from 'react';
import timeToSeconds from '../../common/utils/time'



interface TimerProps {
    selected: Itask | undefined,
    finalizarTarefa: () => void
}

export default function Timer({ selected, finalizarTarefa }: TimerProps) {
    const [time, setTime] = useState<number>()

useEffect(() => { //Sempre que o selecionado mudar ele irá executar o primeiro parametro que e a função.
    if (selected?.time) {
        setTime(timeToSeconds(selected.time));
    }
},[selected]);

function regressiva(contador: number = 0) {
    setTimeout(() => {
        if(contador > 0) {
        setTime(contador - 1);
        return regressiva(contador - 1);
    }
    finalizarTarefa();
    }, 1000);
}

    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Choose a card and start the timer</p>
            <div className={styles.relogioWrapper}>
                <Clock time={time}/>
            </div>
            <Button 
                onClick={() => regressiva(time)}
                children='Start !'
            />
        </div>
    )
}
