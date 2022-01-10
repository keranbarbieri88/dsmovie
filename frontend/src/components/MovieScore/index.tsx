import MovieStars from 'components/MovieStars';
import './styles.css'

function MovieScore() {


    const score = 3.5;
    const count = 13;
    return (
        /*condicional ternário, se score maior que 0 o formato será com uma casa decimal, se não haverá apenas um traço*/
        <div className="dsmovie-score-container">            
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;