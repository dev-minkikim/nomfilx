import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
`;
const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;
const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;
const SearchPresenter = ({
  movieResults,
  showResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movie or TV shows..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                rating={movie.vote_average}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {showResults && showResults.length > 0 && (
          <Section title="TV show Results">
            {showResults.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.name}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
                rating={show.vote_average}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
        {movieResults &&
          showResults &&
          movieResults.length === 0 &&
          showResults.length === 0 && (
            <Message text="Not found" color="#95a5a6" />
          )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  showResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func,
  updateTerm: PropTypes.func,
};

export default SearchPresenter;
