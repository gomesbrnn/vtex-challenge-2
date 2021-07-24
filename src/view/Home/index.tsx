import React, { useState, useEffect } from 'react';

import Cart from '../../assets/cart.png'

import { Container } from './style';

import api from '../../services/api';

import products from '../../server'

interface Sproduct {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {

  const [cart, setCart] = useState<Sproduct[]>([]);

  const addCart = (index: number) => {
    cart.push(products[index])
    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore)
  }

  return (
    <Container>
      <div className="nav">
        <div>
          <img src="data:image/png;base64,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" alt="vtex" width="200px" height="auto" />
        </div>

        <div className="cart">
          <img src={Cart} alt="shopcart" width="50px" height="auto" />
          <span>( {cart.length} ) - Itens</span>
        </div>
      </div>
      <section>
        {products.map((prod, index) => (
          <div className="product-content" key={prod.id} >
            <img src={prod.photo} alt="smartwatch" width="200" height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>R$ {prod.price}</h6>
            <button onClick={() => addCart(index)}>Adicionar ao carrinho</button>
          </div>
        ))}
      </section>
    </Container>

  )
}
export default Home;