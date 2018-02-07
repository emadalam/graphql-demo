import movies from './movies';

export default ( { name, year } ) => {
    const id = movies.length + 1;

    movies.push( { id, name, year } );

    return id;
}
