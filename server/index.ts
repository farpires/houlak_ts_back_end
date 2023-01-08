import express,{Application} from 'express';
import CONFIG from '../config';


class Server {

    private app: Application;
    private port: string;
    
    constructor(){
        this.app = express();
        this.port = CONFIG.PORT || '5000';
    }
    
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto ', this.port);
        })
    }
}

export default Server;