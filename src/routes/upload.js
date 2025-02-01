import { Router } from 'express';
import { uploadImage } from '../controllers/upload.js';
import multer from 'multer';

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 50 * 1024 * 1024,
    },

});

export const uploadRouter = Router();

uploadRouter.post('/', upload.single('image'), uploadImage);