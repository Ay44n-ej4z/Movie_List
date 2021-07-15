import React, { Component } from 'react';
import { Input } from '@material-ui/core';
import { connect } from 'react-redux';
import SearchIcon from "@material-ui/icons/Search";
import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../../actions/searchActions';
import './Search.css'

export class Search extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      // <div className="all">
        <div className="container">
          <form id="searchForm" onSubmit={this.onSubmit}>
            <div className = "form">
            <div className = "input">
            <Input
              style = {{color: "white"}}
              type="text"
              placeholder="Search Movies, TV Series ..."
            
              onChange={this.onChange}
            />
            </div>
            <div className = "btn"> 
            <button type="submit" icon={<SearchIcon />} >
            {<SearchIcon />}
            </button>
            </div>
            </div>
          </form>
        </div>
      // </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(Search);
