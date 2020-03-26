import React from 'react';
import { NavLink } from 'react-router-dom';

const Element = ({ text, date, id, done, finished, remove }) => {

    if (!finished) {
        return (
            <>
                <li className="tasks__item"><span className="tasks__content"><NavLink to={`/task/${id}`}>{text}</NavLink></span>{<sub className="tasks__date"> {date ? `(${date}) ` : ``}</sub>} <button className="tasks__delete-task button" onClick={() => { remove(id) }}>Usuń</button> <button className="tasks__done-task button" onClick={() => { done(id) }}>Zrobione</button> </li>
            </>
        )
    } else {
        return (
            <>
                <li className="tasks__item">{<span className="tasks__content">{text}</span>}{<sub className="tasks__date">({date})</sub>} <button className="tasks__delete-task button" onClick={() => { remove(id) }}>Usuń</button> </li>
            </>
        )
    }
}

export default Element