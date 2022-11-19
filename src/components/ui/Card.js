import React from 'react'
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={styles.card}>
        {/* special prop that accept
        the content between the component as a property
        and render it inside the component   */}
{props.children}

    </div>
  )
}

export default Card