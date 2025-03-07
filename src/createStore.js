// write your createStore function here

export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  function getState() {
    return state;
  }

  dispatch({ type: '@@INIT' })

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}

// Use your createStore function and the functions provided here to create a store.
// Once the store is created, call an initial dispatch.