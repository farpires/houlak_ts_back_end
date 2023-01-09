import express,{Application} from 'express';
import CONFIG from '../config';
import artistRouter from '../routes/artist';
import informationRouter from '../routes/information';
import cors from 'cors';
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        artist:'/api/artist',
        info:'/api/information'
    }

    constructor(){
        this.app = express();
        this.port = CONFIG.PORT || '5000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('online database');
        } catch (error) {
            throw new Error('offline database');
        }
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.apiPaths.artist, artistRouter);
        this.app.use(this.apiPaths.info, informationRouter)
    }
    
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto ', this.port);
        })
    }
}

export default Server;