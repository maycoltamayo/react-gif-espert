import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( onNewCateory ) => {

    if ( categories.includes(onNewCateory) ) return;
    
    setCategories([onNewCateory,...categories]);

  };

  return (
    <>

      <h1>GifExpertApp</h1>


      <AddCategory  
        onNewCateory={ onAddCategory }
      />
           
        { 
          categories.map( (category) => {
            return ( 
              <GifGrid key={ category } category={ category }/>
            ); 
          }) 
        }
    </>
  )
}
