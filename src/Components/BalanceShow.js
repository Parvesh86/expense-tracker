import React , { useContext } from 'react'
import { GlobalContext } from "../Context/GlobalContext";

export const BalanceShow = () => {
    const {transactions} = useContext(GlobalContext)

    const amount = transactions.map(transaction => transaction.amount)
    const balance = amount.reduce((num,total)=> (total+=num),0).toFixed(2)

    const income = amount
                    .filter(item => item > 0)
                    .reduce((num,total) => (total+=num),0)
                    .toFixed(2)
    const expense = amount
                    .filter(item => item < 0)
                    .reduce((num,total) => (total+=num),0)
                    .toFixed(2)

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${balance}</h1>

            <div className="inc-exp-container">
                <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${income}</p>
                </div>
                <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${Math.abs(expense)}</p>
                </div>
            </div>
        </>
    )
}
