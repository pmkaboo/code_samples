import React, { PropTypes } from 'react'
import InteractivityControllerIcon from './InteractivityControllerIcon'
import InteractivityFilters from './InteractivityFilters'

const InteractivityLabels = ({
  listeners,
  onControllerHover,
  onControllerHoverOff,
  filterValues,
  isActiveController,
  handleInteraction,
}) => (
  <div className="InteractivityLabels">
    {listeners &&
      <InteractivityControllerIcon
        onControllerHover={onControllerHover}
        onControllerHoverOff={onControllerHoverOff}
        isActiveController={isActiveController}
      />
    }
    {filterValues &&
      <InteractivityFilters
        filterValues={filterValues}
        handleInteraction={handleInteraction}
      />
    }
  </div>
)

InteractivityLabels.propTypes = {
  listeners: PropTypes.array,
  onControllerHover: PropTypes.func,
  onControllerHoverOff: PropTypes.func,
  filterValues: PropTypes.array,
  isActiveController: PropTypes.bool,
  handleInteraction: PropTypes.func,
}

export default InteractivityLabels
