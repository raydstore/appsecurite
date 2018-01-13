
export interface Activity {
    id?: number;
    name?: string;
    owner?: string;
    lastuser?: string;
    datecreate?: Date;
    dateupdate?: Date;
}

export interface Mark {
    id?: number;
    name?: string;
    owner?: string;
    lastuser?: string;
    datecreate?: Date;
    dateupdate?: Date;
}

export interface Label {
    id?: number;
    name?: string;
    owner?: string;
    lastuser?: string;
    datecreate?: Date;
    dateupdate?: Date;
}

export interface TypeObject {
    id?: number;
    name?: string;
    owner?: string;
    lastuser?: string;
    datecreate?: Date;
    dateupdate?: Date;
}

export interface TypeOperation {
    id?: number;
    name?: string;
    owner?: string;
    lastuser?: string;
    datecreate?: Date;
    dateupdate?: Date;
}

export interface UnitMeasure {
    id?: number;
    name?: string;
    owner?: string;
    lastuser?: string;
    datecreate?: Date;
    dateupdate?: Date;
}


export interface Site {
    id?: number;
    name?: string;
    idlabel?: any;
    idparent?: Site;
    owner?: string;
    lastuser?: string;
    datecreate?: Date;
    dateupdate?: Date;
}


export interface Titletask {
    id?: number;
    name?: string;
    kind?: string;
    idparent?: number;
    kindparent?: string;
    owner?: string;
    lastuser?: string;
    datecreate?: Date;
    dateupdate?: Date;
}

export interface Object {
    id?: number;
    name?: string;
    owner?: string;
    lastuser?: string;
    datecreate?: Date;
    dateupdate?: Date;
}

export interface Property {
    propertyPK?: any;
    type?: string;
    name?: string;
    idunitmeasure?: any;
    object1?: any;
    owner?: string;
    lastuser?: string;
    datecreate?: Date;
    dateupdate?: Date;
}

export interface Instance {
    id?: number;
    idobject?: any;
    idsite?: any;
    idmark?: any;
    owner?: string;
    lastuser?: string;
    datecreate?: Date;
    dateupdate?: Date;
}

export interface Operation {
    id?: number;
    name?: string;
    idTypeOperation?: any;
    owner?: string;
    lastuser?: string;
    datecreate?: Date;
    dateupdate?: Date;
}

export interface Jobposting {
    id?: number;
    idAgent?: any;
    idSite?: any;
    datefirst?: Date;
    datelast?: Date;
    owner?: string;
    lastuser?: string;
    datecreate?: Date;
    dateupdate?: Date;
}

export interface Listagent {
    id?: number;
    agent?: any;
    jobposting?: any;
    owner?: string;
    lastuser?: string;
    datecreate?: Date;
    dateupdate?: Date;
}

export interface Caseagent {
    id?: number;
    idAgent?: any;
    case?: string;
    idJobposting?: any;
    datefirst?: Date;
    datelast?: Date;
    owner?: string;
    lastuser?: string;
    datecreate?: Date;
    dateupdate?: Date;
}
