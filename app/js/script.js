
let nome = document.querySelector('.item2');
let email = document.querySelector('.item3');
let oggetto = document.querySelector('.item4');
let messaggio = document.querySelector('.item5');

['focus', 'keyup'].forEach(function(e) {
  nome.addEventListener(e, function() {
    if(nome.value.substr(0,3)!='   ') {
      let str=nome.value;
      while(str[0]==" ") {
        str=str.substr(1);
      }
      document.forms['contatti']['name'].value = '   ' + str;
    }
  })

  email.addEventListener(e, function() {
    if(email.value.substr(0,3)!='   ') {
      let str=email.value;
      while(str[0]==" ") {
        str=str.substr(1);
      }
      document.forms['contatti']['email'].value = '   ' + str;
    }
  })

  oggetto.addEventListener(e, function() {
    if(oggetto.value.substr(0,3)!='   ') {
      let str=oggetto.value;
      while(str[0]==" ") {
        str=str.substr(1);
      }
      document.forms['contatti']['subject'].value = '   ' + str;
    }
  })


  /*
  Inutile - alla fine al messaggio è meglio non mettere gli spazi  altrimenti diventa più brutto una volta che si inizia a scrivere
  messaggio.addEventListener(e, function() {
    if(messaggio.value.substr(0,4)!='\n   ') {
      let str=messaggio.value;
      while(str[0]=="\n") {
        str=str.substr(1);
      }
      while(str[0]==" ") {
        str=str.substr(1);
      }
      document.forms['contatti']['message<---eliminated too'].value = '\n   ' + str;
    }
  })
  
  
  
  */
});