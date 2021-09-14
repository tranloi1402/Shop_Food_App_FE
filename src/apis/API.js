import axios from 'axios';

const URL = 'https://shopfood-app-loi.herokuapp.com';

// Category-API
export const getAllcategory = () => axios.get(`${URL}/category`);

export const creatCatePost = async (payload) => {
    await axios.post(`${URL}/createCate`, payload, {withCredentials: true});
};

export const editByID = (payload) => axios.get(`${URL}/edit/${payload}`);
export const postUpdateCate = async (payload) => {
    await axios.post(`${URL}/updateCategory`, payload);
};

export const postDeleteCateById = async (payload) => {
    await axios.post(`${URL}/deleteCategory/${payload}`);
};

// Product-API
export const getAllProduct = () => axios.get(`${URL}/product`);
export const getSreach = (payload) => axios.get(`${URL}/product/search?keyword=${payload}`);

export const postCreateProduct = async (payload) => {
    await axios.post(`${URL}/createProduct`, payload, {withCredentials: true});
};

export const postEditProduct = (payload) => axios.get(`${URL}/editProduct/${payload}`);
export const postUpdateProduct = async (payload) => {
    await axios.post(`${URL}/updateProduct`, payload);
};

export const postDeleteProduct = async (payload) => {
    await axios.post(`${URL}/deleteProduct/${payload}`);
};

// Evaluate-Api
export const getAllEvaluate = (payload) => axios.get(`${URL}/evaluate/${payload}`);
export const postCreateEvaluate = (payload) => axios.post(`${URL}/create/evaluate`, payload);

// Orders-API
export const getAllOrder = () => axios.get(`${URL}/order`);

export const postCreateOrder = async (payload) => {
    await axios.post(`${URL}/createOrder`, payload, {withCredentials: true});
};

export const editOrder = (payload) => axios.get(`${URL}/findOrder/${payload}`);

export const postUpdateOrder = async (payload) => {
    await axios.post(`${URL}/updateOrder`, payload);
};

// Admin Login - API
export const adminLogin = async (payload) => {
    const response = await axios.post(`${URL}/adminLogin`, payload);
    // console.log('data Api:', response);
    return response;
};
