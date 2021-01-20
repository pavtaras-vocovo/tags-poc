import { useGlobalState } from '../state'
import { createTag, removeTagFromController } from '../state/actions'
import { NewTagForm, SuggestedControllerTags, TagsList } from './TagsList'

import st from './ControllerItem.module.css'

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
    <div className={st.block} key={controller.id}>
      <h4 className={st.title}>{controller.title}</h4>
      <div className={st.left}>
        <h5>Assigned tags:</h5>
        <TagsList tags={controller.tags} onClose={removeTag} />
      </div>
      <div className={st.right}>
        <SuggestedControllerTags
          onSelect={assignTagWithTitleToCtrl}
          tags={controller.tags}
          availableTagTitles={availableTagTitles}
        />
        <NewTagForm canCreate={canCreate} onCreate={assignTagWithTitleToCtrl} />
      </div>
    </div>
  )
}