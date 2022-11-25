import '../css/Transactions.css'
import React from 'react';


const Transactions = (props) => {
    return (
    <div className='m-5 ps-4 rounded shadow-lg' style={{zIndex:1, background: "grey"}}>
        <h1 className='display-8 mb-5 title'>Transaction Detail</h1>
        <div className='ms-2' style={{background: "grey"}}>
            <button className='p-2 rounded-pill'>lala</button>
            <button className='p-2 ms-1 rounded-pill'>lala</button>
            <label className='me-2 money' style={{fontSize: "1.5rem"}}> {props.money} </label>
        </div>
        <h4>uno <span style={{color: "grey"}}>paga</span> yhju</h4>
        <h6 className='grey'>pago: usuario cifrado a otro usuario cifrado</h6>
        <div className='mt-2' style={{background: "grey"}}>
            <h5>0</h5>
            <div>
                <i class="bi bi-hand-thumbs-up" style={{color: "blue", fontSize: "200%"}}></i>
            </div>
        </div>
        <input className='mb-2 rounded' placeholder='Write a comment...'></input>
        
    </div>
    );
}

export default Transactions;
