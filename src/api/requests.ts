import axios from "axios";

export const fetchEpisodes = async () => {
    const page1 = await axios.get('https://rickandmortyapi.com/api/episode');
    const page2 = await axios.get('https://rickandmortyapi.com/api/episode?page=2');
    const page3 = await axios.get('https://rickandmortyapi.com/api/episode?page=3');
    return [...page1.data.results, ...page2.data.results, ...page3.data.results]
}

export const fetchEpisode = async (episodeUrl: string) => {
    return await axios.get(episodeUrl);
}

export const fetchCharacter = async (characterUrl: string) => {
    return await axios.get(characterUrl);
}