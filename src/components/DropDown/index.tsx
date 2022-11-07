import React from 'react';

import Checked from '../../assets/checked.svg';
import {
  DropDownContainer,
} from './styles';

const DropDown = ({title, items, handler, selected, icons, visible = false}) => {
  const dropDowndHandler = (e, index) => {
    e.preventDefault();
    if (Array.isArray(handler)) {
      handler[index](e, index);
    } else {
      handler(e, index);
    }
  };

  return (
    visible &&
    <DropDownContainer>
      <div className='dropdown'>
        {title ? <h3>{title}</h3> : ''}
        {
          items.map((item, index) => {
            return (
              <a href='#/' key={index} onClick={e => dropDowndHandler(e, index)}>
                {icons ? <div className='icon'><img alt='Option Icon' src={icons[index]}></img></div> : ''}
                <div className='checked'>{selected === index ? <img alt='Checked Icon' src={Checked} /> : <img alt='' />}</div><p>{item}</p>
              </a>
            );
          },
          )
        }
      </div>
    </DropDownContainer>
  );
};

export default DropDown;
