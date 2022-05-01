import { ADD_DATA } from '../appActionTypes';
import meetupData from '../../Data/meetupData.json';

const initialState = {
	meetData: []
}

const appReducer = (state= initialState, action) => {
	switch(action.type) {
		case ADD_DATA:
			return {...state, meetData:[...state.meetData, action.payload]}
	}
}

export default appReducer;
