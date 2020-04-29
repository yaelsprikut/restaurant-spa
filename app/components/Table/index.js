import React from 'react';

class Table extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="table">
        <table id="myTable">
          <tr className="header">
            <th style={{ width: '60%' }}>Name</th>
            <th style={{ width: '40%' }}>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Berglunds snabbkop</td>
            <td>Sweden</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Koniglich Essen</td>
            <td>Germany</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Table;
