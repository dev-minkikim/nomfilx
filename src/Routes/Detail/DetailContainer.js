import React from "react";
import { moviesApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
      location: { pathname },
    } = await this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    this.isMovie = pathname.includes("/movie/");
    let result = null;
    try {
      if (this.isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.tvDetail(parsedId));
      }
    } catch {
      this.setState({ error: "못찾았당" });
    } finally {
      this.setState({ loading: false, result });
    }
  }
  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
