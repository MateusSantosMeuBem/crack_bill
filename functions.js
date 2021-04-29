// It sums the values of all of the sliders and put this value in a input called
// tot_bill
function calcBill(pos){
  let inputs = document.getElementsByClassName('slider')
  let totBill = document.getElementById('tot_bill')
  let slider_value_txt = document.getElementById('slider_value_' + pos)
  let tot_value = document.getElementById('tot_value').value
  let counter = 0
  // Get value of each slider and sum in counter
  for(let i = 0; i < inputs.length; i++){
    counter += Math.round(inputs[i].value*100)
  }
  // Modify value of the text-box in front this slider
  slider_value_txt.value = (inputs[parseInt(pos) - 1].value*100/100).toFixed(2)
  // Show the sum of sliders in this input
  totBill.value = (counter/100).toFixed(2)
  // Verify if the sum of sliders if equal to total bill
  if(totBill.value == tot_value){
    totBill.style.color = '#78b778'
  }else{
    totBill.style.color = '#bd4b4b'
  }
}

function createCalcBody(){
  let tot_value = document.getElementById('tot_value').value
  let tot_people = document.getElementById('tot_people').value
  let calc_body_html = ''
  // Verify if total bill and number of people are bigger than 0
  if((tot_value != 0)&&(tot_people != 0)){
    for(let i = 0; i < parseInt(tot_people); i++){
      calc_body_html += `
        <input type="text" class="input_name" onclick="this.select()" value="Pessoa `+parseInt(i+1)+`">
        <div class="slider_box">
        <input type="range" step=".01" min="0" max="`+tot_value+`" oninput="calcBill(`+parseInt(i+1)+`)" value="0" id="slider_`+parseInt(i+1)+`" class="slider" id="myRange">
        R$
        <input type="text" id="slider_value_`+parseInt(i+1)+`" class="input_value_slider" value="0" readonly>
        </div>
        `
    }
    calc_body_html += `
      Valor Total: R$
      <input type="text" id="tot_bill" class="input_value" value="0" readonly>
    </div>
    `
    document.getElementById('calc_body').innerHTML = calc_body_html
    let tot_bill = document.getElementById('tot_bill')
    // Verify if the sum of sliders if equal to total bill
    if(tot_bill.value == tot_value){
      tot_bill.style.color = '#78b778'
    }else{
      tot_bill.style.color = '#bd4b4b'
    }
  }
}

// Fixe the decimal number in two case later comma
function fixeDecimal(n){
  // Waite n seconds to get started function
  setTimeout(function(){
    let input = document.getElementById('tot_value')
    let input_value = ((Math.round(input.value*100))/100).toFixed(2)
    input.value = input_value
  }, n*1000);
}
