

async function kural(){
    var number = document.getElementById('kural').value
     var result = await fetch(`https://api-thirukkural.vercel.app/api?num=${number}`);
      var datas = await result.json()
      console.log(datas)
    var result=document.querySelector('.container-fluid')
    
      result.innerHTML=`
      <hr style=color:white ;>
      <div class="section">
      <h2> ${datas.sect_tam}-${datas.chapgrp_tam}</h2>
      <h4>அதிகாரம்:${datas.chap_tam}</h4>
      <h4> குறள்:</h4>
      <h5>${datas.line1}<br>
             ${datas.line2}</h5>
      <h4>பொருள்:</h4>
      <h5>${datas.tam_exp}</h5>
      </div>
      <br>
      <hr style=color:white;>

      <div class="eng">
      <h2>${datas.sect_eng}-${datas.chapgrp_eng}</h2>
      <h4>Chapter:${datas.chap_eng}<h4>
      <h4>Kural:</h4>
      <h5>${datas.eng}</h5>
      <h4>Explanation:</h4>
    <h5>${datas.eng_exp}</h5>
    </div>
    <br>
    <hr style=color:white;>
      `
     }
  
  kural()
  
  var button = document.querySelector('.btn')
  button.addEventListener('click',kural)