import express from 'express';
const router = express.Router();
import * as homeCtrl from '../controllers/home.js';

router.get('/', homeCtrl.index);

export default router;