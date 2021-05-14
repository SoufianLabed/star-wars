import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import planet from '../../assets/planet.png';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import space from "../../assets/sw.jpg"


const PlanetComponent = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])
    
    const planets = useSelector((state)=> state.allProducts.products);


    const handleChange = (e) => {
        setSearchTerm(e.target.value);
      };

    useEffect(() => {
        const results = planets.filter(people =>
            people.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      }, [searchTerm]);

    return (

        <div className="text-center  h-screen" style={{backgroundImage:`url(${space})`}}>
          <div className="pt-10 font-bold">   <LazyLoadImage width={75} className="mt-3 mb-3"  effect="blur" src={planet} alt={"link.alt"} /> <h1 className="text-4xl text-white">Planet</h1> </div> 
          
          <div className="pt-10">
        
            <input className="mb-8 bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" type="text" placeholder="Add planet" value={searchTerm} onChange={handleChange}/>
                {searchTerm !== '' ? 
                <div className="h-screen">
                    { searchResults.map((planet, i) => (
                    


                    <div className="md:w-1/6 mb-10 md: ml-12 md: mr-12  md:inline-flex shadow-2xl rounded-2xl ">
                      <div className="h-96 w-80 bg-white rounded-3xl border-solid border-4 border-blue-900">
                        <div className="w-full "><h1 className="mt-3 font-bold text-3xl">{planet.name}</h1></div>
                        <div className="w-full border-b-4 border-blue-900 text-xl mt-2  text-xl"><p className="text-2xl font-medium ">Population</p><h1 className="ml-1/5 mx-16">{planet.population}</h1></div>
                        <div className="w-full border-b-4 border-blue-900 text-xl"><p className="text-2xl font-medium">Climate</p><h1 className="ml-1/5 mx-16">{planet.climate}</h1></div>
                        <div className="w-full   mt-2 text-xl"><p className="text-2xl font-medium">Terrain</p><h1 className="ml-1/5 mx-16">{planet.terrain}</h1></div>

                        <Link  to={`/planet/${planet.id}`}>
                          <div className=" pt-5"><Button variant="outlined" color="primary">Learn more</Button></div>
                        </Link>
                      </div>            
                    </div>
                )
                )}
                </div>
                :
                <div className="">
                { planets.map((planet) => (

                        <div className="md:w-1/6 mb-10 md: ml-12 md: mr-12  md:inline-flex shadow-2xl rounded-2xl ">
                          <div className="h-96 w-80 bg-white rounded-3xl border-solid border-4 border-blue-900">
                          <div className="w-full "><h1 className="mt-3 font-bold text-3xl">{planet.name}</h1></div>
                          <div className="w-full border-b-4 border-blue-900 text-xl  mt-2  text-xl"><p className="text-2xl font-medium ">Population</p><h1 className="ml-1/5 ">{planet.population}</h1></div> 
                          <div className="w-full border-b-4 border-blue-900 text-xl mt-2 text-xl"><p className="text-2xl font-medium">Climate</p><h1 className="ml-1/5 ">{planet.climate}</h1></div>
                          <div className="w-full  text-xl mt-2 text-xl"><p className="text-2xl font-medium">Terrain</p><h1 className="ml-1/5 ">{planet.terrain}</h1></div>

                          <Link  to={`/planet/${planet.id}`}>
                            <div className=" pt-8"><Button variant="outlined" color="primary">Learn more</Button></div>
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

export default PlanetComponent