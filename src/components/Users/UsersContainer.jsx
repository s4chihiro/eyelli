import React from 'react';
import { connect } from 'react-redux';
import { getUsers, onPageChanged, follow, unfollow } from '../../Redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';
import { compose } from 'redux';
import { getIsAuth } from '../../Redux/isAuth-selector';

class UsersContainer extends React.Component {

    componentDidMount () {  
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
  
    onPageChanged = (page) => {
      this.props.onPageChanged(page, this.props.pageSize);
    }
  
    render () {
      return (
      <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        currentPage={this.props.currentPage}
        followingInProgress={this.props.followingInProgress}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        isAuth={this.props.isAuth}
      />
      </>
      )
    }
  }

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: getIsAuth(state)
    }
};


export default compose(
  connect(
    mapStateToProps, 
    { getUsers, onPageChanged, follow, unfollow }
  )
)(UsersContainer);