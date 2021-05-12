import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PeopleComponent from "./PeopleComponent";
import axios from 'axios';
import {setProducts} from "../../redux/actions/productsActions"
import NavbarTest from "../../NavbarTest";


const PeopleListing = () => {
    
    const products = useSelector((state)=> state);
    const dispatch = useDispatch();
    
    const fetchProducts = async () =>{
            const response = await axios.get("http://localhost:3000/people").catch((err)=> {console.log(err)})
            console.log("IOC",response)
            dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchProducts();
    },[])
    //console.log("Products: ",products )
    return(
        <div className="">
            <PeopleComponent className=""/>
        </div>
    )
}

export default PeopleListing