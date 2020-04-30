import React from 'react';
import PropTypes from 'prop-types';
import icon from '../../containers/HomePage/images/resicon.png';

class Table extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { restaurants, selectedCities, selectedRestaurants } = this.props;
    const lastRestaurantInList = restaurants ? restaurants.slice(-1)[0] : [];

    let tableRows = [];
    const restaurantNamesSelected = [];

    const infoWidget = (
      <div className="alert alert-info alert-dismissible" role="alert">
        <a href="#" className="close" data-dismiss="alert" aria-label="close">
          &times;
        </a>
        <strong>Note:</strong> You can scroll down in the table.
      </div>
    );

    // check if there are any empty restaurant lists
    if (restaurants && lastRestaurantInList.length > 0) {
      restaurants.forEach((restaurantList) => {
        restaurantList.filter((restaurant) => { //  eslint-disable-line array-callback-return
          if (
            !restaurantNamesSelected.includes(restaurantList[0].name)
            && selectedCities.includes(restaurantList[0].city)
            && selectedRestaurants.length < 1
          ) {
            tableRows.push(
              <tr key={Math.random()}>
                <td key={Math.random()}>
                  <img
                    className="resicon"
                    align="center"
                    src={icon}
                    alt="restaruant icon"
                  />
                  <b>Name:</b> {restaurant.name}
                  <br />
                  <b>Address:</b> {restaurant.address}
                  <br />
                  <b>Price Range:</b> {restaurant.price}
                </td>
                <td key={Math.random()}>
                  {restaurant.city}
                  {restaurant.country ? `, ${restaurant.country}` : ''}
                </td>
              </tr>,
            );
          } else if (
            selectedRestaurants.includes(restaurant.name)
              || selectedRestaurants.includes(restaurant.address)
              || selectedRestaurants.includes(restaurant.area)
          ) {
            tableRows.push(
              <tr key={Math.random()}>
                <td key={Math.random()}>
                  <img
                    className="resicon"
                    align="center"
                    src={icon}
                    alt="restaruant icon"
                  />
                  <b>Name:</b> {restaurant.name}
                  <br />
                  <b>Address:</b> {restaurant.address}
                  <br />
                  <b>Price Range:</b> {restaurant.price}
                </td>
                <td key={Math.random()}>
                  {restaurant.city}
                  {restaurant.country ? `, ${restaurant.country}` : ''}
                </td>
              </tr>,
            );
          }
        });
      });
    } else {
      tableRows = (
        <tr>
          <td colSpan="2">No results found. Please try filtering.</td>
        </tr>
      );
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

Table.propTypes = {
  restaurants: PropTypes.array,
  selectedCities: PropTypes.array,
  selectedRestaurants: PropTypes.array,
};

export default Table;
