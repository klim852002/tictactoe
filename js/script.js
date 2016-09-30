document.addEventListener('DOMContentLoaded', init)

function init () {
  // alert ('script loaded')
  // }
  // var x = 'X';
  // var o = 'O';
  // var playerOne = x;
  var currentPlayer = 1
  var blocks = document.querySelectorAll('.block')
  var clickCount = 0
    // console.log(blocks)
    // eventlistener for clicking by x and o
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', blockClick)
  }
  // set each block as a variable
  var cell1 = document.querySelector('#cell1')
  var cell2 = document.querySelector('#cell2')
  var cell3 = document.querySelector('#cell3')
  var cell4 = document.querySelector('#cell4')
  var cell5 = document.querySelector('#cell5')
  var cell6 = document.querySelector('#cell6')
  var cell7 = document.querySelector('#cell7')
  var cell8 = document.querySelector('#cell8')
  var cell9 = document.querySelector('#cell9')

  // write function to append click to block div
  function blockClick () {
    if (currentPlayer === 1)
    // && this.hasClass === '')
      {
      clickCount++
      this.classList.add('clickx')
    } else {
      clickCount++
      this.classList.add('clicko')
    }
    console.log(blocks)
    checkWin()
    checkDraw()
    switchPlayer()

  }
  // console.log(blockClick())
  // switch player
  function switchPlayer () {
    if (currentPlayer === 1) {
      currentPlayer = 2
    } else {
      currentPlayer = 1
    }
    // console.log(currentPlayer)
  }
  // botton to refresh the page
  document.getElementById('reloadBtn').addEventListener('click', refresh)

  function refresh () {
    location.reload()
  }
  //  set out the winning condition for x and o
  function checkWin () {
    if (
      ((cell1.classList.contains('clickx') && cell2.classList.contains('clickx') && cell3.classList.contains('clickx')) ||
        (cell4.classList.contains('clickx') && cell5.classList.contains('clickx') && cell6.classList.contains('clickx')) ||
        (cell7.classList.contains('clickx') && cell8.classList.contains('clickx') && cell9.classList.contains('clickx')) ||

        (cell1.classList.contains('clickx') && cell4.classList.contains('clickx') && cell7.classList.contains('clickx')) ||
        (cell2.classList.contains('clickx') && cell5.classList.contains('clickx') && cell8.classList.contains('clickx')) ||
        (cell3.classList.contains('clickx') && cell6.classList.contains('clickx') && cell9.classList.contains('clickx')) ||

        (cell1.classList.contains('clickx') && cell5.classList.contains('clickx') && cell9.classList.contains('clickx')) ||
        (cell3.classList.contains('clickx') && cell5.classList.contains('clickx') && cell7.classList.contains('clickx')))) {
      window.alert('X is winner')
    } else if (
      ((cell1.classList.contains('clicko') && cell2.classList.contains('clicko') && cell3.classList.contains('clicko')) ||
        (cell4.classList.contains('clicko') && cell5.classList.contains('clicko') && cell6.classList.contains('clicko')) ||
        (cell7.classList.contains('clicko') && cell8.classList.contains('clicko') && cell9.classList.contains('clicko')) ||

        (cell1.classList.contains('clicko') && cell4.classList.contains('clicko') && cell7.classList.contains('clicko')) ||
        (cell2.classList.contains('clicko') && cell5.classList.contains('clicko') && cell8.classList.contains('clicko')) ||
        (cell3.classList.contains('clicko') && cell6.classList.contains('clicko') && cell9.classList.contains('clicko')) ||

        (cell1.classList.contains('clicko') && cell5.classList.contains('clicko') && cell9.classList.contains('clicko')) ||
        (cell3.classList.contains('clicko') && cell5.classList.contains('clicko') && cell7.classList.contains('clicko')))) {
      window.alert('O is winner')
    }
  }
// draw condition
  function checkDraw () {
    if (clickCount === 9) {
      window.alert('Draw')
    }
  }
}
// alert('box is clicked')
// alert('box' + this.id + ' is clicked')
// this.innerHTML = 'something'
// this.style}
// this.classList.add('clickx')
// player click, X appears
// switch player
// loop for 9 times till end of game OR till one player wins

// var winnning ([1,2,3],[4,5,6,],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7])
