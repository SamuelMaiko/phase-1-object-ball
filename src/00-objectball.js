// numPointsScored: Returns the number of points scored for a given player name
function numPointsScored(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
      const team = game[teamKey];
      for (const player in team.players) {
        if (player === playerName) {
          return team.players[player].points;
        }
      }
    }
    return null; // Player not found
  }
  
  // shoeSize: Returns the shoe size for a given player name
  function shoeSize(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
      const team = game[teamKey];
      for (const player in team.players) {
        if (player === playerName) {
          return team.players[player].shoe;
        }
      }
    }
    return null; // Player not found
  }
  
  // teamColors: Returns an array of colors for a given team name
  function teamColors(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
      const team = game[teamKey];
      if (team.teamName === teamName) {
        return team.colors;
      }
    }
    return null;
  }
  
  // teamNames: Returns an array of team names
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  // playerNumbers: Returns an array of jersey numbers for a given team name
  function playerNumbers(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
      const team = game[teamKey];
      if (team.teamName === teamName) {
        const numbers = [];
        for (const player in team.players) {
          numbers.push(team.players[player].number);
        }
        return numbers;
      }
    }
    return null; 
  }
  
  // playerStats: Returns an object containing the stats of a given player name
  function playerStats(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
      const team = game[teamKey];
      for (const player in team.players) {
        if (player === playerName) {
          return team.players[player];
        }
      }
    }
    return null; // Player not found
  }
  
  // bigShoeRebounds: Returns the number of rebounds for the player with the largest shoe size
  function bigShoeRebounds() {
    const game = gameObject();
    let maxShoeSize = 0;
    let rebounds = 0;
    for (const teamKey in game) {
      const team = game[teamKey];
      for (const player in team.players) {
        if (team.players[player].shoe > maxShoeSize) {
          maxShoeSize = team.players[player].shoe;
          rebounds = team.players[player].rebounds;
        }
      }
    }
    return rebounds;
  }
  
  
  console.log(numPointsScored("Brendan Haywood")); 
  console.log(shoeSize("Alan Anderson"));
  console.log(teamColors("Brooklyn Nets"));
  console.log(teamNames());
  console.log(playerNumbers("Charlotte Hornets")); 
  console.log(playerStats("Alan Anderson"));  
  