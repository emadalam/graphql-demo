import getMoviesForCast from '../data/getMoviesForCast';

export default {
    Cast :
    {
        movies : ( { id } ) => getMoviesForCast( id )
    }
}
