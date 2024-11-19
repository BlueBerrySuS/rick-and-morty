export const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    if(!response.ok)
        return "No data"

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
    console.log(`Generated URL: ${url}`);

    const response = await fetch(url);

    if (!response.ok) {
        console.error("Failed to fetch data");
        return "No data";
    }

    const data = await response.json();
    return data;
};