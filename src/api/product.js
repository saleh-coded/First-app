import instance from ".";

const getAllProducts = async () => {
  try {
    const { data } = await instance.get("/mini-project/api/items");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async (id) => {
  try {
    const { data } = await instance.get(`/mini-project/api/items/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (categoryID, productInfo) => {
  try {
    const formData = new FormData();
    for (key in productInfo) {
      if (key != "image") formData.append(key, productInfo[key]);
    }

    formData.append("image", {
      name: "image.jpg",
      type: "image/jpeg",
      uri: productInfo.image,
    });

    const { data } = await instance.post(
      `/mini-project/api/items/${categoryID}`,
      formData
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllProducts, getProductById, createProduct };
