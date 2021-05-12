import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios';
import {setProducts} from "../../redux/actions/productsActions"
import StarshipComponent from './StarshipComponent'


const ProductListing = () => {
    
    const products = useSelector((state)=> state);
    const dispatch = useDispatch();
    
    const fetchProducts = async () =>{
            const response = await axios.get("http://localhost:3000/starship").catch((err)=> {console.log(err)})
            console.log("IOC",response)
            dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchProducts();
    },[])
    //console.log("Products: ",products )
    return(
        <div className="">
            <StarshipComponent/>
        </div>
    )
}

export default ProductListing