import React from 'react';

interface InputFieldProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const InputField: React.FC<InputFieldProps> = ({ onChange }) => {
    return (
        <div className='relative'>
            <input type='text' className='rounded-lg w-full h-[38px] bg-gray-300 font-nunito font-regular text-gray-900 p-2 border-0 focus:ring-0' onChange={onChange}/>
        </div>
    )
}

export default InputField;
