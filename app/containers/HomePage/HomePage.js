/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import Table from 'components/Table';
import './style.scss';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import { Typeahead } from 'react-bootstrap-typeahead';

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    const { onGetCities } = this.props;
      onGetCities();
  }

  render() {
    const ref = React.createRef();
    const {
      loading, error, repos, cities, city, onGetRestaurantsForCity
    } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

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
              options={cities ? cities : []}
              onChange={(selected) => {
                // avoid duplicates being stored to state 
                let lastSelected = selected.slice(-1)[0]
                onGetRestaurantsForCity(lastSelected)
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
              options={['array', 'of', 'refines']}
              // onChange={(selected) => {}}
            />{' '}
            <Table restaurants={this.props.restaurants} />
            <ReposList {...reposListProps} />
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  city: PropTypes.string,
  cities: PropTypes.array,
  onGetCities: PropTypes.func,
  onGetRestaurantsForCity: PropTypes.func,
};
