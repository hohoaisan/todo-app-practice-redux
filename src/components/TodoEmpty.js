import React, { Component } from "react";
import image from "./undraw_nature_m5ll.svg";
class TodoEmpty extends Component {
  render() {
    return (
      <div className="TodoEmpty d-flex justify-content-center align-items-center flex-column p-4">
        <img className="Todo-EmptyImage" src={image} />
        <div className="Todo-EmptyText mt-2">
          Có vẻ bạn chưa có mục nào, hãy thêm mới
        </div>
      </div>
    );
  }
}
export default TodoEmpty;
