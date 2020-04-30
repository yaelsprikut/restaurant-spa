import React from 'react';
import icon from '../../containers/HomePage/images/resicon.png';

class Table extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { restaurants, selectedCities } = this.props;
    let tableRows = []
    let restaurantNames = []
    let infoWidget = (
      <div className="alert alert-info alert-dismissible" role="alert">
        <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Note:</strong> You can scroll down in the table.
      </div>
    )

    // check if there are any empty restaurant lists
    if(restaurants && restaurants.slice(-1)[0].length > 0) {
      restaurants.forEach((restaurantList) => {
        if(!restaurantNames.includes(restaurantList[0].name) && selectedCities.includes(restaurantList[0].city)) {
          restaurantList.forEach((restaurant) => {
            tableRows.push(
              <tr key={Math.random()}>
              <td key={Math.random()}>
                <img className="resicon" align="center" src={icon} alt="restaruant icon" />
                <b>Name:</b> {restaurant.name}<br/>
                <b>Address:</b> {restaurant.address}<br/>
                <b>Area:</b> {restaurant.area}
              </td>
              <td key={Math.random()}>{restaurant.city}</td>
            </tr>
            )
          })
        } 
        restaurantNames.push(restaurantList[0].name)
      })
    } else {
      tableRows = (<tr><td colSpan="2">No results found. Please try filtering again.</td></tr>)
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
