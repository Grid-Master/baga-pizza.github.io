import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import pizzas from './assets/pizza.json';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaBlock title="Молдавская" price={228} />
              <PizzaBlock title="Чизбургер-пицца" price="1337" />
              <PizzaBlock title="Четыре сыра" price="500" />
              <PizzaBlock title="XXX" price="9999" />
              <PizzaBlock title="XXX" price="9999" />
              <PizzaBlock title="XXX" price="9999" />
              <PizzaBlock title="XXX" price="9999" />
              <PizzaBlock title="XXX" price="9999" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
