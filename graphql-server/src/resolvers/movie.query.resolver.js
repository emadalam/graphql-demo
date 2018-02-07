import movies from '../data/movies';

export default {
    Query :
    {
        movie( base, args, context )
        {
            // arguments passed from the query
            const { id } = args;

            return movies.find( movie => movie.id == id );
        }
    }
}
