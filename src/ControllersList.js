import { useGlobalState } from './state'

export default function ControllersList() {
  const [{ selectedGroupId, groups, controllers }] = useGlobalState()
  const ctrls = getGroupControllers({
    selectedGroupId,
    groups,
    controllers,
  })

  console.log(groups, controllers, ctrls)

  return (
    <ul>
      {ctrls.map((c) => {
        return <li key={c.id}>{c.title}</li>
      })}
    </ul>
  )
}

const getGroupControllersIds = (groups, groupId) => {
  const group = groups[groupId]
  const subgroupsControllers = group.children
    .map((gid) => getGroupControllersIds(groups, gid))
    .reduce((collector, item) => {
      return [...collector, ...item]
    }, [])

  return [...group.controllers, ...subgroupsControllers]
}

const getGroupControllers = ({ groups, selectedGroupId, controllers }) => {
  const controllersIds = getGroupControllersIds(groups, selectedGroupId)
  return controllersIds.map((cid) => controllers[cid])
}
