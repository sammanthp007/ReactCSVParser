import React from 'react'

class FileInput extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.onClick} >
        {this.props.value}
      </button>
    )
  }
}

export default FileInput