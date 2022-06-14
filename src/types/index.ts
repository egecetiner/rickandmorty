export type EpisodeItemType = {
    air_date: string,
    characters: [],
    episode: string,
    id: number,
    name: string,
    url: string
}

export type CharacterItemType = {
    image: string,
    location: {name: string},
    gender: string,
    id: number,
    name: string,
    status: string,
    url: string,
    species: string
}