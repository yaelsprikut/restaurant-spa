import React from 'react';

class Table extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="table">
        <table id="myTable">
          <tbody>
            <tr className="header">
              <th style={{ width: '60%' }}>Restaurant</th>
              <th style={{ width: '40%' }}>City</th>
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
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
