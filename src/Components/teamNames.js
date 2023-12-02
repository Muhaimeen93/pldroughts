export const getTeamName = (variable) => {
  const associations = {
    arsenal: "Arsenal",
    "aston-villa": "Aston Villa",
    brentford: "Brentford",
    bournemouth: "Bournemouth",
    "brighton-&-hove-albion": "Brighton & Hove Albion",
    burnley: "Burnley",
    chelsea: "Chelsea",
    "crystal-palace": "Crystal Palace",
    everton: "Everton",
    fulham: "Fulham",
    "luton-town": "Luton Town",
    liverpool: "Liverpool",
    "manchester-city": "Manchester City",
    "manchester-united": "Manchester United",
    "newcastle-united": "Newcastle United",
    "nottingham-forest": "Nottingham Forest",
    "sheffield-united": "Sheffield United",
    "tottenham-hotspur": "Tottenham Hotspur",
    "wolverhampton-wanderers": "Wolverhampton Wanderers",
    "west-ham-united": "West Ham United",
  };

  return associations[variable] || null;
};
