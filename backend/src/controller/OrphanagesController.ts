import {Request, Response} from 'express';

import { getRepository } from "typeorm";
import Opharnage from '../models/Opharnage';

export default {
  async show(request: Request, response: Response) {
    const {id} = request.body;

    const opharnagesRepository = getRepository(Opharnage);

    const orpharnage = await opharnagesRepository.findOneOrFail(id);

    return response.json(orpharnage);

  },

  async index(request: Request, response: Response) {
    const opharnagesRepository = getRepository(Opharnage);

    const orpharnages = await opharnagesRepository.find();

    return response.json(orpharnages);
  },


  async create(request: Request, response: Response) {
    
    
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekend,
    } = request.body;

    const opharnagesRepository = getRepository(Opharnage);

    const requestImages = request.files as Express.Multer.File[] ;
    const images = requestImages.map(image => {
      return {path: image.filename}
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekend,
      images
    };

    const orpharnage = opharnagesRepository.create(data);

    await  opharnagesRepository.save(orpharnage);
    return response.status(201).json(orpharnage);
  }
}