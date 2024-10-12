export const loadItems = async (URL) => {
  try {
    const response = await fetch(URL);
    const items = await response.json();
    return items;
  } catch (error) {
    console.log(error);
  }

  return [];
};
