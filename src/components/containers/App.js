import React from 'react';

//Components
import Header from '../Header';
import Search from '../Search';
import Categories from '../Categories';
import Carousel from '../Carousel';
import CarouselItem from '../CarouselItem';
import Footer from '../Footer';

//Styles
import '../../assets/styles/Media.scss';
//Hooks
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);
  return initialState.lenght === 0 ? <h1>Looading...</h1> : (
    <div className='App'>
      <Header />
      <Search />
      {initialState.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {
            initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi'>
        <Carousel>
          {
            initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
