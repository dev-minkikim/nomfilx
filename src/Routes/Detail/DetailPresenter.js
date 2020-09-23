import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  padding: 50px;
  position: relative;
`;
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.6;
  z-index: 0;
`;
const Content = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
`;
const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  border-radius: 5px;
`;
const Data = styled.div`
  width: 70%;
  margin-left: 20px;
`;
const Title = styled.h3`
  font-size: 36px;
  margin-top: 40px;
`;
const ItemContainer = styled.div`
  margin-top: 10px;
  font-size: 20px;
`;
const Divider = styled.span`
  margin: 0px 5px;
`;
const Year = styled.span``;
const Time = styled.span``;
const Genres = styled.span``;
const Star = styled.span``;
const CreatedBy = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 20px;
  opacity: 0.6;
`;
const List = styled.li`
  margin-top: 5px;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      {error ? (
        <Message />
      ) : (
        <Container>
          <Backdrop
            bgImage={
              result.backdrop_path
                ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
                : `https://image.tmdb.org/t/p/original${result.poster_path}`
            }
          />
          <Content>
            <Cover
              bgImage={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                  : require("../../assets/notFoundImg.png")
              }
            />
            <Data>
              <Title>{result.title ? result.title : result.name}</Title>
              <ItemContainer>
                <Year>
                  {result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)}
                </Year>
                <Divider>•</Divider>
                <Time>
                  {result.runtime ? result.runtime : result.episode_run_time[0]}{" "}
                  min
                </Time>
                <Divider>•</Divider>
                <Genres>
                  (
                  {result.genres.map((genre, index) =>
                    index === result.genres.length
                      ? genre.name
                      : ` ${genre.name} /`
                  )}
                  )
                </Genres>
                <Divider>•</Divider>
                <Star>
                  <span role="img" aria-label="rating">
                    ⭐
                  </span>{" "}
                  {result.vote_average} / 10
                </Star>
              </ItemContainer>
              <CreatedBy>
                Created By
                {result.created_by
                  ? result.created_by.map((create, index) => (
                      <ul key={index}>
                        <List> » {create.name}</List>
                      </ul>
                    ))
                  : result.production_companies.map((prod, index) => (
                      <ul key={index}>
                        <List> » {prod.name}</List>
                      </ul>
                    ))}
              </CreatedBy>
            </Data>
          </Content>
        </Container>
      )}
    </>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
