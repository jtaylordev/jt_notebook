import * as React from 'react';

const TextInput = ({label, value, onChange}: any) => {
    return (
        <div>
            <label htmlFor="">{label}</label>

            <input type="text" value={value} onChange={onChange} />
        </div>
    )
}

export default TextInput;