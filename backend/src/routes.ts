import { Router } from "express";
import multer from 'multer';

import uploadConfig from './config/config';
import OrphanagesCobtroller from './controller/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post("/orphanages", upload.array('images') , OrphanagesCobtroller.create);
routes.get("/orphanages", OrphanagesCobtroller.index);
routes.get("/orphanage/:id",  OrphanagesCobtroller.show);

 

export default routes;