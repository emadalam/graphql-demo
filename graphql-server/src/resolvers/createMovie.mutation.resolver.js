import movies from '../data/movies';
import createMovie from '../data/createMovie';

export default {
    Mutation :
    {
        createMovie( base, args, context )
        {
            const { movie } = args;

            const id = createMovie( movie );

            return movies.find( movie => movie.id == id );
        }
    }
}
