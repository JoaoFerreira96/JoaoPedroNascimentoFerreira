import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Resource } from "../entities/Resource";

const resourceRepository = AppDataSource.getRepository(Resource);

export const createResource = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const newResource = resourceRepository.create({ name, description });
  await resourceRepository.save(newResource);
  res.status(201).json(newResource);
};

export const listResources = async (req: Request, res: Response) => {
  const { name } = req.query;
  let query = resourceRepository.createQueryBuilder('resource');

  if (name) {
    query = query.where('resource.name LIKE :name', { name: `%${name}%` });
  }

  const resources = await query.getMany();
  res.json(resources);
};

export const getResource = async (req: Request, res: Response) => {
  const { id } = req.params;
  const resource = await resourceRepository.findOne({ where: { id: parseInt(id) } });
  if (resource) {
    res.json(resource);
  } else {
    res.status(404).json({ message: 'Resource not found' });
  }
};

export const updateResource = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const resource = await resourceRepository.findOne({ where: { id: parseInt(id) } });

  if (resource) {
    resource.name = name;
    resource.description = description;
    await resourceRepository.save(resource);
    res.json(resource);
  } else {
    res.status(404).json({ message: 'Resource not found' });
  }
};

export const deleteResource = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await resourceRepository.delete(id);

  if (result.affected) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Resource not found' });
  }
};
