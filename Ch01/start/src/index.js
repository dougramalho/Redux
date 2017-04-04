import storeFactory from "./store"
import { addDay, removeDay, setGoal, addError, clearError, changeSuggestions, clearSuggestions, randomGoals } from "./actions" 

const store = storeFactory();

store.dispatch(
	randomGoals()
);

store.dispatch(
	randomGoals()
);



//store.dispatch(
//	addDay("Heavenly", "2016-12-22")
//);

//store.dispatch(removeDay("2016-12-22"));

//store.dispatch(setGoal(55));

//store.dispatch(addError("something went wrong"));

//store.dispatch(clearError(0));

//store.dispatch(changeSuggestions(["one", "two", "three"]));

//store.dispatch(clearSuggestions());






