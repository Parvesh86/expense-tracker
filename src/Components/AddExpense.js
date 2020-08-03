import React, { useState, useContext } from 'react'
import { GlobalContext } from "../Context/GlobalContext";

export const AddExpense = () => {
    const [heading,setHeading] = useState('')
    const [amount,setAmount] = useState(0)
    const {addTransaction} = useContext(GlobalContext);

    function InsertTransaction(e){
        e.preventDefault()
        let transaction = {
            id:Math.random()*10000,
            name:heading,
            amount:+amount
        }
        addTransaction(transaction)
        setHeading('')
        setAmount(0)
    }
    

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={(e)=>InsertTransaction(e)}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input  type="text" 
                        value={heading}
                        onChange={(e)=>setHeading(e.target.value)} 
                        placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input  type="number" 
                        value={amount}
                        onChange={(e)=>setAmount(e.target.value)}
                        placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
