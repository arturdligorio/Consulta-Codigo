export interface Timeline_node{
    title:string;
    item:Timeline_item[];
}

export interface Timeline_item{
    id:number;
    time:string;
    title:string;
    body:string;
    classIcon:string;
}