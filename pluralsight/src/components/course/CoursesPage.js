import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      course: { title: "" }
    };

    // this.onTitleChange = this.onTitleChange.bind(this);
  }

  onClickSave = () => {
    // Inicia el proceso
    // this.props.dispatch(courseActions.createCourse(this.state.course));
    // this.props.createCourse(this.state.course);
    this.props.actions.createCourse(this.state.course);
    this.setState(
      {
        course: {
          title: ''
        }
      }
    )
  }

  onTitleChange = (event) => {
    this.setState(
      {
        course: {
          title: event.target.value
        }
      }
    );
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Courses</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          onClick={this.onClickSave}
          value="Save" />
      </div>
    );
  }
}

function mapStatetoProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(CoursesPage);
// export default connect(mapStatetoProps)(CoursesPage);