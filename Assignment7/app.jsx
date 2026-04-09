const { useEffect, useState } = React;

function IPLTable() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        // sort by NRR ascending
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>IPL 2022 Points Table</h2>

      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team.team}</td>
              <td>{team.matches}</td>
              <td>{team.won}</td>
              <td>{team.lost}</td>
              <td>{team.points}</td>
              <td>{team.NRR}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<IPLTable />);