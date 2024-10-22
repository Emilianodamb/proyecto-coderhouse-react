import { useState } from 'react'
import styles from '../styles/ItemCount.module.css'

const ItemCount = ({addCart, stock}) => {
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

  return (
    <div className={styles.cardButtons}>
        <div className={styles.cardItemQuantity}>
            <button onClick={onDecrease}>-</button>
            <p>{count}</p>
            <button onClick={onAdd}>+</button>
        </div>
        <button className={styles.addToCartButton} onClick={() => addCart(count)}>Agregar</button>
    </div>
  )
}

export default ItemCount