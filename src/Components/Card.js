import React from 'react';
const Card = ({data}) => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Rate</th>
            
          </tr>
        </thead>
        <tbody>
        { (data.length > 0) ? data.map( (data, index) => {
           return (
            <tr key={ index }>
              <td>{ data.id.substring(0,3) }/{ data.id.substring(3,6) }</td>
              <td>{ data.rate }</td>
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
        </tbody>
      </table>
    );
  }
  
  export default Card