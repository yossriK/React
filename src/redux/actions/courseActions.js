
// the object returned is an action, so the function is called action creator
// the required for actions is to have type, and the rest of the shape can be whatever we want it to be
// alos type is hardcoded here
export function createCourse(course) {
    return { type: "CREATE_COURSE", course: course}; // you can use shorthand syntax as well for passing data
}