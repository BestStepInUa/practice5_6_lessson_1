// import { IconContext } from 'react-icons';

import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({ total, title, Icon }) => {
  return (
    <StatisticBox>
      {/* <IconContext.Provider value={{ color: 'tomato', size: 24 }}>
        {icon}
      </IconContext.Provider> */}
      <Icon size={24} />
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};
