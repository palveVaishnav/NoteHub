import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

// Use the URL to file path conversion
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../public/uploadedFiles'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '_' + Date.now());
    }
});

export const upload = multer({ storage: storage });
