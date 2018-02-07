import casts from '../data/casts';
import createCast from '../data/createCast';

export default {
    Mutation :
    {
        createCast( base, args, context )
        {
            const { cast } = args;

            const id = createCast( cast );

            return casts.find( casts => casts.id == id );
        }
    }
}
