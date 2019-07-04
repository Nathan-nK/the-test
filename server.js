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
        let main = JSON.parse(response.body).results
            res.send(main)
    })
})