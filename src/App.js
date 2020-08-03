import React from 'react';
import { Header  } from './Components/Header'
import { BalanceShow  } from './Components/BalanceShow'
import { Transactions  } from './Components/Transactions'
import { AddExpense  } from './Components/AddExpense'

import { GlobalProvider } from "./Context/GlobalContext";

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <BalanceShow />
        <Transactions />
        <AddExpense />
      </div>
    </GlobalProvider>
  );
}

export default App;
