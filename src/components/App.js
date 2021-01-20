import { useGlobalState } from '../state'
import ControllersList from './ControllersList'
import GroupsList from './GroupsList'
import ControllerForm from './ControllerForm'
import { useVisibleControllers } from '../hooks/useVisibleControllers'

function App() {
  const [{ groups, selectedGroupId }] = useGlobalState()
  const selectedGroup = groups[selectedGroupId]
  const visibleControllers = useVisibleControllers()

  return (
    <div className="App">
      <h1>Selected group: {selectedGroup.title}</h1>
      <GroupsList />

      <h2>Available Controllers</h2>
      <ControllersList controllers={visibleControllers} />
      <hr />
      <ControllerForm />
    </div>
  )
}

export default App
