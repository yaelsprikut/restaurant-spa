/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Table from 'components/Table';
import './style.scss';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import { Typeahead } from 'react-bootstrap-typeahead';

export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedCities: [],
      selectedRestaurantItems: [],
    };
  }

  componentDidMount() {
    const { onGetCities } = this.props;
    onGetCities();
  }

  render() {
    const ref = React.createRef();
    const {
      cities,
      city,
      restaurants,
      onGetRestaurantsForCity,
    } = this.props;

    const { selectedCities, selectedRestaurantItems } = this.state;

    const restaurantInfoArray = [];
    const restaurantInfoObj = [];

    if (restaurants) {
      restaurants.forEach((restaurantList) => {
        restaurantList.forEach((restaurant) => {
          if (selectedCities.includes(restaurant.city)) {
            restaurantInfoArray.push(
              restaurant.name,
              restaurant.address,
              restaurant.area,
            );
            restaurantInfoObj.push({
              name: restaurant.name,
              address: restaurant.address,
              area: restaurant.area,
            });
          }
        });
      });
    }

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js application homepage" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Restaurant Search</h2>
          </section>
          <section>
            <Typeahead
              multiple
              ref={ref}
              id="cityField"
              type="text"
              className="cityField"
              value={city}
              placeholder="Enter a city..."
              options={cities ? cities : []} // eslint-disable-line no-unneeded-ternary
              onChange={(selected) => {
                this.setState({ selectedCities: selected });
                // avoid duplicates being stored to state
                const lastSelected = selected.slice(-1)[0];
                // make sure undefined values don't get passed here
                if (lastSelected !== undefined) {
                  onGetRestaurantsForCity(lastSelected);
                }
              }}
            />{' '}
            {/* <p>Refine results by adding names, addresses, areas...</p> */}
            <Typeahead
              multiple
              id="renderField"
              type="text"
              className="refineField"
              value={city}
              placeholder="Refine search results by adding names, addresses, areas..."
              options={restaurantInfoArray}
              onChange={(selected) => {
                // avoid duplicates being stored to state
                this.setState({ selectedRestaurantItems: selected });
              }}
            />{' '}
            <Table
              restaurants={restaurants}
              selectedCities={selectedCities}
              selectedRestaurants={selectedRestaurantItems}
            />
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  city: PropTypes.string,
  cities: PropTypes.array,
  restaurants: PropTypes.array,
  onGetCities: PropTypes.func,
  onGetRestaurantsForCity: PropTypes.func,
};
