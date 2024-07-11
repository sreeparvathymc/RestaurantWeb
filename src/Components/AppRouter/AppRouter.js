
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Menu from '../Menu.js/Menu'
import ItemView from "../../Pages/ItemView/ItemView"
import CartItemsList from '../../Pages/CartItemsList/CartItemsList'
import ChickenItems from '../../Pages/ChickenItems/ChickenItems'
import SeaFoodItems from '../../Pages/SeaFoodItems/SeaFoodItems'
import Offer from '../../Pages/Offer/Offer'
import Contact from '../../Pages/Contact/Contact'
const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/offers' element={<Offer />}></Route>
        <Route path='/cartlist' element={<CartItemsList />}></Route>
        <Route path='view/:id' element={<ItemView />}></Route>
        <Route path='/chickenitems' element={<ChickenItems />}></Route>
        <Route path='/seafooditems' element={<SeaFoodItems />}></Route>
      </Routes>
    </div>
  )
}
export default AppRouter