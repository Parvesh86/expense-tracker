import React, { useContext } from 'react'
import { SingleTransaction } from "./InnerComponents/SingleTransaction";

import { GlobalContext } from "../Context/GlobalContext";

export const Transactions = () => {

    const {transactions} = useContext(GlobalContext)
    
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
            { transactions.map(transaction => (
                    <SingleTransaction key={transaction.id} trans={transaction}/>
                )
            )}
            </ul>
            
        </>
    )
}
