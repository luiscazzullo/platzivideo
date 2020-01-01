import React from 'react';

//Styles
import '../assets/styles/Search.scss';

const Search = () => {
  return (
    <section className='main'>
      <h2 className='main__title'> ¿Qué buscas?</h2>
      <input type='text' className='input' placeholder='Buscar...' />
    </section>
  );
};

export default Search;