import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import starship from '../../assets/starship.png';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import space from "../../assets/sw.jpg"




const StarshipComponent = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])
    
    const starships = useSelector((state)=> state.allProducts.products);
    console.log("Pro",starships)


    const handleChange = (e) => {
        setSearchTerm(e.target.value);
      };

    useEffect(() => {
        const results = starships.filter(people =>
            people.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      }, [searchTerm]);

    return (
        <div className="text-center  h-screen" style={{backgroundImage:`url(${space})`}}>
          <div className="pt-10 font-bold">   <LazyLoadImage width={75} className="mt-3 mb-3"  effect="blur" src={starship} alt={"link.alt"} /> <h1 className="text-4xl text-white">Starship</h1> </div> 
          <div className="pt-10">
            
            <input className="mb-8 bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Add starship" value={searchTerm} onChange={handleChange}/>
                {searchTerm !== '' ? 
                <div className="h-screen">
                    { searchResults.map((starship, i) => (
                    <div className="md:w-1/6 mb-10 md: ml-12 md: mr-12  md:inline-flex shadow-2xl rounded-2xl ">
                      <div className="h-96 w-80 bg-white rounded-3xl border-solid border-4 border-blue-900">
                        <div className="w-full "><h1 className="mt-3 font-bold text-2xl mx-10">{starship.name}</h1></div>
                        <div className="w-full border-b-4 border-blue-900 mt-3  text-xl"><p className="text-2xl font-medium ">manufacturer</p><h1 className="ml-1/5 ">{starship.manufacturer}</h1></div>
                        <div className="w-full border-b-4 border-blue-900 mt-2 text-xl"><p className="text-2xl font-medium">cost_in_credits</p><h1 className="ml-1/5">{starship.cost_in_credits}</h1></div>
                        <div className="w-full border-b-4 border-blue-900 mt-2 text-xl"><p className="text-2xl font-medium">crew</p><h1 className="ml-1/5">{starship.crew}</h1></div>
                        <Link  to={`/people/${starship.id}`}>
                          <div className=" h-auto mt-3"><Button variant="outlined" color="primary">Learn more</Button></div>
                        </Link>
                      </div>
                  </div>    
                  ))}
                  
                </div>
                :
                <div className="">
                  { starships.map((starship) => (
                      <div className="md:w-1/6 mb-10 md:ml-12 md: mr-12  md:inline-flex shadow-2xl rounded-2xl ">
                        <div className="h-96 w-80 bg-white rounded-3xl border-solid border-4 border-blue-900">
                          <div className="w-full "><h1 className="mt-3 font-bold text-2xl">{starship.name}</h1></div>
                          <div className="w-full border-b-4 border-blue-900  mt-3  text-xl"><p className="text-2xl font-medium ">manufacturer</p><h1 className="ml-1/5 ">{starship.manufacturer}</h1></div>
                          <div className="w-full border-b-4 border-blue-900 mt-2 text-xl"><p className="text-2xl font-medium">cost_in_credits</p><h1 className="ml-1/5 ">{starship.cost_in_credits}</h1></div>
                          <div className="w-full mt-2 mt-auto mb-auto text-xl"><p className="text-2xl font-medium">crew</p><h1 className="ml-1/5">{starship.crew}</h1></div>
                          <Link  to={`/starship/${starship.id}`}>
                            <div className=" mb-auto pt-5"><Button variant="outlined" color="primary">Learn more</Button></div>
                          </Link>
                        </div>
                    </div>
                  ))}
                </div>
                }
            </div>
        </div>
    )
}

export default StarshipComponent