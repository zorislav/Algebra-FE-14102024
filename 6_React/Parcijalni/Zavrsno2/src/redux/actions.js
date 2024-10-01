import { GithubApi } from '../services';

export const USER_FETCHED = 'USER_FETCHED';
export const REPOS_FETCHED = 'REPOS_FETCHED';
export const REMOVE_USER = 'REMOVE_USER';

export function fetchUser(userName) {
  return dispatch =>
    GithubApi.fetchUser(userName).then(user =>
      dispatch({
        type: USER_FETCHED,
        payload: user,
      }),
    );
}

export function fetchUserRepos(userName) {
  return dispatch =>
    GithubApi.fetchUserRepos(userName).then(repos =>
      dispatch({
        type: REPOS_FETCHED,
        payload: repos,
      }),
    );
}

export function removeUser() {
  return { type: REMOVE_USER };
}
