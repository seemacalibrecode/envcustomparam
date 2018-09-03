const express = require('express')
const app = express()
const PORT = process.env.PORT || '8000'

/**
 * @api {get} /hello/{name} Prints "Hello {name}"
 * @apiName HelloWorld
 * @apiParam (Url) {String} name the name to print
 * @apiHeader (Config) {String} [testparam] param testing value, will be sent in response
 * @apiHeader (Config) {String} [test-param] param testing value, will be sent in response
 * @apiSuccess {String} message the hello {name} message
 */
app.get('/hello/:name', (req, res) => {
  const requestId = req.headers['kinto-request-id']

  // test with json stringify
  console.log(
    JSON.stringify({
      kinto_request_id: requestId,
      loggedLabel: 'Test Value',
      loggedValue: 'Test Value'
    })
  )
  res.send({
    message: `Hello requestId value: ${requestId}`,
    testEnv: process.env.TEST_ENV,
    'test-param': req.headers['test-param'],
    testparam: req.headers.testparam
  })
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
