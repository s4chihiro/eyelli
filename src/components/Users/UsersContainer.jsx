import React from 'react';
import { connect } from 'react-redux';
import { toggleFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../Redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount () {
      this.props.toggleIsFetching(true);
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.users.currentPage}&count=${this.props.users.pageSize}`)
        .then(response => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
  
    onPageChanged = (p) => {
      this.props.toggleIsFetching(true);
      this.props.setCurrentPage(p);
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.users.pageSize}`)
        .then(response => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items);
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
        isFetching: state.isFetching
    }
};

export default connect(
  mapStateToProps, 
  { toggleFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching }
)(UsersContainer);