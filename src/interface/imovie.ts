export interface IMovie{
    adult:boolean
    backdrop_path:string
    genre_ids:number[]
    id:number
    origin_language:string
    origin_title:string
    overview:string
    popularity:number
    poster_path:string
    realease_date:number
    title:string
    video:boolean
    vote_average:number
    vote_count:number
}

export interface IData{
    page:number,
    results:IMovie[]
    total_page:number
    total_results:number
}


      


