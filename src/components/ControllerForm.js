import { useRef } from 'react'
import { createController } from '../state/actions'
import { randomId } from '../utils'
import { useGlobalState } from '../state'

export default function ControllerForm() {
  const [{ selectedGroupId }, dispatch] = useGlobalState()
  const $input = useRef()

  const addController = (e) => {
    e.preventDefault()

    dispatch(
      createController(randomId(), $input.current.value, selectedGroupId)
    )
  }

  return (
    <form onSubmit={addController}>
      <input
        type="text"
        ref={$input}
        placeholder="Add controller to the selected group"
      />
    </form>
  )
}
