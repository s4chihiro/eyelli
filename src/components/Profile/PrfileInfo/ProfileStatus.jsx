import React from 'react';

class ProfileStatus extends React.Component {

  state = {
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
  }

  render() {
    return (
      <div>
        {
          !this.state.editMode &&
          <span onDoubleClick={ this.activatedEditMode }>{this.props.status ? this.props.status : 'non status'}</span>
        }
        {
          this.state.editMode && 
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivatedEditMode } value={this.state.status} />
          </div>
        }

      </div>
    )
  }
}


export default ProfileStatus;