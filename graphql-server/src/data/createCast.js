import casts from './casts';

export default ( { name } ) => {
    const id = casts.length + 1;

    casts.push( { id, name } );

    return id;
}
