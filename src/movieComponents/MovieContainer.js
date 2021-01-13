import React, { Component } from 'react';
import MovieCard from './MovieCard';
import { connect } from "react-redux";
import { featchMovie, setLoading } from "../movieRedux/movieAction/searchAction";

class MovieContainer extends Component {

    componentDidMount() {
        this.props.featchMovie();
        this.props.setLoading();
    }
    render() {
        const { movies, searchedMovie } = this.props;
        console.log(movies);

        


        return (
            <div className="row">
            
                {/* {content} */}
                {
                    searchedMovie && searchedMovie.map((movie) => {
                        return (
                            <div className="col-md-3 mb-4" key={movie.title} >
                                <MovieCard movie={movie} />
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        text: state.movie.text,
        movies: state.movie.movies,
        loading: state.movie.loading,
        searchedMovie: state.movie.searchedMovie
    }
}
export default connect(mapStateToProps, { featchMovie, setLoading })(MovieContainer);

