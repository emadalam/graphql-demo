import getCastsForMovie from '../data/getCastsForMovie';

export default {
    Movie :
    {
        cast : ( { id } ) => getCastsForMovie( id )
    }
}
