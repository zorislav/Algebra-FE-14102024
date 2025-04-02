function resolveResponse(response) {
  if (response.status === 200) {
    return response.json();
  }

  if (response.status === 404) {
    throw new Error("No such user!");
  }

  throw new Error("Server error!");
}

function fetchUser(userName) {
  return fetch(`https://api.github.com/users/${userName}`).then((response) =>
    resolveResponse(response)
  );
}

function fetchUserRepos(userName) {
  return fetch(`https://api.github.com/users/${userName}/repos`).then((response) =>
    resolveResponse(response)
  );
}

const exportDefault = {
  fetchUser,
  fetchUserRepos,
};

export default exportDefault;
