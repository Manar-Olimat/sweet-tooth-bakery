import {useState,useEffect} from 'react'
import RecipeItem from './RecipeItem';
import Pagination from './Pagination';
import styles from './RecipeList.module.css';



const MeetupList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  // console.log(JSON.stringify(props));
  // get current post
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = props.recipe.slice(indexOfFirstPost, indexOfLastPost);

// Change page
const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <>
    <ul className={styles.list}>
      {
        currentPosts.map(
          (recipe, index) => <RecipeItem 
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            title={recipe.title}
             />


        )
      }

    </ul >
<div>
  <Pagination  postsPerPage={postsPerPage}
        totalPosts={props.recipe.length}
        paginate={paginate} />
</div>
    </>
  )
}

export default MeetupList