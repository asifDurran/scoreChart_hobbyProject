const worriorsGames = [{
   awayTeam: {
     team: 'Golden state',
     points: 119,
     isWinner: true
   },
   homeTeam: {
     team: 'Houstan',
     points: 106,
     isWinner: false
   }
},
{
  awayTeam: {
    team: 'Golden state',
    points: 105,
    isWinner: true
  },
  homeTeam: {
    team: 'Houstan',
    points: 99,
    isWinner: false
  }
},
{
  homeTeam: {
    team: 'Golden state',
    points: 99,
    isWinner: false
  },
  awayTeam: {
    team: 'Houstan',
    points: 110,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden state',
    points: 109,
    isWinner: true
  },
  awayTeam: {
    team: 'Houstan',
    points: 98,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden state',
    points: 120,
    isWinner: true
  },
  homeTeam: {
    team: 'Houstan',
    points: 109,
    isWinner: false
  }
},
{
  homeTeam: {
    team: 'Golden state',
    points: 94,
    isWinner: false
  },
  awayTeam: {
    team: 'Houstan',
    points: 109,
    isWinner: true
  }
},
{
  awayTeam: {
    team: 'Golden state',
    points: 121,
    isWinner: true
  },
  homeTeam: {
    team: 'Houstan',
    points: 109,
    isWinner: false
  }
}
]


const makeChart = (games,targetTeam) =>{
  const ulParent = document.createElement('ul');
  for(let game of games)
{
  const gameLi = document.createElement('li');
  gameLi.innerHTML = getScoreLine(game);
  gameLi.classList.add(isWinner (game, targetTeam) ? 'win' : 'loss');
  ulParent.appendChild(gameLi); 
}
return ulParent;
};
const isWinner = ({homeTeam,awayTeam},targetTeam)=>{
 const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
 return target.isWinner;
}
const getScoreLine = ({homeTeam, awayTeam}) =>{
  const {team : aTeam, points: aPoints} = awayTeam;
  const {team : hTeam, points: hPoints } = homeTeam;
  const teamNames = `${aTeam} @ ${hTeam}`;
  let scoreLine; 
  if(aPoints > hPoints)
  {
    scoreLine = `<b>${aPoints}</b>-${hPoints}`;
  }else{
    scoreLine = `${aPoints}-<b>${hPoints}</b>`;
  }
  return `${teamNames} - ${scoreLine}`;
}
const gsSection = document.querySelector('#gs');
const hrSection = document.querySelector('#hr');

const gsChart = makeChart(worriorsGames, 'Golden State');
const hrChart = makeChart(worriorsGames, 'Houstan');
gsSection.appendChild(gsChart);
hrSection.appendChild(hrChart);


