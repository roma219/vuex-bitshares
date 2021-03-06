import * as types from '../mutations';
import * as apis from '../services/api';

const composeAssets = (assets) => {
  const composedAssets = {};
  assets.forEach((asset) => {
    composedAssets[asset.id] = asset;
  });
  return composedAssets;
};

export const fetchAssets = ({ commit }, assets) => {
  commit(types.FETCH_ASSETS_REQUEST);
  apis.getAssets(assets).then((result) => {
    commit(types.FETCH_ASSETS_COMPLETE, { assets: composeAssets(result) });
  }, () => {
    commit(types.FETCH_ASSETS_ERROR);
  });
};

export const fetchDefaultAssets = ({ commit }) => {
  //  TODO MOVE TO CONFIG DEFAULT ASSETS
  const defaultAssets = ['BTS', 'OPEN.EOS', 'USD', 'OPEN.OMG', 'CNY',
    'OPEN.LTC', 'OPEN.EOS', 'TRFND', 'OPEN.BTC', 'ARISTO', 'ARCOIN'];
  commit(types.FETCH_DEFAULT_ASSETS_REQUEST);
  apis.getAssets(defaultAssets).then((result) => {
    commit(types.FETCH_DEFAULT_ASSETS_COMPLETE, {
      assets: composeAssets(result)
    });
  }, () => {
    commit(types.FETCH_DEFAULT_ASSETS_ERROR);
  });
};
