import React from 'react';

function DropDown({ title, options, func }) {
  return (
    <div className="select text-white text-center ">
      <select defaultValue="0"  onChange={func} name="format" id="format" >
        <option value="0" disabled>
          {title}
        </option>
        {options.map((e, i) => (
          <option key={i} value={e}>
            {e.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
