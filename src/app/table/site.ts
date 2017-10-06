import { InfoSite } from './infoSite';


export class Site {
    id?: number;
    name?: string;
    idlabel?: any;
    idparent?: Site;
    owner?: string;
    lastuser?: string;
    datecreate?: Date;
    dateupdate?: Date;
}
 /*   id?: number;
    idparent?: number;
    idlabel?: number;
    name?: string;
    infoSite: InfoSite;
    children: Site[];
}*/