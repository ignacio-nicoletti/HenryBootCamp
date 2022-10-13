import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanDetail, getMovieDetail } from '../../actions/index';

import './Movie.css';



function Movie(props){

    const dispatch = useDispatch(); // mapDispatchToProps
    const movieDetail = useSelector((state) => state.movieDetail); //mapStateToProps

    useEffect(() => {
        //le digo que vaya a buscar el detail de la peli -> didMount
        dispatch(getMovieDetail(props.match.params.id))

        return () => { // la función que retorna --> WillUnmount
            dispatch(cleanDetail())
        }
    }, [dispatch, props.match.params.id]) // array -> didUpdate

    return(
        <div className="movie-detail">
            <h1>{movieDetail.Title}</h1>
            <p>{movieDetail.Year}</p>
            <img src={movieDetail.Poster} alt='poster'/>
            <p>{movieDetail.Plot}</p>
        </div>
    )
}


export default Movie;







// class Movie extends React.Component {
//  {   constructor(props){
//     super(props)
// }

// componentDidMount(){

// this.props.movieDetail(this.props.match.params.id)


// }

//     render() {
//         return (
//             <div className="movie-detail">
//                <h1>{this.props.movieDetail.Title}</h1>
//                <p>{this.props.movieDetail.Year}</p>
//                <img src={this.props.movieDetail.Poster}/>
//                <p>{this.props.movieDetail.Plot}</p>
//             </div>
//         );
//     }
// }
// const mapStateToProps = (state) => {
//     return {

//         movieDetail: state.movieDetail
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         movieDetail: (id) => dispatch(movieDetail(id))

//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Movie);
