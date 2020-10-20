import {Request, Response} from 'express';

import orpharnageView from '../views/orphanages_views';

import { getRepository } from "typeorm";
import Orphanage from '../models/Opharnage';

import * as Yup from 'yup';

export default {
  async show(request: Request, response: Response) {
    const {id} = request.body;

    const opharnagesRepository = getRepository(Orphanage);

    const orphanage = await opharnagesRepository.findOneOrFail(id, {
      relations: ['images']
    });

    return response.json(orpharnageView.render(orphanage));

  },

  async index(request: Request, response: Response) {
    const opharnagesRepository = getRepository(Orphanage);

    const orpharnages = await opharnagesRepository.find({
      relations: ['images']
    });

    return response.json(orpharnageView.renderMany(orpharnages));
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

    const orphanagesRepository = getRepository(Orphanage);

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

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekend: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      )
    });

    await schema.validate(data,{
      abortEarly: false,
    });

    const orpharnage = orphanagesRepository.create(data);

    await  orphanagesRepository.save(orpharnage);

    return response.status(201).json(orpharnage);
  }
}