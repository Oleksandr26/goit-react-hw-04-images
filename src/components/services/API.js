const API_KEY = '28697778-547ab5ce287b3a320fe50e9de';

export const ImgAPI = {
  searchImg: async (query, page = 1) => {
    const imgUrl = await fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    if (!imgUrl.ok) {
      throw new Error(imgUrl.status);
    }
    const imgJson = await imgUrl.json();
    console.log('imgJson: ', imgJson);
    return imgJson;
  },
};
