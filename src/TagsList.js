import { useRef } from 'react'
import { createTag } from './state/actions'
import { useGlobalState } from './state'

export function TagsList({ tags }) {
  return (
    <div>
      {tags.map((tag) => (
        <Tag key={tag.title}>{tag.title}</Tag>
      ))}
    </div>
  )
}

export function Tag({ children, onClick, onClose }) {
  return (
    <span>
      {onClick && <span onClick={() => onClick()}>{children}</span>}
      {onClose && <span onClick={() => onClose()}>x</span>}
    </span>
  )
}

export function NewTagForm({ tags, controllerId }) {
  const [{ selectedGroupId }, dispatch] = useGlobalState()
  const $input = useRef()

  const tagCreated = (e) => {
    e.preventDefault()
    const tagTitle = $input.current.value

    if (tags.find((t) => t.title === tagTitle)) {
      alert('Sorry such tag already exists')
      return
    }

    dispatch(createTag(tagTitle, controllerId, selectedGroupId))
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

export function SuggestedControllerTags({ tags, availableTagTitles }) {
  const assignedTitles = tags.map((t) => t.title)

  return availableTagTitles
    .filter((title) => !assignedTitles.find((t) => t === title))
    .join(', ')
}
