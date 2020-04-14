import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../api/api';
import { setCurrentPage, setTotalUsersCount, setUsers, toggleFollow, toggleIsFetching, toggleFollowingInProgress } from '../../Redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';

class UsersContainer extends React.Component {

    componentDidMount () {
      this.props.toggleIsFetching(true);
        getUsers(this.props.users.currentPage, this.props.users.pageSize).then(data => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(data.items);
          this.props.setTotalUsersCount(data.totalCount);
        });
    }
  
    onPageChanged = (p) => {
      this.props.toggleIsFetching(true);
      this.props.setCurrentPage(p);
        getUsers(p, this.props.users.pageSize).then(data => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(data.items);
        });
    }
  
    render () {
      return (
      <>
      {this.props.users.isFetching ? <Preloader /> : null}
      <Users 
        onPageChanged={this.onPageChanged}
        totalUsersCount={this.props.users.totalUsersCount}
        pageSize={this.props.users.pageSize}
        users={this.props.users.users}
        currentPage={this.props.users.currentPage}
        toggleFollow={this.props.toggleFollow}
        followingInProgress={this.props.users.followingInProgress}
        toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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

export default connect(
  mapStateToProps, 
  { toggleFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress }
)(UsersContainer);