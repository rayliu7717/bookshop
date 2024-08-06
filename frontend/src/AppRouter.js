import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
  } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import App from './App';
import HomeScreen from './screens/HomeScreen';
import BookScreen from './screens/BookScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderListScreen from './screens/OrderListScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdminRoute from './components/AdminRoute';
import BookListScreen from './screens/BookListScreen';
import BookEditScreen from './screens/BookEditScreen';

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route index={true} path='/' element={<HomeScreen />} /> 
        <Route path='/book/:id' element={<BookScreen />} />
        <Route path='/cart' element={<CartScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/shipping' element={<ShippingScreen />} />
        {/* Registered users */}
        <Route path='' element={<PrivateRoute />}>
          <Route path='/shipping' element={<ShippingScreen />} />
          <Route path='/payment' element={<PaymentScreen />} />
          <Route path='/placeorder' element={<PlaceOrderScreen />} />
          <Route path='/order/:id' element={<OrderScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
        </Route>
          {/* Admin users */}
        <Route path='' element={<AdminRoute />}>
          <Route path='/admin/orderlist' element={<OrderListScreen />} />
          <Route path='/admin/booklist' element={<BookListScreen />} />
          <Route path='/admin/book/:id/edit' element={<BookEditScreen />} />
        </Route>
      </Route>
    )
);
