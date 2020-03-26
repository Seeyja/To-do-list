import React from 'react';
import { Link } from 'react-router-dom';

const DetailsTaskPage = (props) => {

    const style = {
        textAlign: "center",
    }

    const calculateDate = (date) => {
        let currentDate = new Date().toISOString().slice(0, 10);
        let message = "";

        if (date === currentDate) {
            message = "Termin do dziś";
        } else {
            let daysLeft = Date.parse(date) - Date.parse(currentDate);
            daysLeft = daysLeft / (1000 * 3600 * 24);
            if (daysLeft === 1) message = `Został Ci ${daysLeft} dzień`;
            else
                message = `Zostało Ci ${daysLeft} dni`;
        }
        return message
    }

    let elements = props.list.filter(element => (
        (parseInt(props.match.params.id) === element.id)
    ))

    elements = elements.map(element => (
        <div key={element.id} style={style}>
            <p className="details__name">{element.text}</p>
            <p className="details__name">{calculateDate(element.date)}</p>
        </div>
    ))

    return (
        <>
            {elements.length >= 1 && <h2 className="headline--details headline">Szczegóły zadania</h2>}
            {elements}
            {elements.length >= 1 && <Link to="/"><button className="button button--details">Zamknij podgląd</button></Link>}
        </>
    )
}

export default DetailsTaskPage