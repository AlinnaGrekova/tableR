function formTable(selector){
    var wrapper = document.querySelector(selector);
    var form = wrapper.getElementsByTagName("form")[0];
    var table = wrapper.getElementsByTagName("table")[0];
    
    form.onsubmit = function(ev){
      ev = ev || this;
      ev.preventDefault();
      
      var tr = document.createElement("tr"), td;
      
      for(let i = 0; i < 4; i++){
        td = document.createElement("td");
        td.innerHTML = this.elements[i].value;
        tr.appendChild(td);
      }    
      table.appendChild(tr);    
    }  
  }
  formTable(".wrapper");

  function Red(){
  var tds=document.querySelectorAll('td');
  for (var i=0; i<tds.length; i++){
    tds[i].addEventListener('click', function func(){
      var input=document.createElement('input');
      input.value=this.innerHTML;
      this.innerHTML='';
      this.appendChild(input);

      var td=this;
      input.addEventListener('blur', function(){
        td.innerHTML=this.value;
        td.addEventListener('click', func);
      });
      this.removeEventListener('click', func);
    });
  }
}

function Del() {
  var delTable=document.getElementById('table');
  for(var i=table.rows.length-1; i>0; i--){
      table.deleteRow(i);
  }
}
