import React from 'react'
import RecipeItem from './RecipeItem';

import styles from './RecipeList.module.css';



const MeetupList = (props) => {
  // console.log(JSON.stringify(props));
  return (
    <ul className={styles.list}>
      {
        props.recipe.map(
          (recipe, index) => <RecipeItem 
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            title={recipe.title}
             />


        )
      }

    </ul >
  )
}

export default MeetupList