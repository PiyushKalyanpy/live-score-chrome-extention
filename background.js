

const getMatchData = async () => {
    const response = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=bef4b6e4-0fbb-4e11-9410-6e16e2ca5ab1&offset=0');
    const data = await response.json();
    // filter data where matchType is t20

    data = data.filter((match) => match.type === 't20');

    console.log(data);
}

getMatchData();