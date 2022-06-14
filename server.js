// import modules

import express from 'express'
import { roommates } from './data/roommate-data.js'

// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)



// Mount routes

app.get('/hello', function(req, res) {
    res.send('<h1>hello, friend</h1>')
})

app.get('/home', function(req, res) {
    res.render('home')
})

app.get('/roommates', function(req, res) {
  res.render('roommates/index', {
    roommates: roommates
  })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})