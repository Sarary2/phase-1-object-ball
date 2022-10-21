let gameObject = {
    home: {
    teamName: 'Brooklyn Nets',
    colors: ['Black', 'White'],
    players: {
        AlanAnderson: {Number: 0, Shoe: 16, Points: 22, Rebounds: 12, Assists: 12, Steals: 3, Blocks: 1, SlumDunks: 1},
        ReggieEvans: {Number: 30, Shoe: 14, Points: 12, Rebounds: 12, Assists: 12, Steals: 12, Blocks: 12, SlumDunks: 7},
        BrookLopez: {Number: 11, Shoe: 17, Points: 17, Rebounds: 19, Assists: 10, Steals: 3, Blocks: 1, SlumDunks: 15},
        MasonPlumlee: {Number: 1, Shoe: 19, Points: 26, Rebounds: 12, Assists: 6, Steals: 3, Blocks: 8, SlumDunks: 5},
        JasonTerry: {Number: 31, Shoe: 15, Points: 19, Rebounds: 2, Assists: 2, Steals: 4, Blocks: 11, SlumDunks: 1}
    }  
},
    away : {
    teamName: 'Charlotte Hornets', 
    colors: ['Turquoise', 'Purple'], 
    players: {
        JeffAdrien: { Number: 4, Shoe: 18, Points: 10, Rebounds: 1, Assists: 1, Steals: 2, Blocks: 7, SlumDunks: 2},
        BismakBiyombo: {Number: 0, Shoe: 16, Points: 12, Rebounds: 4, Assists: 7, Steals: 7, Blocks: 15, SlumDunks: 10},
        DeSagnaDiop: {Number: 2, Shoe: 14, Points: 24, Rebounds: 12, Assists: 12, Steals: 4, Blocks: 5, SlumDunks: 5},
        BenGordon: {Number: 8, Shoe: 15, Points: 33, Rebounds: 3, Assists: 2, Steals: 1, Blocks: 1, SlumDunks: 0},
        BrendanHaywood: {Number: 33, Shoe: 15, Points: 6, Rebounds: 12, Assists: 12, Steals: 22, Blocks: 5, SlumDunks: 12}
        }
    }
}


function homeTeamName(){
    return gameObject.home.teamName
}
console.log(homeTeamName())

function numPointsScored(playerName){
   const playersListHome = gameObject.home.players
   const playersListAway = gameObject.away.players


    if(playerName in playersListHome){
        if(playerName === 'AlanAnderson'){
            return playersListHome.AlanAnderson.Points
        }else if(playerName === 'ReggieEvans'){
            return playersListHome.ReggieEvans.Points
        }else if(playerName === 'JasonTerry'){
            return playersListHome.JasonTerry.Points
        }else if(playerName === 'BrookLopez'){
            return playersListHome.BrookLopez.Points
        }else if(playerName === 'MasonPlumlee'){
            return playersListHome.MasonPlumlee.Points
        }
    }else if(playerName in playersListAway){
        if(playerName === 'JeffAdrien'){
            return playersListAway.JeffAdrien.Points
        }else if(playerName === 'BismakBiyombo'){
            return playersListAway.BismakBiyombo.Points
        }else if(playerName === 'DeSagnaDiop'){
            return playersListAway.DeSagnaDiop.Points
        }else if(playerName === 'BenGordon'){
            return playersListAway.BenGordon.Points
        }else if(playerName === 'BrendanHaywood'){
            return playersListAway.BrendanHaywood.Points
        }
    }
}

function shoeSize(playerName){
    const playersListHome = gameObject.home.players
    const playersListAway = gameObject.away.players


    if(playerName in playersListHome){
        if(playerName === 'AlanAnderson'){
            return playersListHome.AlanAnderson.Shoe
        }else if(playerName === 'ReggieEvans'){
            return playersListHome.ReggieEvans.Shoe
        }else if(playerName === 'JasonTerry'){
            return playersListHome.JasonTerry.Shoe
        }else if(playerName === 'BrookLopez'){
            return playersListHome.BrookLopez.Shoe
        }else if(playerName === 'MasonPlumlee'){
            return playersListHome.MasonPlumlee.Shoe
        }
    }else if(playerName in playersListAway){
        if(playerName === 'JeffAdrien'){
            return playersListAway.JeffAdrien.Shoe
        }else if(playerName === 'BismakBiyombo'){
            return playersListAway.BismakBiyombo.Shoe
        }else if(playerName === 'DeSagnaDiop'){
            return playersListAway.DeSagnaDiop.Shoe
        }else if(playerName === 'BenGordon'){
            return playersListAway.BenGordon.Shoe
        }else if(playerName === 'BrendanHaywood'){
            return playersListAway.BrendanHaywood.Shoe
        }
    }
}

