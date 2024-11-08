import { v4 as uuidv4 } from 'uuid';


const jsonServer = require('json-server');
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()


server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.id = uuidv4();
  }
  next();
});

server.use(middlewares)
server.use(router)
server.listen(5000, () => {
  console.log('JSON Server is running')
})