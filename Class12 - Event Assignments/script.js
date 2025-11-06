//Using ID
function color1() {
    document.getElementById('btn1').style.backgroundColor='blue'
    // document.getElementsByTagName('button')[0].style.backgroundColor = 'red'

}

//Using Tagname
function color2() {
    // document.getElementById('btn2').style.backgroundColor='blue'
    document.getElementsByTagName('button')[1].style.backgroundColor = 'yellow'

}

//Using QuerySelector
function color3(){
    // document.querySelector('.btn3').style.backgroundColor = "blue"
    document.getElementsByClassName('btn3')[2].style.backgroundColor = 'green'
}