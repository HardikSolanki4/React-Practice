export const addUsers = async (payloadBody) => {
  let url;
  if (payloadBody.signUp) {
    url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAPvHFV5FBKjiCLjRN5GRHOZ7dAjb83JZc';
  } else {
    url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPvHFV5FBKjiCLjRN5GRHOZ7dAjb83JZc';
  }
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(payloadBody.body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    // throw new Error(data.error.message || 'Fail to add User');
    const errorMsg = data.error.message;
    alert(errorMsg);
  }
  return data;
};
