import {Router} from 'express';
import { getArtist } from '../controllers/artist';

const router = Router();

router.get('/:name',getArtist)

export default router;