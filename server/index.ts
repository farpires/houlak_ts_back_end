import express,{Application} from 'express';
import CONFIG from '../config';
import artistRouter from '../routes/artist';
import informationRouter from '../routes/information';


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
        this.routes();
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