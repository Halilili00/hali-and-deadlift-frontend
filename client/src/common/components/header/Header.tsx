import React from 'react';

type Props = {
  headerText: string;
  subHeaderText?: string;
};

const Header: React.FC<Props> = ({ headerText, subHeaderText }) => {
  return (
    <div>
      <h1>{headerText}</h1>
      {subHeaderText && <h3 className='text-gray-600'>{subHeaderText}</h3>}
    </div>
  );
};

export default Header;
