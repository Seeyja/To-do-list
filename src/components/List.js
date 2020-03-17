import React from 'react'
import Element from './Element'

const List = (props) => {
    const Elements = props.list.map(element => <Element done={props.done} delete={props.delete} key={element.id} date={element.date} id={element.id} text={element.text} />)

    const ElementsDone = props.doneList.map(element => <Element finished={element.finished} done={props.done} delete={props.delete} key={element.id} date={element.date} id={element.id} text={element.text} />)
    return (
        <section className="root__tasks-list tasks">
            <div className="tasks__wrapper">
                {Elements.length > 0 && <h2 className="tasks__headline headline">Do zrobienia ({Elements.length})</h2>}
                <ul className="tasks__list">{Elements}</ul>
            </div>
            <div className="tasks__wrapper">
                {ElementsDone.length > 0 && <h2 className="tasks__headline headline">Zrobione ({ElementsDone.length})</h2>}
                <ul className="tasks__list">{ElementsDone.length > 0 && ElementsDone}</ul>
            </div>
        </section>
    )
}

export default List