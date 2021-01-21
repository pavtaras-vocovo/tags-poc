import { useGlobalState } from '../state'

const defaultMapFn = (i) => i

export function useGroupParentsPath(mapFn = defaultMapFn) {
  const [{ selectedGroupId, groups }] = useGlobalState()

  return getGroupParentsPath(selectedGroupId, groups, mapFn)
}

function getGroupParentsPath(selectedGroupId, groups, mapFn) {
  const path = []
  let cursor = selectedGroupId

  while (true) {
    const currentGroup = groups[cursor]
    path.push(currentGroup)

    if (!currentGroup.parent_id) break

    cursor = currentGroup.parent_id
  }

  return path.map(mapFn)
}
