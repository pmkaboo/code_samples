import React, { PropTypes } from 'react'

const shortLabel = (label) => {
  let title = null
  if (label.length < 20) { return { label, title } }

  const words = label.split(' ').reverse()
  let shortenedLabel = words.pop()

  while (words.length > 0) {
    const word = words.pop()
    if (shortenedLabel.length + word.length > 20) {
      shortenedLabel += '...'
      title = label
      break
    }
    shortenedLabel += ` ${word}`
  }

  return { label: shortenedLabel, title }
}

const InteractivityFilters = ({ filterValues, handleInteraction }) => (
  <div
    className="InteractivityFilters"
  >
    {
      filterValues.map((filter) => {
        const { label, title } = shortLabel(filter.value)

        return (
          <button
            key={`${filter.value}-${filter.key}`}
            className="FilterButton"
            onClick={() => handleInteraction(
              { label: filter.value, groupLabel: filter.value },
              { interactivityKey: filter.key, interactivityId: filter.id },
            )}
          >
            <span className="FilterButton__close">×</span>
            <span className="FilterButton__label" title={title}>{label}</span>
          </button>
        )
      })
    }
  </div>
)

InteractivityFilters.propTypes = {
  filterValues: PropTypes.array,
  handleInteraction: PropTypes.func,
}

export default InteractivityFilters
