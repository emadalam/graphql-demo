import casts from '../data/casts';
import createCast from '../data/createCast';
import { CAST_ADDED_TOPIC } from '../constants';
import pubsub from '../pubsub';

export default {
    Mutation :
    {
        createCast( base, args, context )
        {
            const { name } = args;

            // create a new cast
            const id = createCast( { name } );

            // get the newly added cast details
            const newlyAddedCast = casts.find( casts => casts.id == id );

            // publish the newly added cast details
            pubsub.publish( CAST_ADDED_TOPIC, { castAdded : newlyAddedCast } );

            return newlyAddedCast;
        }
    }
}
