// import axios from 'axios';
// axios.defaults.baseURL = 'https://pixabay.com/api';

// const API_KEY = '28697778-547ab5ce287b3a320fe50e9de';

// export class Api {
//   #query;

//   constructor() {
//     this.page = 1;
//     this.per_page = 12;
//   }

//   set query(newQuery) {
//     this.page = 1;
//     this.#query = newQuery;
//   }

//   get query() {
//     return this.#query;
//   }

//   async fetch() {
//     const response = await axios.get(`/?key=${API_KEY}`, {
//       params: {
//         q: this.#query,
//         page: this.page,
//         per_page: this.per_page,
//         image_type: 'foto',
//         orientation: 'horizontal',
//       },
//     });
//     if (this.page > response.data.totalHits / this.per_page) {
//       response.data.isEnd = true;
//     }
//     this.page += 1;
//     return response.data;
//   }
// }
