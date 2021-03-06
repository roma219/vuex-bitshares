import * as types from '../mutations';
import * as actions from '../actions/assets';
import * as getters from '../getters/assets';

const initialState = {
  assets: null,
  pending: false
};

const mutations = {
  [types.FETCH_ASSETS_REQUEST](state) {
    state.pending = true;
  },
  [types.FETCH_ASSETS_COMPLETE](state, { assets }) {
    state.assets = assets;
  },
  [types.FETCH_ASSETS_ERROR](state) {
    state.pending = false;
  },
  [types.FETCH_DEFAULT_ASSETS_REQUEST](state) {
    state.pending = true;
  },
  [types.FETCH_DEFAULT_ASSETS_COMPLETE](state, { assets }) {
    state.assets = assets;
  },
  [types.FETCH_DEFAULT_ASSETS_ERROR](state) {
    state.pending = false;
  }
};

export default {
  state: initialState,
  actions,
  mutations,
  getters
};
