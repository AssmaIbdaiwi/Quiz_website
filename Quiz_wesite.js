// let name= document.getElementById('firstname');
// document.getElementById('yourname').innerHTML='welcome'+'fname';
////////////////



        document.getElementById("dropdown1").onchange = function ebtn(){
        if (this.value === 'english') {
          document.getElementById('englishtxt').style.display='block';
          document.getElementById('IQtxt').style.display='none';
          document.getElementById('technicaltxt').style.display='none';
          document.getElementById('startbtne').style.display='block';

        } else if (this.value === 'iq') {
            document.getElementById('IQtxt').style.display='block';
            document.getElementById('englishtxt').style.display='none';
            document.getElementById('technicaltxt').style.display='none';
            document.getElementById('startbtiq').style.display='block';

        } else if (this.value === 'tec') {
            document.getElementById('technicaltxt').style.display='block';
            document.getElementById('englishtxt').style.display='none';
            document.getElementById('IQtxt').style.display='none';
            document.getElementById('startbtntec').style.display='block'

        }else{  
        document.getElementById('IQtxt').style.display='none';
        document.getElementById('technicaltxt').style.display='none';
        document.getElementById('englishtxt').style.display='none';

        document.getElementById('startbtiq').style.display='none'
        document.getElementById('startbtntec').style.display='none';
        document.getElementById('startbtne').style.display='none';
    }
      }









      document.getElementById("moon").onclick = function icon(){

        document.getElementById('sun').style.display='block';
        document.getElementById('moon').style.display='none';
  document.getElementById('fcircle2').style.display = 'block';
  document.getElementById('scircle2').style.display = 'block';
  document.getElementById('border1').style.background = 'none';
  document.getElementById('fcircle1').style.background = '#023047'
  document.getElementById('scircle1').style.background = '#023047'
  document.getElementById('wtxt').style.color = '#023047';
  document.getElementById('dropdown1').style.background = '#0D83AE'
  document.getElementById('englishtxt').style.color = '#023047';
  document.getElementById('IQtxt').style.color = '#023047';
  document.getElementById('technicaltxt').style.color = '#023047'
  document.getElementById('startbtne').style.background = '#0D83AE' ;
  document.getElementById('startbtniq').style.background = '#0D83AE' ;
  document.getElementById('startbtntec').style.background = '#0D83AE'
}
document.getElementById("sun").onclick = function icon(){
  
        document.getElementById('sun').style.display='none';
        document.getElementById('moon').style.display='block';
        document.getElementById('fcircle2').style.display = 'none';
        document.getElementById('scircle2').style.display = 'none';
        document.getElementById('border1').style.background = '#023047';
        document.getElementById('fcircle1').style.background = '#EC8757';
        document.getElementById('scircle1').style.background = '#EC8757';
        document.getElementById('wtxt').style.color = '#E5E5E5';
        document.getElementById('dropdown1').style.background = '#EC8757';
        document.getElementById('englishtxt').style.color = '#E5E5E5';
        document.getElementById('IQtxt').style.color = '#E5E5E5';
        document.getElementById('technicaltxt').style.color = '#E5E5E5';
        document.getElementById('startbtne').style.background = '#EC8757' ;
        document.getElementById('startbtiq').style.background = '#EC8757' ;
        document.getElementById('startbtntec').style.background = '#EC8757' ;
}


  

