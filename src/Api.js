import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID itBr0Nrm_DDOIuzbpoCsdgPaaWI4_ViuC4YXMU5IRXM",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
