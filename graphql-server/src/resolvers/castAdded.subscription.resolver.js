import { CAST_ADDED_TOPIC } from '../constants';
import pubsub from '../pubsub';

export default {
    Subscription :
    {
        castAdded :
        {
            subscribe : () => pubsub.asyncIterator( CAST_ADDED_TOPIC )
        }
    }
}
