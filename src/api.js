const API_KEY = "6b57f90bf9ef500b6e895452ea13fa05";

const categories = [
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&laguage=pt-BR`,
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&laguage=pt-BR`,
    },
    {
        name: "comedy",
        title: "Comédia",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    },
    {
        name: "romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    },
    {
        name: "documentaries",
        title: "Documentarios",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    },
    
];

    export const getMovies = async (path) =>{
    try{
    let url =`https://api.themoviedb.org/3/${path}`;
    const response = await fetch(url);
    return await response.json();
    } catch (error){
        console.log("error getMovies: ", error);
    }
}