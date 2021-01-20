import React, { useRef } from 'react'
import { useGlobalState } from '../state'
import { createGroup, selectGroup } from '../state/actions'
import { randomId } from '../utils'

export default function GroupsList() {
  const [{ groups }] = useGlobalState()
  const topGroup = Object.values(groups).find((g) => !g.parent_id)

  return (
    <ul>
      <Group groupId={topGroup.id} />
    </ul>
  )
}

function Group({ groupId }) {
  const $input = useRef()
  const [{ groups }, dispatch] = useGlobalState()
  const group = groups[groupId]

  const createSubGroup = (e) => {
    e.preventDefault()
    dispatch(createGroup(randomId(), $input.current.value, groupId))
  }

  const select = (e) => {
    e.preventDefault()
    dispatch(selectGroup(groupId))
  }

  return (
    <li>
      <div style={{ display: 'flex' }}>
        <a href="/" onClick={select} title="Click to select">
          {group.title}
        </a>

        <form style={{ marginLeft: '10px' }} onSubmit={createSubGroup}>
          <input placeholder="Add subgroup" ref={$input} />
        </form>
      </div>

      {!!group.children.length && (
        <ul>
          {group.children.map((gid) => (
            <Group groupId={gid} key={gid} />
          ))}
        </ul>
      )}
    </li>
  )
}
