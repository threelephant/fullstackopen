import React from 'react'

const Filter = ({ value, onChange }) => (
  <form>
    filter shown with
    <input
        value={value}
        onChange={onChange}
    />
  </form>
)

export default Filter
