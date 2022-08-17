const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')

app.get('/', (req, res) =>{

    let title = 'Our Home Page';
    res.render('pages/index',{'tite':title})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
