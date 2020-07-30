import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/Home';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Videos'
import CadastroCategoria from './pages/cadastro/Categorias';

const Pagina404 = () => (<div>Pagina 4040</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ Home } exact/>
      <Route path="/cadastro/video" component={ CadastroVideo } />
      <Route path="/cadastro/categoria" component={ CadastroCategoria } />
      <Route component={ Pagina404 }/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
