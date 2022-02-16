import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Spongebob']);

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory
            setCategories= { setCategories }
        />
        <hr/>
        <div>
            {categories.map((category,i) => (
                <GifGrid 
                    key={ category }
                    category={ category }
                    id={ category }
                />
            ))}
        </div>
        </>
    )
}

export default GifExpertApp;