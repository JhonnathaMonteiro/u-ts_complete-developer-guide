import express from 'express';
import { router } from './routes/loginRoutes';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(3000, () => {
  console.log('Listen to port: 3000');
});
