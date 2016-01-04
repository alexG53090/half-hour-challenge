$(document).ready(function(){
  getBroncosData().then(function(data){
    printBroncos(data).then(function(data){
      console.log(data)
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

function printBroncos(data){
  for(i = 0; i < data.bcos.length; i = i +1){
    var bronco = data.bcos[i]
    console.log(bronco)
    var listItem = document.createElement('p')
  }
}
