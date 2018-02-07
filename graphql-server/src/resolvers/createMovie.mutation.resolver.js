import movies from '../data/movies';
import createMovie from '../data/createMovie';
import { MOVIE_ADDED_TOPIC } from '../constants';
import pubsub from '../pubsub';

export default {
    Mutation :
    {
        createMovie( base, args, context )
        {
            const { movie } = args;

            // create a new movie
            const id = createMovie( movie );

            // get the newly added movie details
            const newlyAddedMovie = movies.find( movie => movie.id == id );

            // publish the newly added movie details
            pubsub.publish( MOVIE_ADDED_TOPIC, { movieAdded : newlyAddedMovie } );

            return newlyAddedMovie;
        }
    }
}
