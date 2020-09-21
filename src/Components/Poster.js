import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
  height: 180px;
  transition: opacity 0.1s linear;
  border-radius: 5px;
`;
const Rating = styled.span`
  opacity: 0;
  position: absolute;
  bottom: 5px;
  right: 10px;
`;
const ImageContainer = styled.div`
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;
const Title = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 600;
`;
const Year = styled.span`
  color: rgba(250, 250, 250, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w500${imageUrl}`
              : require("../assets/notFoundImg.png")
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>
          {rating} /10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 15 ? `${title.substring(0, 14)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
