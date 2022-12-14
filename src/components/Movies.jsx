import React from "react";
import { Spinner, Carousel, Row, Col } from "react-bootstrap";
import Error from "./Error";
import SingleMovie from "./SingleMovie";

class Movies extends React.Component {
  state = {
    isLoading: true,
    isError: false,
    movies: [],
  };

  async getMovies() {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=b7cd47fe&s=${encodeURIComponent(
          this.props.search
        )}`
      );
      if (response.ok) {
        const data = await response.json();
        let movies = data.Search;
        this.setState({ ...this.state, movies: movies, isLoading: false });
        console.log(data.Search);
        console.log(movies);
      } else {
        console.log("No movies found");
        this.setState({
          ...this.state,
          isLoading: false,
          isError: true,
        });
      }
    } catch (e) {
      console.log(e);
      this.setState({
        ...this.state,
        isLoading: false,
        isError: true,
      });
    }
  }

  componentDidMount() {
    console.log("random stuff");
    this.getMovies();
  }

  render() {
    return (
      <div className="movie-gallery m-2">
        <h5 className="text-light mt-2 mb-2"></h5>

        {this.state.isLoading && <Spinner></Spinner>}

        {this.state.isError && <Error></Error>}

        {!this.state.isLoading && !this.state.isError && (
          <Carousel>
            <Carousel.Item>
              <Row className="row">
                {this.state.movies.slice(0, 6).map((movie) => (
                  <SingleMovie
                    key={movie.imdbID}
                    id={movie.imdbID}
                    title={movie.title}
                    plot={movie.Plot}
                    image={movie.Poster}
                  />
                ))}
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="row">
                {this.state.movies.slice(6, 12).map((movie) => (
                  <SingleMovie
                    key={movie.imdbID}
                    id={movie.imdbID}
                    title={movie.title}
                    plot={movie.Plot}
                    image={movie.Poster}
                  />
                ))}
              </Row>
            </Carousel.Item>
          </Carousel>
        )}
      </div>
    );
  }
}

export default Movies;
