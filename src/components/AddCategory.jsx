import { useState } from "react"


export const AddCategory = ({sendAddFunction}) => {
    const [valueCategory, setValueCategory] = useState("")
    
    const onChangeText = ({target}) =>{
        setValueCategory(target.value)
    }
    const sendCategory = (event) =>{
        event.preventDefault();
        if (valueCategory.trim().length <= 1)
            return;
        //addCategories(prevcategory =>[ ...prevcategory, valueCategory])
        sendAddFunction(valueCategory);
        setValueCategory('');
    }

return (
    <form onSubmit={ sendCategory }>
        <input 
            type="text" 
            name="input-category" 
            placeholder="Input category"
            value = {valueCategory}
            onChange={onChangeText}
            />
    </form>
  )
}
