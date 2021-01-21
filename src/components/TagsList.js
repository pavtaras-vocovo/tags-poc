import { useRef } from 'react'
import { Tag } from './Tag'
import st from './TagsList.module.css'

export function TagsList({ tags, onClose }) {
  return (
    <div className={st.block}>
      {tags.map((tag) => (
        <Tag key={tag.title} onClose={() => onClose(tag)} background="crimson">
          {tag.title}
        </Tag>
      ))}
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


