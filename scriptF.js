//CPF como xxx.xxx.xxx-xx

function mascara(i){
   
   var v = i.value;
   
   if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
      i.value = v.substring(0, v.length-1);
      return;
   }
   
   i.setAttribute("maxlength", "14");
   if (v.length == 3 || v.length == 7) i.value += ".";
   if (v.length == 11) i.value += "-";

}

// MODO ESCURO 

function myFunction() {
   var element = document.body;
   var container = document.querySelector('.container');
   element.classList.toggle("dark-mode");

   container.style.boxShadow = '0 0 1rem var(--color-primary)';
 }