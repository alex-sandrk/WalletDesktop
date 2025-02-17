import { handleActions } from 'redux-actions';

const initialState = {
  chain: {}
};

const reducer = handleActions(
  {
    'initial-state-received': (_, { payload }) => payload.config,
    'buyer-default-pool-received': (state, { payload }) => ({
      ...state,
      buyerDefaultPool: payload
    }),
    'ip-received': (state, { payload }) => ({
      ...state,
      ip: payload
    })
  },
  initialState
);

export default reducer;
