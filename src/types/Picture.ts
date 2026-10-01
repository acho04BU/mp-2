export type Picture = {
    id:number;
    is_boosted:boolean;
    thumbnail:Thumbnail;
    title: string;
}

type Thumbnail = {
    alt_text: string;
    height: number;
    lqip: string;
    width: number;
}

export type FinishedPicture = {
    id: number;
    is_boosted:boolean;
    alt_text:string;
    height:number;
    lqip: string;
    width:number;
    title: string;
}