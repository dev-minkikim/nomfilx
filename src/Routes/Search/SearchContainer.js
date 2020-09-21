import React from "react";
import { moviesApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResults: null,
    showResults: null,
    searchTerm: "",
    error: null,
    loading: false,
  };
  updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      searchTerm: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };
  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: showResults },
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        showResults,
      });
    } catch {
      this.setState({ error: "못찾았당" });
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    const {
      movieResults,
      showResults,
      searchTerm,
      error,
      loading,
    } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        showResults={showResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
