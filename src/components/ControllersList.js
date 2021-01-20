import { useAvailableTagTitles } from '../hooks/useAvailableTagTitles'
import { ControllerItem } from './ControllerItem'

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


