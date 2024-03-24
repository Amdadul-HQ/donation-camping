import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreItems } from "../../Utlitys/localStorage";
import Donated from "../../component/Donated/Donated";


const Donation = () => {
    const categorys = useLoaderData()
    const [donations,setDonations] = useState([])
    useEffect( () => {
        const storeId = getStoreItems()
        console.log(storeId);
        const donated = categorys.filter( item => storeId.includes(item.id) )
        setDonations(donated)
    },[])
    return (
        <div className="grid grid-cols-2">
            {
                donations.map( item => <Donated key={item.id} item={item}></Donated> )
            }
        </div>
    );
};

export default Donation;