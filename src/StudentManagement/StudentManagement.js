import React, { Component } from "react";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";

export default class StudentManagement extends Component {
  state = {
    students: [],
  };

  onAddStudent = (student) => {
    this.setState({
      students: [...this.state.students, student],
    });
  };
  onDeleteStudent = (id) => {
    // Xử lý logic xóa
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary display-3">
          Quản lý sinh viên
        </h1>
        <StudentForm
          onAddStudent={this.onAddStudent}
          onDeleteStudent={this.onDeleteStudent}
        />
        <StudentTable students={this.state.students} />
      </div>
    );
  }
}
