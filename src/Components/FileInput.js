import React from 'react';
import Papa from 'papaparse'

class FileInput extends React.Component {
  // MARK: - Lifecycle Methods

  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
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

    const file = this.fileinputRef.current.files[0]
    // 1. Use a CSV file handler to take in the file
    Papa.parse(file, {
      complete: this.createModels
    });
  }

  createModels = (result) => {
    // 2. Create a model from the file and Display the model in json format on screen
    this.setState({
      data: result.data
    })

    alert(
      result.data[0]
    )
  }
}

export default FileInput