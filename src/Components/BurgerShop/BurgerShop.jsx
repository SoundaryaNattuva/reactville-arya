import React from 'react'
import '../../styles/burger.css'

import { ingredients } from '../../data/burger-data'

const BurgerShop = () => {
  console.log(ingredients)
  
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button>Clear Order</button>
      </nav>
      <section>
        IngredientList here
        BurgerStack here
      </section>
    </div>
  )
}

export default BurgerShop