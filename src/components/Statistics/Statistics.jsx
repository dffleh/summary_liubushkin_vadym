import {
  Item,
  Label,
  Percentage,
  StatList,
  StatSection,
  StatTitle,
} from './Statistics.styles';

export const Statistics = ({ stats, title }) => {
  return (
    <StatSection>
      <StatTitle>{title}</StatTitle>

      <StatList>
        {stats.map(stats => (
          <Item key={stats.id}>
            <Label>{stats.label}</Label>
            <Percentage>{stats.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatSection>
  );
};
