import { handleActions } from 'redux-actions';
import get from 'lodash/get';
import { v4 as uuidv4 } from 'uuid';

// TODO: remove dummy data
const initialState = {
  lastUpdated: null,
  syncStatus: null,
  drafts: [],
  actives: []
};

const reducer = handleActions(
  {
    'initial-state-received': (state, { payload }) => ({
      ...state,
      ...get(payload, 'contracts', {})
    }),

    'contracts-scan-started': state => ({
      ...state,
      lastUpdated: parseInt(Date.now() / 1000, 10),
      syncStatus: 'syncing'
    }),

    'contracts-scan-finished': (state, { payload }) => ({
      ...state,
      actives: payload.actives,
      lastUpdated: parseInt(Date.now() / 1000, 10),
      syncStatus: 'up-to-date'
    }),

    'remove-draft': (state, { payload }) => ({
      ...state,
      drafts: Object.assign(state.drafts, []).filter(
        draft => draft.id !== payload.id
      ),
      lastUpdated: parseInt(Date.now() / 1000, 10),
      syncStatus: payload.syncStatus
    }),

    'create-draft': (state, { payload }) => {
      const draftWithId = { ...payload.draft, id: uuidv4() };

      return {
        ...state,
        drafts: [...state.drafts, draftWithId],
        lastUpdated: parseInt(Date.now() / 1000, 10),
        syncStatus: payload.syncStatus
      };
    },

    'publish-draft': (state, { payload }) => ({
      ...state,
      actives: payload.actives,
      lastUpdated: parseInt(Date.now() / 1000, 10),
      syncStatus: payload.syncStatus
    }),

    'purchase-temp-contract': (state, { payload }) => {
      let array = state.actives;
      let objIndex = array.findIndex(obj => obj.id == payload.id);
      array[objIndex].inProgress = true;
      array[objIndex].buyer = payload.address;
      return {
        ...state,
        actives: [...array]
      };
    },

    'create-temp-contract': (state, { payload }) => {
      return {
        ...state,
        actives: [...state.actives, payload]
      };
    },

    'remove-contract': (state, { payload }) => {
      return {
        ...state,
        actives: Object.assign(state.actives, []).filter(
          contract => contract.id !== payload.id
        )
      };
    }
  },
  initialState
);

export default reducer;
