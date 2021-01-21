export const randomId = () => Math.floor(Math.random() * 10000000)

export const getGroupControllersIds = (groups, groupId) => {
  const group = groups[groupId]
  const subgroupsControllers = group.children
    .map((gid) => getGroupControllersIds(groups, gid))
    .reduce((collector, item) => {
      return [...collector, ...item]
    }, [])

  return [...group.controllers, ...subgroupsControllers]
}

export const getGroupControllers = ({
  groups,
  selectedGroupId,
  controllers,
}) => {
  const controllersIds = getGroupControllersIds(groups, selectedGroupId)
  return controllersIds.map((cid) => controllers[cid])
}

export const groupsRelation = (groupsIdsPath, groupId1, groupId2) => {
  const groupId1Idx = groupsIdsPath.indexOf(groupId1)
  const groupId2Idx = groupsIdsPath.indexOf(groupId2)

  if (groupId1 === -1) throw new Error('groupId1 is not in the ancestor path')
  if (groupId2 === -1) throw new Error('groupId2 is not in the ancestor path')

  if (groupId1Idx === groupId2Idx) return 0
  if (groupId1Idx > groupId2Idx) return 1
  return -1
}
