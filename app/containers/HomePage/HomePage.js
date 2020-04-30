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
    const { onGetCities, cities } = this.props;
    if (cities === null) {
      onGetCities();
    }
  }

  render() {
    const {
      loading, error, repos, cities, city
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
              id="cityField"
              type="text"
              className="cityField"
              value={city}
              placeholder="Enter a city..."
              options={cities}
              // onChange={(selected) => {
              //   // Handle selections...
              // }}
            />{' '}
            <Typeahead
              multiple
              id="renderField"
              type="text"
              className="refineField"
              value={city}
              placeholder="Refine results by adding names, ..."
              options={['array', 'of', 'refines']}
              // onChange={(selected) => {}}
            />{' '}
            <Table />
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
};
