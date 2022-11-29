import { Service } from "typedi";
import { PostgresSQLServices } from "./pg.loader";

@Service()
export class GlobalDataSourceProvidersLoader{

    constructor(private postgresSQLServices:PostgresSQLServices){}
    
    loader(){
        this.postgresSQLServices.init();
    }
}