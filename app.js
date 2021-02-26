const express = require('express')
const axios = require('axios');
var cors = require('cors')
const { response } = require('express');
const app = express()
const port = 3001

app.use(cors())

app.get('/', async (req, res) => {
  const url = 'https://api.wazirx.com/api/v2/tickers/dogeusdt';
  let data = ''

  await axios.get(url)
    .then(response => {
      data = response.data
      console.log(data)
    })
    .catch(error => {
      console.log(error);
    });
    return res.status(200).send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})