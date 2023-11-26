import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

// const icons = [
//   <FaRegThumbsUp />,
//   <MdPeople />,
//   <MdOutlineProductionQuantityLimits />,
//   <GiTreeDoor />,
// ];

const icons = [
  FaRegThumbsUp,
  MdPeople,
  MdOutlineProductionQuantityLimits,
  GiTreeDoor,
];

export const Statistics = ({ stats, title }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map(({ id, title, total }, i) => {
          return (
            <StatisticItem
              key={id}
              // icon={icons[i]}
              Icon={icons[i]}
              title={title}
              total={total}
            />
          );
        })}
      </StatisticsList>
    </>
  );
};
