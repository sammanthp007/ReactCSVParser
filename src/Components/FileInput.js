import React from 'react';

class FileInput extends React.Component {
  // MARK: - Lifecycle Methods

  constructor(props) {
    super(props);

    this.fileinputRef = React.createRef();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload File:
        </label>
        <br />
        <input type="file" ref={this.fileinputRef} />
        <br />
        <button type="submit">Submit</button>
      </form>
    )
  }

  // MARK: - Private Methods

  handleSubmit = (e) => {
    e.preventDefault()

    alert(
      "Submitted file:" + this.fileinputRef.current.files[0].name
    )
  }
}

export default FileInput