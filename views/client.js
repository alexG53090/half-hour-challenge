$(document).ready(function(){
  getBroncosData().then(function(data){
    formatBroncos(data).then(function(broncos){
      lineBroncos(broncos).then(function(players){
        printBroncos(players).then(function(players){
          console.log(players)
        })
      })
    })
  })
})

function getBroncosData(){
  return new Promise(function(resolve, reject){
    $.get('/get', function(data){
      // console.log(data)
      resolve(data);
    })
  })
}

function formatBroncos(data){
  return new Promise(function(resolve, reject){
    var broncos =[];
    for(i = 0; i < data.bcos.length; i = i +1){
      var bronco = data.bcos[i]
      broncos.push(bronco)
    }
    resolve(broncos)
  })
}


function lineBroncos(broncos){
  var container = document.getElementById('broncosContainer')
  return new Promise(function(resolve, reject){
    var players = []
    broncos.forEach(function(item, index, array){
      var player = item;
      players.push(player);
      console.log(player)
      var listItem = document.createElement('li')
      var content = document.createTextNode(player)
    })
    resolve(players)
  })
}

function printBroncos(players){
  listItem.appendChild(player)
  container.appendChild(listItem);
}

//
//
// listItem.appendChild(player)
// container.appendChild(listItem);
