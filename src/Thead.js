import React from 'react'
import Tbody from './Tbody'

function Thead()  {
 return (
          <table className="table table-hover">
             <thead>
               <tr>
                <th  className="selector">
                   <input  type="checkbox" value="" id=""/>
                </th>
                <th>Invoive ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Payable Amount</th>
                <th>Paid Amount</th>
                <th>Due</th>
               </tr>
             </thead>
              <Tbody/>
              <Tbody/>
              <Tbody/>
              <Tbody/>
              <Tbody/>
              <Tbody/>
              <Tbody/>
              <Tbody/>
              <Tbody/>
              <Tbody/>
           </table>
        )
}

export default Thead