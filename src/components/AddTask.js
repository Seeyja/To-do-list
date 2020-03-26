import React from 'react';

const AddTask = (props) => {

    const title = "Wpisz zadanie do zrobienia:";
    const buttonText = "Dodaj zadanie";
    const maxDate = "2030-01-01";

    const { value, getInputValue, addTask, date, getDate, minDate, errors, messages, success } = props;
    return (
        <section className="root__to-do-list-panel list-panel">
            <h1 className="list-panel__headline headline">Lista zadań</h1>
            <div className="list-panel__input-wrapper">
                <label className="list-panel__input-label" htmlFor="task">{title}</label>
                <input className="list-panel__input" id="task" value={value} onChange={getInputValue} />
                {errors.emptyTask && <p className="list-panel__error">{messages.task_empty}!</p>}
                {errors.existingTask && <p className="list-panel__error">{messages.task_existing}!</p>}
            </div>
            <div className="list-panel__input-wrapper">
                <label className="list-panel__input-label" htmlFor="task">Termin wykonania:</label>
                <input className="list-panel__input" type="date" onChange={getDate} value={date} min={minDate} max={maxDate} />
            </div>
            <button className="list-panel__button button" onClick={addTask}>{buttonText}</button>
            {success && <h3>{success}</h3>}
        </section>
    )
}

export default AddTask