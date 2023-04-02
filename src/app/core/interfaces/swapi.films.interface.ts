export interface FilmsList {
    count:    number;
    next:     null;
    previous: null;
    results:  Film[];
}

export interface Film {
    id:            number;     
    title:         string;
    filmUrl:       string;
    episode_id:    number;
    opening_crawl: string;
    director:      string;
    producer:      string;
    release_date:  Date;
    characters:    string[];
    planets:       string[];
    starships:     string[];
    vehicles:      string[];
    species:       string[];
    created:       Date;
    edited:        Date;
    url:           string;
}