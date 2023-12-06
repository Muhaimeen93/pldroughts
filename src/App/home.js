import React, { useState, useEffect } from "react";
import { Select, MenuItem } from "@mui/material";
import CountdownTimer from "../Components/countDownTimer";
import teamData from "../Files/teamData.json";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import "./home.css";
import { getTeamName } from "../Components/teamNames";

function Home() {
  const navigate = useNavigate();
  const [countdownKey, setCountdownKey] = useState(Date.now());
  const inPlTeams = teamData.filter((team) => team.inPl);
  const { urlParam } = useParams();
  const teamFullName = getTeamName(urlParam);
  const teamDetails = teamData.find((team) => team.teamName === teamFullName);
  const [selectedTeam, setSelectedTeam] = useState(
    teamFullName != null ? teamDetails : teamData[0]
  );

  const handleTeamChange = (event) => {
    const selectedTeamName = event.target.value;
    const selectedTeam = inPlTeams.find(
      (team) => team.teamName === selectedTeamName
    );
    setSelectedTeam(selectedTeam);
    setCountdownKey(Date.now());
    navigate(`/${selectedTeamName.toLowerCase().replace(/\s+/g, "-")}`);
  };

  useEffect(() => {
    setCountdownKey(Date.now());
  }, [selectedTeam]);

  useEffect(() => {
    const defaultTeamName = inPlTeams[0].teamName
      .toLowerCase()
      .replace(/\s+/g, "-");
    if (teamFullName != null) {
      navigate(`/${teamDetails.teamName.toLowerCase().replace(/\s+/g, "-")}`);
    } else {
      navigate(`/${defaultTeamName}`);
    }
  }, []);
  return (
    <div className="homepage-container">
      <div className="content">
        <Select
          className="dropdown"
          value={selectedTeam.teamName}
          onChange={handleTeamChange}
        >
          {inPlTeams.map((team) => (
            <MenuItem key={team.teamName} value={team.teamName}>
              {team.teamName}
            </MenuItem>
          ))}
        </Select>
        {<CountdownTimer key={countdownKey} team={selectedTeam} />}
      </div>
    </div>
  );
}

export default Home;
