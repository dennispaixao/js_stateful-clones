'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let currentState = { ...state }; // Create an initial copy of the state
  const history = [];

  actions.forEach((action) => {
    if (action.type === 'clear') {
      currentState = {}; // Reset state to an empty object
    } else if (action.type === 'addProperties') {
      currentState = { ...currentState, ...action.extraData };
    } else if (action.type === 'removeProperties') {
      currentState = { ...currentState }; // Clone before removing properties[]
      action.keysToRemove.forEach((key) => delete currentState[key]);
    }

    history.push(currentState); // Store a copy of the new state
  });

  return history;
}

module.exports = transformStateWithClones;
