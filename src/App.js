import {Route} from 'react-router-dom';
import productPage from './pages/productPage.jsx'
import productDetail from './pages/productDetail.jsx'
import productCreate from './pages/productCreate.jsx'
import productEdit from './pages/productEdit.jsx'

import 'bootstrap/dist/css/bootstrap.css';
import './assets/global.scss'
import './assets/scss/product-list.scss'
import './assets/scss/product-detail.scss'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={productPage}></Route>
			<Route exact path='/detail/:platform/:slug' component={productDetail}></Route>
      <Route exact path='/add/:platform' component={productCreate}></Route>
      <Route exact path='/edit/:platform/:slug' component={productEdit}></Route>
    </div>
  );
}

export default App;
