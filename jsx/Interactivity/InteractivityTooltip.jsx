import React, { PropTypes } from 'react'

const InteractivityTooltip = ({ listeners }) => (
  <div>
    <div className="hint">Interactions on this chart will filter the following ones:</div>
    <ul>
      {
        listeners.map(listener =>
          <li key={listener.id}>
            {listener.label}
          </li>,
        )
      }
    </ul>
    <br />
  </div>
)

InteractivityTooltip.propTypes = {
  listeners: PropTypes.array,
}

export default InteractivityTooltip
