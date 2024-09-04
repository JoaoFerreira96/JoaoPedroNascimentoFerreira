import { DataSource } from 'typeorm';
import { Resource } from './entities/Resource';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [Resource],
  synchronize: true, // Use migrations for schema changes
  logging: false,
});