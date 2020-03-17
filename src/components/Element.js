import React from 'react';

const Element = (props) => {
    if (!props.finished) {
        return (
            <>
                <li className="tasks__item"><span className="tasks__content">{props.text}</span>{<sub className="tasks__date"> {props.date ? `(${props.date}) ` : ``}</sub>} <button className="tasks__delete-task button" onClick={() => { props.delete(props.id) }}>Usuń</button> <button className="tasks__done-task button" onClick={() => { props.done(props.id) }}>Zrobione</button> </li>
            </>
        )
    } else {
        return (
            <>
                <li className="tasks__item">{<span className="tasks__content">{props.text}</span>}{<sub className="tasks__date">({props.date})</sub>} <button className="tasks__delete-task button" onClick={() => { props.delete(props.id) }}>Usuń</button> </li>
            </>
        )
    }
}

export default Element