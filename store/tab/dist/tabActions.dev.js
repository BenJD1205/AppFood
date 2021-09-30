"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSelectedTab = setSelectedTab;
exports.setSelectedTabSuccess = exports.SET_SELECTED_TAB = void 0;
var SET_SELECTED_TAB = 'SET_SELECTED_TAB';
exports.SET_SELECTED_TAB = SET_SELECTED_TAB;

var setSelectedTabSuccess = function setSelectedTabSuccess(selectedTab) {
  return {
    type: SET_SELECTED_TAB,
    payload: {
      selectedTab: selectedTab
    }
  };
};

exports.setSelectedTabSuccess = setSelectedTabSuccess;

function setSelectedTab(selectedTab) {
  return function (dispatch) {
    dispatch(setSelectedTabSuccess(selectedTab));
  };
}