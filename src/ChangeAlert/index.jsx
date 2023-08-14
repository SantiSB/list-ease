import { useStorageListener } from './useStorageListener'
import './ChangeAlert.css'

function ChangeAlert({ synchronize }) {
  const { show, toggleShow } = useStorageListener(synchronize)

  if (show) {
    return (
      <div className='ChangeAlert-bg'>
        <div className='ChangeAlert-container'>
          <p>
            It looks like you changed your tasks on another tab or window of the
            browser
          </p>
          <p>Do you want sync your tasks?</p>
          <button
            className='TodoForm-button TodoForm-button--add'
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export { ChangeAlert }
