import axiosClient from "../utils/axiosClient";

export async function searchMeals({ commit }: any, searchTerm: any) {
  try {
    const response = await axiosClient.get(`search.php?s=${searchTerm}`);
    console.log({ response });
    commit("setSearchMeals", response.data.meals);
  } catch (error) {
    // Handle the error here if necessary
    console.error("Error fetching meals:", error);
  }
}
