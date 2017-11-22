let defaultState = {
  items: []
}

let mainReducers = (state = defaultState, action) => {
  switch(action.type) {
    case "ADD_ITEM":
    return {
      items: [...state.items, {title: action.title, url: action.url, description: action.description}]
    }
    case "REMOVE_ITEM":
      return{
        items: state.items.filter((Item, index) =>(index !== action.index))
      }
      break;
    default:
    return state
  }
}

export default mainReducers
