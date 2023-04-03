import React from 'react';

interface HistoryItemProps {
  firstName: string,
  age: number,
  large?: boolean
}

const HistoryItem: React.FC<HistoryItemProps> = ({ firstName, age, large = false }) => {
  const ageString = age.toString();
  const Wrapper = large ? 'h2' : 'p';
  return (
    <Wrapper className='font-nunito font-regular text-gray-700'>
      <span className='text-gray-900'>{firstName}</span> is about{' '}
      <span className='text-black'>{ageString}</span> years old
    </Wrapper>
  );
};

export default HistoryItem;