const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const trashTalkGenerator = require('./trashTalk_generator')
const app = express()
const port = 3000


// setting template enging
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// 設定網頁路由
// localhost:3000
app.get('/', (req, res) => {
  res.render('index')
})


app.post('/', (req, res) => {
  const people = req.body
  console.log('people', people)
  trashTalk = trashTalkGenerator(people)
  res.render('index', { trashTalk, people })
})




// 設定網站port號
app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})


