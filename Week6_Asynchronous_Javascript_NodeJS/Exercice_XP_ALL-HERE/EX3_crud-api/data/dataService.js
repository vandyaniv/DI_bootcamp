import axios from 'axios';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    console.log('data recieve : ', response.data);
    // console.table(response.data);

    const FilterDatashow = response.data.map((post) => ({
      id: post.id,
      title: post.title,
    }));

    console.table(FilterDatashow);
  } catch (error) {
    console.log(' error from the fecth function sending request', error);
  }
};

fetchPosts();

// node dataService.js
