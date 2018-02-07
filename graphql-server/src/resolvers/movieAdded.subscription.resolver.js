import { MOVIE_ADDED_TOPIC } from '../constants';
import pubsub from '../pubsub';

export default {
    Subscription :
    {
        movieAdded :
        {
            subscribe : () => pubsub.asyncIterator( MOVIE_ADDED_TOPIC )
        }
    }
}
