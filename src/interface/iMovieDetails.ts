export interface IDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: number;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IprodutionCompany[];
  production_countries: IProductionCountry[];
  release_date: number;
  revenue: number;
  runtime: number;
  spoken_languages: IspokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}




export interface IGenre {
  id: number;
  name: string;
}

export interface IprodutionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface IspokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
