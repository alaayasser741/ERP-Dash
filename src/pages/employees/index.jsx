import { TableDemo } from "../../components";
import { teamData, teamColumns } from "../../data/teamsData";
const index = () => {
  return (
    <div>
      <TableDemo data={teamData} columns={teamColumns} />
    </div>
  );
};

export default index;
