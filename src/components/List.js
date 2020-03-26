import React from 'react'
import Element from './Element'
import DetailsTaskPage from '../pages/DetailsTaskPage'
import { Route, Switch } from 'react-router-dom';

const List = (props) => {

    if (props.list.length >= 2) {
        props.list.sort((a, b) => {
            if (a.date > b.date) {
                return 1
            }
            if (a.date < b.date) {
                return -1
            }
            return 0
        })
    }
    const { list } = props;

    const elements = props.list.map(element => <Element done={props.done} remove={props.remove} key={element.id} date={element.date} id={element.id} text={element.text} />)

    const elementsDone = props.doneList.map(element => <Element finished={element.finished} done={props.done} remove={props.remove} key={element.id} date={element.date} id={element.id} text={element.text} />)
    return (
        <>
            <section className="details">
                <Switch>
                    <Route
                        exact
                        path="/task/:id"
                        render={(props) => <DetailsTaskPage {...props} list={list} />}
                    />
                </Switch>
            </section>
            <section className="root__tasks-list tasks">
                <div className="tasks__wrapper">
                    {elements.length > 0 && <h2 className="tasks__headline headline">Do zrobienia ({elements.length})</h2>}
                    {<ul className="tasks__list">{elements}</ul>}

                </div>
                <div className="tasks__wrapper">
                    {elementsDone.length > 0 && <h2 className="tasks__headline headline">Zrobione ({elementsDone.length})</h2>}
                    <ul className="tasks__list">{elementsDone.length > 0 && elementsDone}</ul>
                </div>
            </section>
        </>
    )
}

export default List