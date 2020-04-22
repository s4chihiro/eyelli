import React, { useState } from 'react';
import { useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {


  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

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