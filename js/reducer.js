let state
let action = {type: 'INCREASE_COUNT'}
let action1 = {type: 'DECREASE_COUNT'}

function changeState(state = { count: 0 }, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      case 'DECREASE_COUNT':
        return {count: state.count - 1}
      case 'ZERO_COUNT':
        return {count: 0}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
    console.log(state.count)
}

function render(){
    document.body.textContent = state.count
}

// Functions To Execute

dispatch({ type: '@@INIT' })
dispatch({ type: 'INCREASE_COUNT' })
dispatch({ type: 'INCREASE_COUNT' })
dispatch({ type: 'INCREASE_COUNT' })
dispatch({ type: '@@INIT' })
dispatch({ type: 'DECREASE_COUNT' })
dispatch({ type: 'ZERO_COUNT' })
dispatch({ type: 'INCREASE_COUNT' })
dispatch({ type: 'INCREASE_COUNT' })
dispatch({ type: 'DECREASE_COUNT' })
dispatch({ type: 'DECREASE_COUNT' })
dispatch({ type: 'DECREASE_COUNT' })
dispatch({ type: 'DECREASE_COUNT' })
dispatch({ type: 'DECREASE_COUNT' })
dispatch({ type: 'DECREASE_COUNT' })

