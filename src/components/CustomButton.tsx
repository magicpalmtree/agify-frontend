import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

interface SubmitButtonProps {
    children: ReactNode,
    onClick: React.MouseEventHandler<HTMLButtonElement>
    loading?: boolean,
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children, onClick, loading = false }) => (
    <button 
        className='bg-primary-500 text-white rounded-lg font-nunito font-bold px-4 py-2 min-w-[86px] cursor-pointer'
        onClick={onClick}
    >
        {loading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : children}
    </button>
);

export default SubmitButton;
