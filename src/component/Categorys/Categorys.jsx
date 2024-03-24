import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categorys = () => {

    const[categorys,SetCategorys] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then( res => res.json())
        .then( data => SetCategorys(data) )
    },[])

    return (
        <section className="grid grid-cols-4 gap-6">
            {
                categorys.map( item => <Category key={item.id} item={item}></Category> )
            }
        </section>
    );
};

export default Categorys;