import { useRef } from 'react'
import { Tag } from './Tag'
import st from './TagsList.module.css'
import { useGroupParentsPath } from '../hooks/useGroupParentsPath'
import { useGlobalState } from '../state'
import { groupsRelation } from '../utils'

const groupId = (g) => g.id

export function TagsList({ tags, onClose }) {
  const [{ selectedGroupId }] = useGlobalState()
  const parentsPath = useGroupParentsPath(groupId)

  return (
    <div className={st.block}>
      {tags.map((tag) => {
        const canDelete =
          groupsRelation(parentsPath, selectedGroupId, tag.group_id) >= 0
        const close = canDelete ? () => onClose(tag) : null

        return (
          <Tag key={tag.title} onClose={close} background="crimson">
            {tag.title}
          </Tag>
        )
      })}
    </div>
  )
}

export function NewTagForm({ canCreate, onCreate }) {
  const $input = useRef()

  const tagCreated = (e) => {
    e.preventDefault()
    const tagTitle = $input.current.value

    if (canCreate(tagTitle)) {
      alert('Sorry such tag already exists on the controller')
      return
    }

    onCreate(tagTitle)
  }

  return (
    <form onSubmit={tagCreated}>
      <input
        type="text"
        ref={$input}
        placeholder="assign tag to the controller"
      />
    </form>
  )
}
