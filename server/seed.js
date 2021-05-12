const knex = require('knex')
const axios = require('axios')
const dotenv = require("dotenv").config({path:__dirname+'./env'})



const database = knex({
    client:'pg',
    connection : {
        host: "127.0.0.1",
        user: "postgres",
        password: "cabella13",
        database: "manga"
    },
    });
      

        database.schema.hasTable('people').then(function(exists){
            if(!exists){
               return database.schema.createTable('people', function (table) {
        
                    table.increments('id').primary();
                    table.string('name');
                    table.string('height');
                    table.string('mass');
                    table.string('hair_color');
                    table.string('skin_color');
                    table.string('eye_color');

                    table.string('birth_year');
                    table.string('gender');
                    table.string('homeworld');
                    table.string('films');
                    table.string('species');
                    table.string('vehicles');
                    table.string('starships');  
              }).then(
                console.log("table people ok")
              )
            }
        })




        database.schema.hasTable('planets').then(function(exists){
          if(!exists){
             return database.schema.createTable('planets', function (table) {
      
                  table.increments('id').primary();
                  table.string('name');
                  table.string('rotation_period');
                  table.string('orbital_period');
                  table.string('diameter');
                  table.string('climate');
                  table.string('gravity');
                  table.string('terrain');
                  table.string('surface_water');
                  table.string('population');
                  table.string('residents');
                  table.string('films');

          
            }).then(
              console.log("table ok")
            )
          }
      })








        // INSERTION DES PERSOS
        let y = 0;

        while (y<85){
          

          axios.get(`https://swapi.dev/api/people/${y}`).then((people)=>{

            console.log(people)
            
            database.insert({
      
              name : people.data.name,
              height : people.data.height,
              mass: people.data.mass,
              hair_color: people.data.hair_color,
              skin_color: people.data.skin_color,
              eye_color: people.data.eye_color,
              birth_year: people.data.birth_year,
              gender: people.data.gender,
              homeworld: people.data.homeworld,
              films: people.data.films,
              species: people.data.species,
              vehicles: people.data.vehicles,
              starships: people.data.starships,

        })
        .into('people')
        .then(function (id) {
            // use id here
        });
        }).catch(console.error)
            y++;

          }



          // INSERTION DES PLANETES 


          let i = 0;

        while (i<60){
          

          axios.get(`https://swapi.dev/api/planets/${i}`).then((people)=>{

            console.log(people)
            
            database.insert({
    

              name : people.data.name,
              rotation_period : people.data.rotation_period,
              orbital_period : people.data.orbital_period,
              diameter : people.data.diameter,
              climate : people.data.climate,
              gravity : people.data.gravity,
              terrain : people.data.terrain,
              surface_water : people.data.surface_water,
              population : people.data.population,
              residents : people.data.residents,
              films : people.data.films

        })
        .into('planets')
        .then(function (id) {
            // use id here
        });
        }).catch(console.error)
            i++;

          }