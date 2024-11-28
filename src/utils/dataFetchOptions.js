import { instance } from "./instanseOptions";

export const getCharacters = async () => {
    try {
        const response = await instance.get("character");
        return response.data;
    } catch(error) {
        throw new Error(error.message);
    }
};

export const getFiltredCharacters = async ({...queryParams}) => {
    try {
        const response = await instance.get("character", {params: queryParams});
        return response.data;
    } catch(error) {
        console.error(error.message);
    }
};

export const getCharacterById = async ( id ) => {
    try {
        const response = await instance.get(`character/${id}`);
        return response.data;
    } catch(error) {
        console.error(error.message);
    }
}

export const getEpisodes = async () => {
    try {
        const response = await instance.get("episode");
        return response.data;
    } catch(error) {
        console.error(error.message);
    }
}

export const getFiltredEpisodes = async ({...queryParams}) => {
    try {
        const pattern = /^s\d/i;

        if(pattern.test(queryParams.name)) {
            queryParams["episode"] = queryParams.name;
            delete queryParams.name;
        }

        const response = await instance.get("episode", {params: queryParams});
        return response.data;
        
    } catch(error) {
        console.error(error.message);
    }
}

export const getEpisodeById = async (id) => {
    try {
        const response = await instance.get(`episode/${id}`);
        return response.data;
    } catch(error) {
        console.error(error.message);
    }
}

export const getLocations = async () => {
    try {
        const response = await instance.get("location");
        return response.data;
    } catch(error) {
        console.error(error.message);
    }
}

export const getFiltredLocations = async ({...queryParams}) => {
    try {
        const response = await instance.get("location", {params: queryParams});
        return response.data;
    } catch(error) {
        console.error(error.message);
    }
}


export const getEndOfUrl = (url) => {
    const pattern = /\/(\d+)$/;
    const match = url.match(pattern);
    return match? match[1] : null;
}