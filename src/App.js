import { useGlobalState } from './state'
import ControllersList from './ControllersList'
import GroupsList from './GroupsList'
import ControllerForm from './ControllerForm'

function App() {
  const [{ groups, selectedGroupId }] = useGlobalState()
  const selectedGroup = groups[selectedGroupId]

  return (
    <div className="App">
      <h1>Selected group: {selectedGroup.title}</h1>
      <GroupsList />

      <h2>Controllers</h2>
      <ControllersList />
      <ControllerForm />
    </div>
  )
}

export default App
