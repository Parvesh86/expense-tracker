import React, { useContext } from 'react'

import { GlobalContext } from "../../Context/GlobalContext";

export const SingleTransaction = (props) => {

    const {deleteTransaction} = useContext(GlobalContext)

    const sign = (props.trans.amount > 0) ? '+' : '-';
    
    return (
        <li className={props.trans.amount > 0 ? 'plus' : 'minus' } key={props.trans.id}>
            {props.trans.name} <span>{sign}${Math.abs(props.trans.amount)}</span>
            <button onClick={() => deleteTransaction(props.trans.id)} className="delete-btn">x</button>
        </li>
    )
}
