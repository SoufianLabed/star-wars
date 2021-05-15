import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import storm from '../../assets/storm.png';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import space from "../../assets/sw.jpg"




  


const PeopleComponent = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])
    
    const peoples = useSelector((state)=> state.allProducts.products);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
      };

    useEffect(() => {
        const results = peoples.filter(people =>
            people.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      }, [searchTerm]);

    return (  
    <div className="h-full min-h-screen" style={{backgroundImage:`url(${space})`}}>
              <div className="text-center h-full" >
              <div className="pt-10 font-bold text-center" >   <LazyLoadImage width={75} className="mt-3 mb-3"  effect="blur" src={storm} alt={"link.alt"} /> <h1 className="text-4xl text-white">Soldier</h1> </div>           
                <div className="pt-10"  >
                <input className="mb-8 bg-gray-200 appearance-none border-2 border-gray-200    rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" type="text" placeholder="Add people" value={searchTerm} onChange={handleChange}/>       
                    {searchTerm !== '' ? 
                    <div className="h-full">
                    { searchResults.map((people, i) => (
                            <div className="md:w-1/6 mb-10 md: ml-12 md: mr-12  md:inline-flex shadow-2xl rounded-2xl ">
                              <div className="h-80 w-80 bg-white rounded-3xl border-solid border-4 border-blue-900">
                                <div className="w-full  "><h1 className="mt-3 font-bold text-3xl">{people.name}</h1></div>
                                <div className="w-full  border-b-4 border-blue-900 text-xl mt-1  text-xl"><p className="text-2xl font-medium ">Gender</p><h1 className="ml-1/5 mx-16">{people.gender}</h1></div>
                                <div className="w-full border-b-4 border-blue-900 text-xl mt-1  text-xl"><p className="text-2xl font-medium">Hair Color</p><h1 className="ml-1/5 mx-16">{people.hair_color}</h1></div>
                                <div className="w-full  text-xl mt-1  text-xl"><p className="text-2xl font-medium">Eye Color</p><h1 className="ml-1/5 mx-16">{people.eye_color}</h1></div>
      
                                <Link  to={`/people/${people.id}`}>
                                  <div className=" pt-3"><Button variant="outlined" color="primary">Learn more</Button></div>
                              </Link>
                              </div>
                            </div>
                    ) 
                    )}
                    </div>
                    :
                    <div className="">
                    { peoples.map((people) => (
                          <div className="md:w-1/6 mb-10 md: ml-12 md: mr-12  md:inline-flex shadow-2xl rounded-2xl ">
                            <div className="h-80 w-80 bg-white rounded-3xl border-solid border-4 border-blue-900">
                                <div className="w-full "><h1 className="mt-3 font-bold text-3xl">{people.name}</h1></div>
                                <div className="w-full  mt-1 border-b-4 border-blue-900 text-xl"><p className="text-2xl font-medium ">Gender</p><h1 className="ml-1/5 mx-16">{people.gender}</h1></div>
                                <div className="w-full mt-1  border-b-4 border-blue-900 text-xl"><p className="text-2xl font-medium">Hair Color</p><h1 className="ml-1/5 mx-16">{people.hair_color}</h1></div>
                                <div className="w-full mt-1  text-xl"><p className="text-2xl font-medium">Eye Color</p><h1 className="ml-1/5 mx-16">{people.eye_color}</h1></div>
      
                                <Link  to={`/people/${people.id}`}>
                                  <div className=" pt-3 " ><Button variant="outlined" color="primary">Learn more</Button></div>
                                </Link>
                            </div>
                          </div>
                    ))}
                  </div>
                    }
                </div>
              </div> 
      </div>
    )
}

export default PeopleComponent