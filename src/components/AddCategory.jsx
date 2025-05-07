import { useState } from "react"


export const AddCategory = ({onNewCateory}) => {

    const [inputValue,setInputValue ] = useState('');

    const onInputChange = (event) => {
        setInputValue( event.target.value );    
    }

    const onSubmit = (event) =>{
        event.preventDefault(); 

        if (inputValue.trim().length <= 1) return;

        onNewCateory( inputValue.trim() ); 

        // setCategories( categories => [ inputValue, ...categories] );
        setInputValue('');
       

    }
    
  return (
    <form action="" onSubmit={ onSubmit }>
        <input type="text" placeholder="Buscar gif" value={inputValue} onChange={ onInputChange } />
    </form>
  )
}
