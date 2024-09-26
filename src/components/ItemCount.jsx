import { useState } from 'react'
import './ItemCount.css'

function ItemCount({stock}) {
  const [count, setCount] = useState(1)

    const onAdd = () => {
        if(count < stock){
            setCount(count+1)
        }
    }
    const onDecrease = () => {
        if(count > 1){
            setCount(count-1)
        }
    }
    const addToCart = () => {
        setCount(1)
    }

  return (
    <div className="card-buttons">
        <div className="card-item-quantity">
            <button onClick={onDecrease}>-</button>
            <p>{count}</p>
            <button onClick={onAdd}>+</button>
        </div>
        <button className="addToCart-button" onClick={addToCart}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount