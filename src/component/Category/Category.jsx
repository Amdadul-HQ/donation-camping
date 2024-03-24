import { Link } from "react-router-dom";

const Category = ({item}) => {
    const{id,category_bg,card_bg,text_button_bg,picture,category,title} = item
    return (
        <div style={{background:card_bg,color:text_button_bg}} className={`space-y-3 pb-4 rounded-lg`}>
            <div>
                <img className="h-[194px] w-full rounded-t-lg" src={picture} alt="" />
            </div>
            <button style={{background:text_button_bg,color:category_bg}} className={` px-2 py-1 rounded-md font-medium ml-4`}><Link to={`/categorydetails/${id}`}>{category}</Link></button>
            <h3 className="text-xl font-semibold ml-4">{title}</h3>
        </div>
    );
};

export default Category;