import { responsiveArray } from "antd/es/_util/responsiveObserver";

export const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    if(!response.ok)
        throw new Error(`getCharacters response error: ${response.status}`)

    const data = await response.json();
    return data;
};

export const getFiltredCharacters = async (queryParams) => {
    const params = new URLSearchParams(queryParams);

    const url = `https://rickandmortyapi.com/api/character?${params.toString()}`;


    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`getFiltredCharacters response error: ${response.status}`)
    }

    const data = await response.json();
    return data;
};

export const getCharacterById = async ( id ) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

    if(!response.ok)
        throw new Error(`getCharacterById response error: ${response.status}`);

    const data = await response.json();
    return data;
}

export const getEpisodes = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/episode`);

    if(!response.ok)
        throw new Error(`getEpisodes response error: ${response.status}`)

    const data = await response.json();
    return data;
}

export const getFiltredEpisodes = async (queryParams) => {
    const params = new URLSearchParams(queryParams);
    const pattern = /^S\d/

    if(pattern.test(params.get("name"))) {
        params.append("episode", params.get("name"));
        params.delete("name");
    }

    const response = await fetch(`https://rickandmortyapi.com/api/episode?${params.toString()}`);

    if(!response.ok)
        throw new Error(`getFiltredEpisodes response error: ${response.status}`)

    const data = await response.json();
    return data;
}

export const getEpisodeById = async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);

    if(!response.ok)
        throw new Error(`getEpisodeById response error: ${response.status}`)

    const data = await response.json();
    return data;
}

export const getLocations = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/location")

    if(!response.ok)
        throw new Error(`getLocations response error: ${response.status}`)

    const data = await response.json()
    return data;
}

export const getFiltredLocations = async (queryParams) => {
    const params = new URLSearchParams(queryParams);

    const response = await fetch(`https://rickandmortyapi.com/api/location?${params.toString()}`);

    if(!response.ok)
        throw new Error(`getFiltredLocations response error: ${response.status}`);
    
    const data = await response.json();
    return data;
}


export const getEndOfUrl = (url) => {
    const pattern = /\/(\d+)$/;
    const match = url.match(pattern);
    return match? match[1] : null;
}