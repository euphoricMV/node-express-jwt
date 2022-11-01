const express = require('express')
const app = express()
const port = 3030

app.get('/jwt/token', (req, res) => {
  res.json({ token: 'some_jwt_token' })
  // res.sendStatus(404)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
