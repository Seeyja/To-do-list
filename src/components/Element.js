import React from 'react';
import { NavLink } from 'react-router-dom';

const Element = (props) => {

    const { text, date, id, done } = props;

    if (!props.finished) {
        return (
            <>
                <li className="tasks__item"><span className="tasks__content"><NavLink to={`/task/${props.id}`}>{text}</NavLink></span>{<sub className="tasks__date"> {date ? `(${date}) ` : ``}</sub>} <button className="tasks__delete-task button" onClick={() => { props.delete(id) }}>Usuń</button> <button className="tasks__done-task button" onClick={() => { done(id) }}>Zrobione</button> </li>
            </>
        )
    } else {
        return (
            <>
                <li className="tasks__item">{<span className="tasks__content">{text}</span>}{<sub className="tasks__date">({date})</sub>} <button className="tasks__delete-task button" onClick={() => { props.delete(id) }}>Usuń</button> </li>
            </>
        )
    }
}

export default Element