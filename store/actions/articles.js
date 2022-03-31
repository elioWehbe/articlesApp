export const SET_ARTICLES = 'SET_ARTICLES';
export const fetchArticles = () => {
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhbmRpZGF0ZSIsImlhdCI6MTY0ODcwODUzMSwiZXhwIjoxNjQ4NzQ0NTMxfQ.alWY5tzOYZD77UZwBBx3IRT0-fQJhjtkQztQZQUEGlQ';
    return async (dispatch,getState) => {
      console.log(getState());
        try {
        const response = await fetch(
            `http://34.245.213.76:3000/articles.json`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            }
          );
         
          const resData = await response.json();   
          console.log(resData);              
          dispatch({
            type:SET_ARTICLES,articles:[]});
          } catch (err) {
            throw err;
          }
        };
    };
    
                 
