import casts from './casts';

const movieCastMap =
{
    1 : [ 1 ],
    2 : [ 2 ],
    3 : [ 3 ],
    4 : [ 4 ],
    5 : [ 5 ],
    6 : [ 6 ]
};

export default ( id ) =>
    casts.filter( cast => movieCastMap[ id ].includes( cast.id ) );
