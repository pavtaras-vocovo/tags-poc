import { NewTagForm, SuggestedControllerTags, TagsList } from './TagsList'
import { useAvailableTagTitles } from './hooks/useAvailableTagTitles'
import { createTag, removeTagFromController } from './state/actions'
import { useGlobalState } from './state'

export default function ControllersList({ controllers }) {
  const availableTagTitles = useAvailableTagTitles(controllers)

  return (
    <div>
      {controllers.map((controller) => (
        <ControllerItem
          key={controller.id}
          controller={controller}
          availableTagTitles={availableTagTitles}
        />
      ))}
    </div>
  )
}

export function ControllerItem({ controller, availableTagTitles }) {
  const [{ selectedGroupId }, dispatch] = useGlobalState()

  const assignTagWithTitleToCtrl = (tagTitle) => {
    dispatch(createTag(tagTitle, controller.id, selectedGroupId))
  }

  const canCreate = (tagTitle) => {
    return controller.tags.find((t) => t.title === tagTitle)
  }

  const removeTag = (tag) => {
    dispatch(removeTagFromController(tag.title, controller.id))
  }

  return (
    <div key={controller.id}>
      <h4>{controller.title}</h4>
      <TagsList tags={controller.tags} onClose={removeTag} />
      <SuggestedControllerTags
        onSelect={assignTagWithTitleToCtrl}
        tags={controller.tags}
        availableTagTitles={availableTagTitles}
      />
      <NewTagForm canCreate={canCreate} onCreate={assignTagWithTitleToCtrl} />
    </div>
  )
}
