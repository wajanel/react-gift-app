import { useState } from "react";
import {AddCategory, GiftGrid} from "./components"

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(["One Pounch"])

    const onAddCategory = category =>{

        if (categories.includes(category)) return;

        setCategories([category, ...categories]);
        //setCategories( cat => [...cat, "Valarant"]);
    }

  return (
    <>
        {/** Titulo */}
        <h1>GiftExpertApp</h1>
        {/** Input --> buscador */}
        <AddCategory sendAddFunction={ onAddCategory } />
        {/* <AddCategory addCategories={setCategories}/>*/}
        {/** Listado de Gifs */}
        <ol>
            { categories.map (
                (category) => /*, index) => <li key={ category }>{category}</li>*/
                     <GiftGrid key={category} category={category}/>
                
            )
            }
        </ol> 
            {/** Gif Items */}
    </>
  )
};

//rafc --> para iniciar el componente