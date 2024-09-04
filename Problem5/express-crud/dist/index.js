"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./data-source");
const resourceRoutes_1 = __importDefault(require("./routes/resourceRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/api', resourceRoutes_1.default);
data_source_1.AppDataSource.initialize()
    .then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
})
    .catch((error) => console.log('Database connection error:', error));
