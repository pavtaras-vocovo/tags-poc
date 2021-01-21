import { Tag } from './Tag'
import st from './SuggestedControllerTags.module.css'

export function SuggestedControllerTags({
  onSelect,
  tags,
  availableTagTitles,
}) {
  const assignedTitles = tags.map((t) => t.title)

  return (
    <div className={st.block}>
      {availableTagTitles
        .filter((title) => !assignedTitles.find((t) => t === title))
        .map((title) => (
          <Tag key={title} onClick={() => onSelect(title)} background="bisque">
            {title}
          </Tag>
        ))}
    </div>
  )
}
