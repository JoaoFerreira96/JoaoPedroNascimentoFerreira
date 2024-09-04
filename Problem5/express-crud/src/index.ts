import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './data-source';
import resourceRoutes from './routes/resourceRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', resourceRoutes);

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((error) => console.log('Database connection error:', error));
