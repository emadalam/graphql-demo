import movies from './movies';

const castMoviesMap =
{
    1 : [ 1 ],
    2 : [ 2 ],
    3 : [ 3 ],
    4 : [ 4 ],
    5 : [ 5 ],
    6 : [ 6 ]
};

export default ( id ) =>
    movies.filter( movie => castMoviesMap[ id ].includes( movie.id ) );
