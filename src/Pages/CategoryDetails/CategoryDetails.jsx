import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CategoryDetails = () => {
    const categorys = useLoaderData()
    const {id} = useParams()
    const [category,setCategory] = useState([])

    useEffect( () => {
       const selectCategory = categorys.find( item => item.id == id)
       setCategory(selectCategory)
    } ,[category,id])
    
    console.log(category);
    return (
        <div>
            <div  className='h-[600px] w-full relative'>
                <img className='w-full h-full' src={category.picture} alt="" />
                <div className='absolute bottom-0 w-full p-10 bg-[rgba(11,11,11,0.50)]'>
                    <button className='px-7 py-4 bg-[#FF444A] rounded-lg text-xl font-semibold text-white'>Donate $ {category.price}</button>
                </div>
            </div>
            <h1 className='mt-14 text-4xl font-bold'>{category.title}</h1>
            <p className='text-base text-[rgba(11,11,11,0.70)] font-medium my-6'>{category.description}</p>
        </div>
    );
};

export default CategoryDetails;