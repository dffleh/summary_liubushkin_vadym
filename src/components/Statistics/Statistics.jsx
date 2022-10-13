export const Statistics = ({ stats, title }) => {
  return (
    <section className="stats">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(stats => (
          <li className="item" key={stats.id}>
            <span className="label">{stats.label}</span>
            <span className="percentage">{stats.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// const StatisticsList = ({ statistics: { label, percentage } }) => {
//   return (
//     <>
//       <span className="label">{label}</span>
//       <span className="percentage">{percentage}</span>
//     </>
//   );
// };
