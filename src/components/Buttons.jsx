import React from 'react';
import './ButtonGeneral.css';

export const ButtonGeneral = (props) => {
    return <button className="buttonGeneralStyle" onClick={props.click}>{props.text}</button>;
}