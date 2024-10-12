export const loadItems = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_ITEMS_URL);
    const items = await response.json();
    return items;
  } catch (error) {
    console.log(error);
  }

  return [];
};
