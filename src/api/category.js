import instance from ".";

const getAllCategories = async () => {
  try {
    const response = await instance.get("/mini-project/api/categories/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllCategories };
