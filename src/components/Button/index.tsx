import React, { ReactElement} from 'react'
import style from './Button.module.scss'

interface ButtonProps {
    children: string | ReactElement
    type?: "submit" | "button" | "reset" | undefined, onClick?: () => void
}

export default function Button ({children, type, onClick}:ButtonProps) {

        return (
            <button className={style.botao} type={type} onClick={onClick}>
                {children}
                
            </button>
        )
}