const tables = require('../data/tables')
const waitlistArray = require('../data/waitlistArray')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index')
  })

  app.get('/reserve', (req, res) => {
    res.render('components/reserve')
  })

  app.get('/reservations', (req, res) => {
    // res.render('components/reservations')
    res.render('components/reservations', { tables: tables, waitlistArray: waitlistArray })
  })

  app.post('/reservations', (req, res) => {
    if (tables.length < 5) {
      tables.push(req.body)
      res.sendStatus(200)
    } else {
      waitlistArray.push(req.body)
      res.sendStatus(200)
    }
  })
}