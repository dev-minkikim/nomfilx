import React from "react";
import { moviesApi } from "../../api";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    popular: null,
    upcoming: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      this.setState({
        nowPlaying,
        popular,
        upcoming,
      });
    } catch {
      this.setState({ error: "영화를 찾지 못했어 .." });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { nowPlaying, popular, upcoming, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        popular={popular}
        upcoming={upcoming}
        error={error}
        loading={loading}
      />
    );
  }
}
