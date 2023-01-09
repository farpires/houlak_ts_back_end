import { Router } from 'express';
import { postInformation } from '../controllers/information';

const router = Router();
router.post('/',postInformation)

export default router;