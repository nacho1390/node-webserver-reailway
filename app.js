
require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT



// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parcials' )

// Servir contenido publico
app.use( express.static( 'public' ) )

app.get( '/', ( req, res ) => {
    res.render('home', {
        nombre: 'Nacho Lopez',
        titulo: 'Curso de Node',
        titulo_principal: 'Viaje a Barcelona, España'
    })
})

app.get( '/generic', ( req, res ) => {
    res.render('generic', {
        data_generic: 'Esto es data del generic'
    })
})

app.get( '/elements', ( req, res ) => {
    res.render( 'elements', {
        data_elements: 'Esto es data del element'
    } )
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${ port }`)
})