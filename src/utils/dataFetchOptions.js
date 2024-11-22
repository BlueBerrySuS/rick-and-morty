export const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    if(!response.ok)
        throw new Error(`getCharacters response error: ${response.status}`)

    const data = await response.json();
    return data;
};

export const getFiltredCharacters = async (page, gender, species, status, name) => {
    const params = new URLSearchParams();

    if (page) params.append("page", page);
    if (gender && gender !== "Gender") params.append("gender", gender);
    if (species && species !== "Species") params.append("species", species);
    if (status && status !== "Status") params.append("status", status);
    if (name) params.append("name", name);

    const url = `https://rickandmortyapi.com/api/character?${params.toString()}`;


    const response = await fetch(url);

    if (!response.ok) {
        console.error("Failed to fetch data");
        throw new Error(`getCharacters response error: ${response.status}`)
    }

    const data = await response.json();
    return data;
};

export const getEpisodes = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/episode`);

    if(!response.ok)
        throw new Error(`getEpisodes response error: ${response.status}`)

    const data = await response.json();
    return data;
}

export const getFiltredEpisodes = async (page,name) => {
    const params = new URLSearchParams();
    const pattern = /^S\d/

    params.append("page", page);

    if(pattern.test(name))
        params.append("episode", name);
    else
        params.append("name", name);

    const response = await fetch(`https://rickandmortyapi.com/api/episode?${params.toString()}`);

    if(!response.ok)
        throw new Error(`getFiltredEpisodes response error: ${response.status}`)

    const data = await response.json();
    return data;
}