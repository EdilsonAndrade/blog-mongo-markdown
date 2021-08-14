async function get(path) {
  try {
    const response = await fetch(path);

    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function savePost(path, data) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
};
  try {
    const response = await fetch(path, requestOptions);

    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function deletePost(path) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
};
  try {
    const response = await fetch(path, requestOptions);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
export {
  get, 
  savePost,
  deletePost
};
