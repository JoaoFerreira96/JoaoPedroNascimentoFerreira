"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteResource = exports.updateResource = exports.getResource = exports.listResources = exports.createResource = void 0;
const data_source_1 = require("../data-source");
const Resource_1 = require("../entities/Resource");
const resourceRepository = data_source_1.AppDataSource.getRepository(Resource_1.Resource);
const createResource = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    const newResource = resourceRepository.create({ name, description });
    yield resourceRepository.save(newResource);
    res.status(201).json(newResource);
});
exports.createResource = createResource;
const listResources = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.query;
    let query = resourceRepository.createQueryBuilder('resource');
    if (name) {
        query = query.where('resource.name LIKE :name', { name: `%${name}%` });
    }
    const resources = yield query.getMany();
    res.json(resources);
});
exports.listResources = listResources;
const getResource = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const resource = yield resourceRepository.findOne({ where: { id: parseInt(id) } });
    if (resource) {
        res.json(resource);
    }
    else {
        res.status(404).json({ message: 'Resource not found' });
    }
});
exports.getResource = getResource;
const updateResource = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, description } = req.body;
    const resource = yield resourceRepository.findOne({ where: { id: parseInt(id) } });
    if (resource) {
        resource.name = name;
        resource.description = description;
        yield resourceRepository.save(resource);
        res.json(resource);
    }
    else {
        res.status(404).json({ message: 'Resource not found' });
    }
});
exports.updateResource = updateResource;
const deleteResource = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield resourceRepository.delete(id);
    if (result.affected) {
        res.status(204).send();
    }
    else {
        res.status(404).json({ message: 'Resource not found' });
    }
});
exports.deleteResource = deleteResource;
