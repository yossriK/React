import React from "react";
import {connect} from "react-redux"; // used to connect to redux and redux store
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  // constructor(props) {
  //   super(props);
// we dont even need to write constructoc, the state will be instantiated with the class, however later on in the course we will actuallyu 
// write function components which is the way to go and will not need to worry about 'this' binding later on
    state = {   // this state more specific to my course
      course: {
        title: "" // we will use react hooks later in the coiurse
      }
    }

    // this.handleChange = this.handleChange.bind(this);
  //}

  handleChange = event => {
    // notice how we have to bind into 'this' in the call of this function in the render section, as it was binding to 'this' in the
    // wrong context, quick solution {this.handleChange.bind(this)} == but this is not right way to do it, as y it will bind with every render 
    // instead we can do this in constructire this.handleChange = this.handleChange.bind(this);
    // howerver best way to do it is using stage 3 feature which is to use arrow function for creating thsi handle change, and it will
    // bind to the correct 'this', arrow functions themselves dont have 'this' context so the 'this' now in arrow will refer to the class instance

    // so we copied a new state into course, we cloned the state, made change to new one and then we set the state
    const course = { ...this.state.course, title: event.target.value}; // using spread operator which is 3 dots to copy another array into here
    
    
    
    this.setState({ course });
  }

  handleSubmit = event => { // to prevent the whole page from reloading on submit we passed event along and called the prevent default
    event.preventDefault();
    // remember you have to dispatch the action
    this.props.dispatch(courseActions.createCourse(this.state.course));
    alert(this.state.course.title);
  }

  render() {
    return ( // creating the form I want to render
      // it is recommended to use this way to sumbit form then you can even submit by clicking enter
      <form onSubmit={this.handleSubmit}>  
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
         type="text"
         onChange={this.handleChange.bind(this)}
         value={this.state.course.title} 
         />

        <input type="submit" value="Save"/>
      </form>
    );
  }
}

// expecting dispatch to be passed down to coursePage component:
// and will be passed by defualt in this connect case
CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) { // determines what part of state we expose to component via props
  return {  // own props is reference to components own props
    courses: state.courses // this is what we have so far
  }
}
//export default CoursesPage; this was before connecting to react redux, now see how we decorated this
export default connect(mapStateToProps) (CoursesPage); // two foncution calls here, as connect returns a function that calls our componeent
//this is using the default dispatch property to dispatch our actions as we didnt create our won here, thus that dispatch was added to the component props