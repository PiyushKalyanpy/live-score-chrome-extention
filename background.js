
const team_1_code = document.getElementById('team_1_code');
const team_2_code = document.getElementById('team_2_code');
const team_1_name = document.getElementById('team_1_name');
const team_2_name = document.getElementById('team_2_name');
const team_1_score = document.getElementById('team_1_score');
const team_2_score = document.getElementById('team_2_score');
const team_1_logo = document.getElementById('team_1_logo');
const team_2_logo = document.getElementById('team_2_logo');
const team_1_overs = document.getElementById('team_1_overs');
const team_2_overs = document.getElementById('team_2_overs');
const team_1_wickets = document.getElementById('team_1_wickets');
const team_2_wickets = document.getElementById('team_2_wickets');
const date = document.getElementById('date');
const venue = document.getElementById('venue');
const status = document.getElementById('status');

const setValues = () => {
    team_1_code.innerHTML = "IND";
}

console.log("Hello from background.js");

setValues();
const getMatchData = async () => {
    status.innerHTML = "Fetching Data...";
    venue.innerText = "Fetching Data...";
    const response = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=bef4b6e4-0fbb-4e11-9410-6e16e2ca5ab1&offset=0');
    const data = await response.json();
    // filter data where matchType is t20

    data = data.filter((match) => match.type === 't20');

    console.log(data);
}

getMatchData();