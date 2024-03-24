import { Link } from "react-router-dom";

const Donated = ({item}) => {
    const {id,picture,title,category,price,card_bg,text_button_bg,category_bg} = item;
    return (
        <div style={{background:card_bg,color:text_button_bg}} className="flex items-center gap-x-6 w-full">
            <div>
                <img className="w-[220px] h-[220px]" src={picture} alt="" />
            </div>
            <div className="space-y-5">
                <h1 style={{background:text_button_bg,color:category_bg}} className={`text-center px-2 py-1 rounded-md font-medium w-fit`}>{category}</h1>
                <h1 className="text-xl text-black font-semibold">{title}</h1>
                <p className="text-base font-semibold">{price}</p>
                <button style={{background:text_button_bg,color:category_bg}} className={` px-2 py-1 rounded-md font-medium ml-4`}><Link to={`/categorydetails/${id}`}>View Details</Link></button>
            </div>
        </div>
    );
};

export default Donated;