/*
function logDate(){
  console.log(new Date());
}

logDate();

function square(n){
  return n * n;
}

let n = 3;
console.log(square(n));

let nextChristmas = new Date('2024-12-25 00:00');
function updateParagraph(){
  let now = new Date();
  let seconds = (nextChristmas.getTime() - now.getTime()) / 1000;
  document.getElementById('next-christmas').innerText =
    '次のクリスマスまで後' + seconds + '秒。';
}
setInterval(updateParagraph, 50);

function areaOfCircle(r){
  let area = r * r * 3.14;
  return area;
}

document.write('<p>半径 5cm の円の面積は ' + areaOfCircle(5) + ' です。</p>');
document.write('<p>半径 10cm の円の面積は ' + areaOfCircle(10) + ' です。</p>');
document.write('<p>半径 15cm の円の面積は ' + areaOfCircle(15) + ' です。</p>');
*/
mainTask(317);
function mainTask(initialValue){
  let collaztResults = {"trialCounter": 0,"resultValue" : initialValue};
  resultDisplay(collaztResults);
  for(i = 0 ; i < 100 ; i++){
    if(collaztResults.resultValue!==1){
      collatzFunction(collaztResults);
      resultDisplay(collaztResults);
    }
  }
}
function resultDisplay(collaztResults){
  document.write('Trial= '+collaztResults.trialCounter
                + ', Value= '+collaztResults.resultValue+'<br>');
}
function collatzFunction(collaztResults){
  collaztResults.trialCounter++
  if(collaztResults.resultValue % 2 === 0){
    collaztResults.resultValue= collaztResults.resultValue / 2;
  }else{
    collaztResults.resultValue = collaztResults.resultValue * 3 + 1;
  }
}