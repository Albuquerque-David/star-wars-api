const axios = require('axios');
const express = require('express');
const DatabaseConfig = require('../config/DatabaseConfig');
const routes = require('../routes');
const cors = require('cors');

async function startServer() {
    const app = express();
    
    DatabaseConfig.connect();
    
    app.use(express.json());
    
    app.use(routes);

    app.use(cors())
    
    app.listen(3333);
}

async function getPlanetsFromApi(page)
{
    const response = await axios.get('https://swapi.dev/api/planets/?page='+page)
    
    let data = response.data.results

    let planets = []

    data.map((result) => {
        planets.push(result)
    })

    return planets
}

async function seedPlanets()
{
    console.log("=================SEED START=================")

    await startServer()

    for(let i = 1; i <= 6 ; i ++)
    {
        let apiPlanets = await getPlanetsFromApi(i)
    
        for await (let planet of apiPlanets)
        {
            var { name, climate, terrain } = planet
            var planetData = { name, climate, terrain }
            await axios.post('http://localhost:3333/planet', planetData)
            console.log(`Inserted ${name}.`)
        }
    }

    console.log("=================SEED FINISH=================")
}

seedPlanets()


