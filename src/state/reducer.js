import { CREATE_GROUP, SELECT_GROUP, CREATE_CONTROLLER } from './actions'

export function reducer(state, action) {
  if (action.type === CREATE_GROUP) {
    const { groups } = state
    const parentGroup = groups[action.parent_id]
    const newGroup = {
      id: action.id,
      title: action.title,
      parent_id: action.parent_id,
      children: [],
      controllers: [],
    }

    return {
      ...state,
      groups: {
        ...groups,
        [action.parent_id]: {
          ...parentGroup,
          children: [...parentGroup.children, action.id],
        },
        [action.id]: newGroup,
      },
    }
  }

  if (action.type === CREATE_CONTROLLER) {
    const { controllers, groups } = state
    const parentGroup = groups[action.group_id]
    console.log(parentGroup)

    return {
      ...state,
      controllers: {
        ...controllers,
        [action.id]: {
          id: action.id,
          title: action.title,
          group_id: action.group_id,
          tags: [],
        }
      },
      groups: {
        ...groups,
        [parentGroup.id]: {
          ...parentGroup,
          controllers: [...parentGroup.controllers, action.id]
        }
      }
    }
  }

  if (action.type === SELECT_GROUP) {
    return {
      ...state,
      selectedGroupId: action.group_id,
    }
  }

  return state
}
