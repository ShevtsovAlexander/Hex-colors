const btnChange = document.querySelector('.btn-primary');
const hexCode = document.querySelector('#hex-code');
const h2 = document.querySelector('.h2');


var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
btnChange.addEventListener('click', () => {
    let color = colorChange()
    hexCode.innerHTML = `${color}`
    document.body.style.background = `#${color}`
    btnChange.style.background = `#${color}`
})
function colorChange() {
        let result = [];

         while(result.length < 6) {
            result.push(hex_numbers[Math.floor(Math.random() * hex_numbers.length)])
        } 
       return result.join('')
}
