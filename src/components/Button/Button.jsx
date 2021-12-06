import React from 'react'
import s from './Button.module.css'

const button = ({func , text}) => {
    return (
        <>
            <button className={s.button} type="button" onClick={func}>{text}</button>
        </>
    )
}

export default button
