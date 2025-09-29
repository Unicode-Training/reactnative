import { ActionType, StateType } from "./StoreProvider";
export const initialState: StateType = {
  message: "",
  todoList: ["Learn React", "Learn TypeScript"],
};
export const rootReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "demo/set-message": {
      return {
        ...state,
        message: action.payload,
      };
    }
    case "demo/remove-message": {
      return {
        ...state,
        message: "",
      };
    }
    case "todo/add": {
      return {
        ...state,
        todoList: [...(state.todoList as string[]), action.payload],
      };
    }
    case "todo/remove": {
      return {
        ...state,
        todoList: (state.todoList as string[]).filter(
          (item, index) => index !== action.payload
        ),
      };
    }
    default: {
      return state;
    }
  }
};

//action: {type: "ten-action", payload: du-lieu}
