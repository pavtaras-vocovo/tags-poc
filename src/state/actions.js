export const CREATE_GROUP = 'CREATE_GROUP'
export const CREATE_CONTROLLER = 'CREATE_CONTROLLER'
export const CREATE_TAG = 'CREATE_TAG'
export const REMOVE_TAG = 'REMOVE_TAG'
export const SELECT_GROUP = 'SELECT_GROUP'

export const createGroup = (id, title, parentId) => ({
  type: 'CREATE_GROUP',
  id,
  title,
  parent_id: parentId,
})

export const createController = (id, title, groupId) => ({
  type: 'CREATE_CONTROLLER',
  id,
  title,
  group_id: groupId,
})

export const createTag = (title, controllerId, groupId) => ({
  type: 'CREATE_TAG',
  title,
  controller_id: controllerId,
  group_id: groupId,
})

export const removeTagFromController = (title, controllerId) => ({
  type: 'REMOVE_TAG',
  controller_id: controllerId,
  title,
})

export const selectGroup = (groupId) => ({
  type: 'SELECT_GROUP',
  group_id: groupId,
})