function teamColors(teamName){
    if(teamName === gameObject.home.teamName){
        return gameObject.home.colors
    }else if(teamName === gameObject.away.teamName){
        return gameObject.away.colors
    }
}

function playerNumbers(teamName){
    const playersListHome = gameObject.home.players
    const playersListAway = gameObject.away.players
    if(teamName === gameObject.home.teamName){
        return [playersListHome.AlanAnderson.Number, playersListHome.BrookLopez.Number, playersListHome.JasonTerry.Number, playersListHome.MasonPlumlee.Number, playersListHome.ReggieEvans.Number]
    }else if (teamName === gameObject.away.teamName){
        return [playersListAway.BenGordon.Number, playersListAway.BismakBiyombo.Number, playersListAway.BrendanHaywood.Number, playersListAway.DeSagnaDiop.Number, playersListAway.JeffAdrien.Number]
    }
}

function playerStats(playerName){
    const playersListHome = gameObject.home.players
    const playersListAway = gameObject.away.players

    if(playerName in playersListHome){
        if(playerName === 'AlanAnderson'){
            return playersListHome.AlanAnderson
        }else if(playerName === 'ReggieEvans'){
            return playersListHome.ReggieEvans
        }else if(playerName === 'JasonTerry'){
            return playersListHome.JasonTerry
        }else if(playerName === 'BrookLopez'){
            return playersListHome.BrookLopez
        }else if(playerName === 'MasonPlumlee'){
            return playersListHome.MasonPlumlee
        }
    }else if(playerName in playersListAway){
        if(playerName === 'JeffAdrien'){
            return playersListAway.JeffAdrien
        }else if(playerName === 'BismakBiyombo'){
            return playersListAway.BismakBiyombo
        }else if(playerName === 'DeSagnaDiop'){
            return playersListAway.DeSagnaDiop
        }else if(playerName === 'BenGordon'){
            return playersListAway.BenGordon
        }else if(playerName === 'BrendanHaywood'){
            return playersListAway.BrendanHaywood
        }
    }
}

function bigShoeRebounds(){
    const shoeNumOfHome = (Object.values(gameObject.home.players).map(function(item){
        return(item.Shoe)
    }))
    
    const biggestShoeOfHomePlayers = shoeNumOfHome.reduce( (preValue, curValue) => {
        if(preValue > curValue){
            return preValue
        }else{
            return curValue
        }
    })

    const shoeNumbersOfAway = (Object.values(gameObject.away.players).map(function(item){
        return(item.Shoe)
    }))
    
    const biggestShoeOfAwayPlayers = shoeNumbersOfAway.reduce( (pre_Value, curr_Value) => {
        if(pre_Value > curr_Value){
            return pre_Value
        }else{
            return curr_Value
        }
    })

    if(biggestShoeOfHomePlayers > biggestShoeOfAwayPlayers){
        const shoeOwnersStats = Object.values(gameObject.home.players).find(function(item){
            if(item.Shoe === biggestShoeOfHomePlayers){
                return item.Rebounds
            }
        })
        return `Biggest shoe number is: ${biggestShoeOfHomePlayers} and his rebound socre is: ${shoeOwnersStats.Rebounds}`
    }else{
        const shoeOwnersStats = Object.values(gameObject.away.players).find(function(item){
            if(item.Shoe === biggestShoeOfAwayPlayers){
                return item.Rebounds
            }
        })
        return `Biggest shoe number is: ${biggestShoeOfAwayPlayers} and his rebound socre is: ${shoeOwnersStats.Rebounds}`
    } 
}

