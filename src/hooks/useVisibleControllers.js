import { useMemo } from 'react'
import { useGlobalState } from '../state'
import { getGroupControllers } from '../utils'

export function useVisibleControllers() {
  const [{ selectedGroupId, groups, controllers }] = useGlobalState()

  const visibleControllers = useMemo(
    () =>
      getGroupControllers({
        selectedGroupId,
        groups,
        controllers,
      }),
    [selectedGroupId, groups, controllers]
  )

  return visibleControllers
}
