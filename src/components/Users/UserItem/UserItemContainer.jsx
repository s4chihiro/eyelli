import { connect } from "react-redux";
import { toggleFollowAC } from '../../../Redux/users-reducer';
import UserItem from "./UserItem";

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId));
        },
    }
};


const UserItemContainer = connect(mapStateToProps, mapDispatchToProps)(UserItem);

export default UserItemContainer;