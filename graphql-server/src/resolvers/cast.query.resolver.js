import casts from '../data/casts';

export default {
    Query :
    {
        cast( base, args, context )
        {
            // arguments passed from the query
            const { id } = args;

            return casts.find( cast => cast.id == id );
        }
    }
}
