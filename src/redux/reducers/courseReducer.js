// Reducers are functions that accept state and action and return a new state
export default function courseReducer(state = [], action) { // state here is for courses thats why it is []
    switch(action.type){
        case "CREATE_COURSE": // we update by cloning then add teh thing
            return [...state, {...action.course}];// YOU WANT TO UPDATE STATE HERE BY CLONING AND RETURN A NEW ONE, YOU DONT ALTER THE STATE THAT WAS PASSED
        default: // this is liked to be here as well because in case there was no action we default to this
            return state;
    
    }
}



// LOOK INTO STATE SHAPES IN REDUX DOCS TO GET MORE INFO OF HOW YOU WANT TO SHAPE YOUR STATE, LIKE HERE WE HAD IT AS ARRAY BUT CAN HAVE IT AS OBJECT
// you can use some other stuff rather than switch 
// each reducer handles a slice of state, not all of store 