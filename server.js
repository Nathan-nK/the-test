const express = require( 'express' )
const app = express()
const port = 8080
const request = require('request')
const path = require( 'path' )


app.use( express.static( path.join( __dirname, 'dist' ) ) )
app.use( express.static( path.join( __dirname, 'node_modules' ) ) )
app.listen( port, () => console.log( `Example app listening on port ${ port }!` ) )

app.get('/recipes/:ingredient', function (req, res) {
    let ingredient = req.params.ingredient
    request.get(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (error, response){
            console.log(response)
    })
})

















// app.get('/teams/:teamName', function (req, res){
//     let teamName = req.params.teamName
//     request.get('http://data.nba.net/10s/prod/v1/2018/players.json', function (error, response){
//         let main = JSON.parse(response.body).league.standard
//         let teamFilter  = main.filter(u => u.teamId == teamToIDs[teamName] && u.isActive )
//         let teamSame = teamFilter.map( u =>{return {firstName: u.firstName, lastName: u.lastName, jersey: u.jersey, pos: u.pos} 
                      
//                             })
//                  res.send(teamSame)           
//     })
    
// })

