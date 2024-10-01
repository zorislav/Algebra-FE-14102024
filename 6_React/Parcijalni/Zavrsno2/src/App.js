import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { UserForm, GithubUser, GithubRepos } from './components';
import { fetchUser, fetchUserRepos, removeUser } from './redux';
import './App.css';

class App extends React.Component {
  setUser = userName => {
    const { getUser, getUserRepos } = this.props;

    Promise.all([getUser(userName), getUserRepos(userName)]).catch(error =>
      alert(error),
    );
  };

  handleResetUser = () => {
    const { resetUser } = this.props;
    resetUser();
  };

  render() {
    const { user, repos } = this.props;

    if (!user) {
      return (
        <div className="app">
          <UserForm setUser={this.setUser} />
        </div>
      );
    }

    return (
      <div className="app">
        <GithubUser user={user} />
        <GithubRepos repos={repos} />
        <Button
          variant="secondary"
          onClick={this.handleResetUser}
          type="submit"
          size="lg"
          block
          className="mt-5"
        >
          Reset
        </Button>
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  repos: PropTypes.array,
  getUser: PropTypes.func,
  getUserRepos: PropTypes.func,
  resetUser: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    user: state.user,
    repos: state.repos,
  };
}

const mapDispatchToProps = {
  getUser: fetchUser,
  getUserRepos: fetchUserRepos,
  resetUser: removeUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
