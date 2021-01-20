import { useRef } from 'react'
import { useGlobalState } from './state'

export function TagsList({ tags, onClose }) {
  return (
    <div>
      {tags.map((tag) => (
        <Tag key={tag.title} onClose={() => onClose(tag)}>{tag.title}</Tag>
      ))}
    </div>
  )
}

export function Tag({ children, onClick, onClose }) {
  return (
    <span style={{ padding: '5px', background: 'red' }}>
      <span onClick={() => onClick && onClick()}>{children}</span>
      {onClose && <span onClick={() => onClose()}>x</span>}
    </span>
  )
}

export function NewTagForm({ canCreate, onCreate }) {
  const [{ selectedGroupId }, dispatch] = useGlobalState()
  const $input = useRef()

  const tagCreated = (e) => {
    e.preventDefault()
    const tagTitle = $input.current.value

    if (canCreate(tagTitle)) {
      alert('Sorry such tag already exists')
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

export function SuggestedControllerTags({ onSelect, tags, availableTagTitles }) {
  const assignedTitles = tags.map((t) => t.title)

  return (
    <div>
      <h5>Suggested tags:</h5>
      {availableTagTitles
        .filter((title) => !assignedTitles.find((t) => t === title))
        .map((title) => (
          <Tag key={title} onClick={() => onSelect(title)}>{title}</Tag>
        ))}
    </div>
  )
}
