

export const LOGIN = 'LOGIN';
export const login = (username, password) => {
    return async (dispatch,getState) => {
      try {
      const response = await fetch(
        'http://34.245.213.76:3000/auth/signin',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username,
            password: password,
          })
        }
      );
  
      if (!response.ok) {

        const errorResData = await response.json();
        const errorId = errorResData.error.message;
        let message = 'Wrong username or password!';
        throw new Error(message);
      }
      

       const resData = await response.json();
      //  console.log(getState());
      // console.log(resData);
      dispatch({ type: LOGIN,token:resData.accessToken});

  } catch (err) {
    throw err;
  }
  };
};