
export const getCharacters = async (page) => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    return res.json();
  } catch (e) {
    console.error(e);
    throw e
  }
};
