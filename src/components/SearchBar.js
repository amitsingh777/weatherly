import React from "react";
// import { ReactComponent } from '*.svg';
import searchLogo from "../assets/search.svg";

class SearchBar extends React.Component {
  state = { searchTerm: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.search);
    this.props.onTermSubmit(this.state.searchTerm);
    // this.setState({searchTerm:""});
  };
  render() {
    return (
      <form
        action="#"
        className="search-bar"
        onSubmit={(e) => this.onFormSubmit(e)}
      >
        <div className="search-bar__content">
          <input
            type="text"
            name="searchBar"
            placeholder="Search For your city"
            value={this.state.search}
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
          ></input>
          <button className="search-bar__button" type="button">
            <img src={searchLogo} alt="search-icon"></img>
          </button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
// b1915559ba1147588c254944203108
