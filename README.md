# Express JWT app

## Install
```
npm i
```

## Run
```
node app.js
```
Go to http://localhost:3030/jwt/token

To get proper JWT token with json response:
* comment out `res.json({ token: 'some_jwt_token' })`
* comment `// res.sendStatus(404)`

To get 404 page response:
* comment  `// res.json({ token: 'some_jwt_token' })`
* comment out `res.sendStatus(404)`
