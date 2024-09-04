"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Resource_1 = require("./entities/Resource");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'sqlite',
    database: './db.sqlite',
    entities: [Resource_1.Resource],
    synchronize: true,
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
})
    .catch((err) => {
    console.error('Error during Data Source initialization:', err);
});
