import React, { PropTypes } from 'react'

const InteractivityControllerIcon = ({
  onControllerHover,
  onControllerHoverOff,
  isActiveController,
}) => {
  const className = isActiveController ? 'isActiveController' : ''
  return (
    <div
      className="InteractivityListeners"
      onMouseEnter={onControllerHover}
      onMouseLeave={onControllerHoverOff}
    >
      <button className={`FilterButton ${className}`}>
        <img
          src={require('assets/images/interactivity_controller_icon.svg')}
          role="presentation"
        />
      </button>
    </div>
  )
}

InteractivityControllerIcon.propTypes = {
  onControllerHover: PropTypes.func,
  onControllerHoverOff: PropTypes.func,
  isActiveController: PropTypes.bool,
}

export default InteractivityControllerIcon
