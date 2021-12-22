import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { auth } from 'express-openid-connect';
import auth0Router from './routes/index.js'

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

const app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(auth(config));

app.use('/', auth0Router)

app.listen(3000, ()=>{
    console.log('Server ok en puerto 3000')
});