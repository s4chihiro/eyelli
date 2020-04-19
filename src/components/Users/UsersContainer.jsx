import React from 'react';
import { connect } from 'react-redux';
import { getUsers, onPageChanged, follow, unfollow } from '../../Redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';
import { compose } from 'redux';

class UsersContainer extends React.Component {

    componentDidMount () {  
      this.props.getUsers(this.props.users.currentPage, this.props.users.pageSize);
    }
  
    onPageChanged = (p) => {
      this.props.onPageChanged(p, this.props.users.pageSize);
    }
  
    render () {
      return (
      <>
      {this.props.users.isFetching ? <Preloader /> : null}
      <Users 
        totalUsersCount={this.props.users.totalUsersCount}
        pageSize={this.props.users.pageSize}
        users={this.props.users.users}
        currentPage={this.props.users.currentPage}
        followingInProgress={this.props.users.followingInProgress}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
      </>
      )
    }
  }

const mapStateToProps = (state) => {
    return {
        users: state.users,
        pageSize: state.pageSize,
        totalUsersCount: state.totalUsersCount,
        currentPage: state.currentPage,
        isFetching: state.isFetching,
        followingInProgress: state.followingInProgress
    }
};

export default compose(
  connect(
    mapStateToProps, 
    { getUsers, onPageChanged, follow, unfollow }
  )
)(UsersContainer);