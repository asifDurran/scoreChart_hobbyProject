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
const ulParent = document.createElement('ul');
for(let game of worriorsGames)
{
  const {homeTeam, awayTeam} = game;
  const {
    team: aTeam,
     points:aPoints
    } =awayTeam;
  const {
    team:hTeam,
    points:hPoints
  }=homeTeam;
  const gameLi = document.createElement('li');
  const teamNames = `${aTeam} @ ${hTeam}`; 
  let scoreLine; 
  if(aPoints > hPoints)
  {
    scoreLine = `<b>${aPoints}</b>-${hPoints}`;
  }else{
    scoreLine = `${aPoints}-<b>${hPoints}</b>`;
  }
  const worrior = hTeam === 'Golden state' ? homeTeam : awayTeam;
  console.log(worrior);
  gameLi.classList.add(worrior.isWinner ? 'win' : 'loss');
  gameLi.innerHTML = `${teamNames} ${scoreLine}`;
  ulParent.appendChild(gameLi);
  
}
document.body.prepend(ulParent);
//using javaScript