import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'

let state = initialState

console.log(`

	Initial state
	=============
	goal: ${state.goal}
	resorts: ${JSON.stringify(state.allSkiDays)}
	fetching: ${state.resortNames.fetching}
	suggestions: ${state.resortNames.suggestions}

`)

state = appReducer(state, {
	type: C.SET_GOAL,
	payload: 2
})

state = appReducer(state, {
	type: C.ADD_DAY,
	payload: {
		"resort": "Mt Shasta",
		"date": "2016-10-28",
		"powder": false,
		"backcountry": true
	}
})

state = appReducer(state, {
	type: C.CHANGE_SUGGESTIONS,
	payload: ["Mt Tallac", "Mt Hood", "Mt Shasta"]
})

console.log(`

	Next state
	=============
	goal: ${state.goal}
	resorts: ${JSON.stringify(state.allSkiDays)}
	fetching: ${state.resortNames.fetching}
	suggestions: ${state.resortNames.suggestions}

`)



//import C from "./constants"
//import { allSkiDays } from "./store/reducers"

//const state = [
//	{
//		"resort": "Kirkwood",
//		"date": "2016-12-15",
//		"powder": true,
//		"backcountry": false
//	},
//	{
//		"resort": "Boreal",
//		"date": "2016-12-16",
//		"powder": false,
//		"backcountry": false
//	}
//]

//const action = {
//	type: C.REMOVE_DAY,
//	payload: "2016-12-15"
//}

//const nextState = allSkiDays(state, action)

//console.log(`

//	intial state: ${JSON.stringify(state)}
//	action: ${JSON.stringify(action)}
//	new state: ${JSON.stringify(nextState)}

//`)
