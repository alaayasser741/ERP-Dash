import React from "react";
import TableDemo from "../../components/TableDemo";
import { teamData, teamColumns } from "../../data/teamsData";
const index = () => {
  return (
    <div>
      <TableDemo data={teamData} columns={teamColumns} />
    </div>
  );
};

export default index;
