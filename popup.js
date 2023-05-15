var team_1_code = document.getElementById("team-1-code");
var team_2_code = document.getElementById("team-2-code");
var team_1_name = document.getElementById("team-1-name");
var team_2_name = document.getElementById("team-2-name");
var team_1_score = document.getElementById("team-1-score");
var team_2_score = document.getElementById("team-2-score");
var team_1_logo = document.getElementById("team-1-logo");
var team_2_logo = document.getElementById("team-2-logo");
var team_1_overs = document.getElementById("team-1-overs");
var team_2_overs = document.getElementById("team-2-overs");
var team_1_wickets = document.getElementById("team-1-wickets");
var team_2_wickets = document.getElementById("team-2-wickets");
var date = document.getElementById("date");
var venue = document.getElementById("venue");
var statusMessage = document.getElementById("status");
var headline = document.getElementById("headline");
var match_status = document.getElementById("match_status");
var next = document.getElementById("next");
var currentIndex = 0;
var iplData = {};
const apiLink =
  "https://api.cricapi.com/v1/currentMatches?apikey=bef4b6e4-0fbb-4e11-9410-6e16e2ca5ab1&offset=0";

// setValues
var setValues = (values) => {
  headline.innerHTML = values.name;
  team_1_code.innerHTML = values.teamInfo[0].shortname;
  team_2_code.innerHTML = values.teamInfo[1].shortname;
  team_1_name.innerHTML = values.teamInfo[0].name;
  team_2_name.innerHTML = values.teamInfo[1].name;
  team_1_score.innerHTML = values.score[0].r;
  team_2_score.innerHTML = values.score[1].r;
  team_1_logo.src = values.teamInfo[0].img.replace("48", "128");
  team_2_logo.src = values.teamInfo[1].img.replace("48", "128");
  team_1_overs.innerHTML = values.score[0].o;
  team_2_overs.innerHTML = values.score[1].o;
  team_1_wickets.innerHTML = values.score[0].w;
  team_2_wickets.innerHTML = values.score[1].w;
  date.innerHTML = values.dateTimeGMT; // convert to date
  venue.innerHTML = values.venue;
  statusMessage.innerHTML = values.status;
  if (values.matchStarted && !values.matchEnded) {
    match_status.style.backgroundColor = "green";
  } else {
    match_status.style.backgroundColor = "red";
  }
};

// get match data from api
var getScores = async () => {
  fetch(apiLink)
    .then((response) => response.json())
    .then((data) => {
      values = data;
      iplData = values.data;
      setValues(iplData[0]);
    })
    .catch((error) => {
      // Handle any errors that occur during the fetch request
      console.error("Error:", error);
    });
};

getScores();

next.addEventListener("click", () => {
  console.log("next clicked");
  currentIndex++;
  if (currentIndex >= iplData.length) {
    currentIndex = 0;
  }
  setValues(iplData[currentIndex]);
});
