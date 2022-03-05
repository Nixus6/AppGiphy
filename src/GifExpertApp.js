import { React, useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExppertApp = () => {
    const [categories, setCategories] = useState(["Spider Man"])
    // const handleChange = () => {
    //     let value = document.getElementById('newHeroe').value;
    //     console.log("Here", value);
    //     // setCategories([...categories,value])
    //     setCategories(call => [...call, value])//Usando el callback del useState

    // }
    return (
        <>
            <h2>GifExppertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleChange}>New Heroe</button> */}
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            // <li key={category}>{category}</li>
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
};
export default GifExppertApp;