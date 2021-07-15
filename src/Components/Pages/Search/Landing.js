import React, { Component } from 'react';

import { connect } from 'react-redux';
import Search from './Search';
import MoviesContainer from './MoviesContainer';
import Loading from './Loading';

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <Search />
        {loading ? <Loading /> : <MoviesContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);
