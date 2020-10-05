import express from 'express';
import cookieSession from 'cookie-session';
import { router } from './routes/loginRoutes';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['laskdjf'] }));
app.use(router);

app.listen(3000, () => {
  console.log('Listen to port: 3000');
});
