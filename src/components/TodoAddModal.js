import React, { Component } from "react";

class TodoAddModal extends Component {
  constructor(props) {
    super(props);
    this.newTodoInputRef = React.createRef();
  }
  componentDidMount() {
    this.newTodoInputRef.current.focus();
  }
  render() {
    let { onSubmit, onChange, value } = this.props;
    return (
      <div className="Todo-Add-Modal pt-2 pb-2">
        <div className="container">
          <div className="input-group input-group-lg mb-3 Todo-Add-Input">
            <input
              ref={this.newTodoInputRef}
              className="form-control"
              type="text"
              placeholder="What do you want to do?"
              value={value}
              onChange={onChange}
              onKeyUp={(event) => {
                if (event.keyCode === 13) {
                  onSubmit();
                }
              }}
            />
            <div className="input-group-append">
              <button
                onClick={onSubmit}
                className="btn btn-success Todo-Add-Button"
                type="button"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoAddModal;
