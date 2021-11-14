import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Rate = ({ callback }) => {
  const [value, setValue] = useState(5);

  return (
    <div>
      <input
        type='range'
        min='1'
        max='10'
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
      />
      <span> {value}*</span>
      <p>
        <button onClick={() => callback(value)}>Rate</button>
      </p>
    </div>
  )
}

Rate.propTypes = {
  callback: PropTypes.func
}
export default Rate;