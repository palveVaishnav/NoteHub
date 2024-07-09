import express from 'express';
import cors from 'cors';
import { upload } from './middleware/multer.middleware.js';
import {promises as fs } from 'fs'

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is up and running ...!");
});

app.get('/Feed', async (req,res)=>{
    try {
        const thePath = 'public/uploadedFiles'
        const folder = await fs.readdir(thePath);
        res.json(folder);
    } catch (error) {
        console.log(error);
        res.status(500).json({messagge : error.messagge })
    }
})

app.get('/Search', async(req,res)=>{
    try{
        const fileName = req.query.q;
        if(!fileName){
            return res.status(404).json({error : 'File name not entered or not proper'});
        }
        const thePath = 'public/uploadedFiles';
        const folder = await fs.readdir(thePath)
        const result = folder.filter( (file) => file.toLowerCase().includes(fileName.toLowerCase()) );
        res.status(200).json(result);
    }catch(err){
        console.log('Error in /Search route:');
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});


app.post('/Contribute', upload.single('file'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.status(200).send(true);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});



