export type Picture = {
    title: string;
    thumbnail: [
        lqip: string,
        width: number,
        height:number,
        alt_text: string,
    ]
    is_boosted:boolean;
    id:number;
}