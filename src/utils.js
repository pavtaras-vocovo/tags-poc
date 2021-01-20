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

export const getGroupControllers = ({ groups, selectedGroupId, controllers }) => {
  const controllersIds = getGroupControllersIds(groups, selectedGroupId)
  return controllersIds.map((cid) => controllers[cid])
}