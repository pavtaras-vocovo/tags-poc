import { NewTagForm, SuggestedControllerTags, TagsList } from './TagsList'
import { useAvailableTagTitles } from './hooks/useAvailableTagTitles'

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
  const assignTagWithTitleToCtrl = (controllerId, title) => {}

  return (
    <div key={controller.id}>
      <h4>{controller.title}</h4>
      <TagsList tags={controller.tags} />
      <SuggestedControllerTags
        tags={controller.tags}
        availableTagTitles={availableTagTitles}
      />
      <NewTagForm controllerId={controller.id} tags={controller.tags} />
    </div>
  )
}
