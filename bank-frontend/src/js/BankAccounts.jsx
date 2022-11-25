// import React, { useState, useEffect } from "react";
import BankAccount from "./BankAccount";
import React from "react";

function BankAccounts() {

    //const [bankAccounts, setBankAccounts] = useState([]);

    const bankAccountsList=[
        {key:"1", name:"huang"}
    ];
    

//   useEffect(() => {
//     const bankAccountsList = props.bankAccounts;
//     setBankAccounts(bankAccountsList);

//     console.log("deloquequieras");
//   }, [props.bankAccounts]);

  return (
    <div className='m-5 ps-4 rounded shadow-lg' style={{zIndex:1, background: "grey"}}>
        <h1>Bank Accounts</h1>
        <input type='submit' value='Create' ></input>
      {bankAccountsList.map((bankAccount) => (
        <div key={bankAccount.key}><BankAccount
              name={bankAccount.name}
          />

          <input type='submit' value='Delete' />
          </div>
      ))}

    </div>
  );
}

export default BankAccounts;