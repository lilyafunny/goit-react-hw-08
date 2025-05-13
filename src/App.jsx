import Home from './pages/HomePage/HomePage'
import Login from './pages/LoginPage/LoginPage'
import Register from './pages/RegistrationPage/RegistrationPage'
import Contacts from './pages/ContactsPage/ContactsPage'

import { Routes, Route } from 'react-router-dom'
import Layout from '../Nav/Layout'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { refreshUser } from './redux/auth/operations'
import { selectIsRefreshing } from './redux/auth/selectors'
import PrivateRoute from '../PrivateRoute'
import RestrictedRoute from '../RestrictedRoute'

const App = () => {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contacts' element={<PrivateRoute><Contacts /></PrivateRoute>} />
        </Route>
        <Route path='/login' element={<RestrictedRoute component={<Login />} redirectTo='/contacts' />} />
        <Route path='/register' element={<RestrictedRoute component={<Register />} redirectTo='/contacts' />} />
      </Routes>
    </>
  )
}

export default App

