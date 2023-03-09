import { AnyAction } from 'redux';

interface ExampleState {
  example: string;
}

const initialState: ExampleState = {
  example: '',
};

export const exampleReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_EXAMPLE':
      return { ...state, example: action.payload };
    default:
      return state;
  }
};
