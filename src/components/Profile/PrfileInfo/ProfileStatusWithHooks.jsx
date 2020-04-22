import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {

  /*state = {
    editMode: false,
    status: this.props.status

  }

  activatedEditMode = () => {
    this.setState({
      editMode: true
    });
  }

  deactivatedEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.target.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }*/

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  let activatedEditMode = () => {
    setEditMode(true);
  }
  let deactivatedEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }
  let onStatusChange = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div>
      {
        !editMode &&
        <span onDoubleClick={activatedEditMode}>{props.status ? props.status : 'non status'}</span>
      }
      {
        editMode &&
        <div>
          <input  onChange={onStatusChange} autoFocus={true} onBlur={deactivatedEditMode} value={status}/>
        </div>
      }

    </div>
  )
}


export default ProfileStatusWithHooks;