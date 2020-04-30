import React from 'react';
import icon from '../../containers/HomePage/images/resicon.png';

class Table extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { restaurants } = this.props;
    let tableRows = []
    let restaurantNames = []
    let infoWidget = (
      <div className="alert alert-info alert-dismissible" role="alert">
        <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Note:</strong> You can scroll down in the table.
      </div>
    )

    if(restaurants && restaurants.slice(-1)[0].length > 0) {
      restaurants.forEach((restaurantList) => {
        if(!restaurantNames.includes(restaurantList[0].name)) {
          restaurantList.forEach((restaurant, index) => {
            tableRows.push(
              <tr key={index + 2}>
              <td key={index}>
                <img className="resicon" align="center" src={icon} alt="restaruant icon" />
                <b>Name:</b> {restaurant.name}<br/>
                <b>Address:</b> {restaurant.address}<br/>
                <b>Area:</b> {restaurant.area}
              </td>
              <td key={index + 1}>{restaurant.city}</td>
            </tr>
            )
          })
        }
          restaurantNames.push(restaurantList[0].name)
      })
    } else {
      tableRows = (<tr><td colspan="2">No results found. Please try filtering again.</td></tr>)
    }

    return (
      <div>
        {infoWidget}
        <div className="table">
        <table id="myTable">
          {/* Caption for AODA */}
        <caption>Table will display matching results.</caption>
          <tbody>
            <tr className="header">
              <th style={{ width: '70%' }}>Restaurant</th>
              <th style={{ width: '30%' }}>City</th>
            </tr>
            {tableRows}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default Table;
