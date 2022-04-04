// let name= document.getElementById('firstname');
// document.getElementById('yourname').innerHTML='welcome'+'fname';
////////////////



        document.getElementById("dropdown1").onchange = function ebtn(){
        if (this.value === 'english') {
          document.getElementById('englishtxt').style.display='block';
          document.getElementById('IQtxt').style.display='none';
          document.getElementById('technicaltxt').style.display='none';
          document.getElementById('startbtne').style.display='block';
          document.getElementById('startbtiq').style.display='none'; // add
          document.getElementById('startbtntec').style.display='none' ///add

        } else if (this.value === 'iq') {
            document.getElementById('IQtxt').style.display='block';
            document.getElementById('englishtxt').style.display='none';
            document.getElementById('technicaltxt').style.display='none';
            document.getElementById('startbtiq').style.display='block';
            document.getElementById('startbtne').style.display='none'; ////add
            document.getElementById('startbtntec').style.display='none' /// add

        } else if (this.value === 'tec') {
            document.getElementById('technicaltxt').style.display='block';
            document.getElementById('englishtxt').style.display='none';
            document.getElementById('IQtxt').style.display='none';
            document.getElementById('startbtntec').style.display='block'
            document.getElementById('startbtne').style.display='none';    ////add
            document.getElementById('startbtiq').style.display='none'     ///add

        }else{  
        document.getElementById('IQtxt').style.display='none';
        document.getElementById('technicaltxt').style.display='none';
        document.getElementById('englishtxt').style.display='none';

        document.getElementById('startbtiq').style.display='none'
        document.getElementById('startbtntec').style.display='none';
        document.getElementById('startbtne').style.display='none';
    }
      }




      document.querySelector(".dark").onclick = function icon( ) {
        let moon = document.querySelector('#moon');
        let sun = document.querySelector('#sun');
        let b1 = document.querySelector('.border1');
        let b2 = document.querySelector('.cir1')
        let t=document.querySelector('.txt1')
        let s=document.querySelector('form')
        b2.classList.toggle('active');
        b1.classList.toggle('active');
        moon.classList.toggle('active');
        sun.classList.toggle('active');
        t.classList.toggle('active');
        s.classList.toggle('active')
      }




      document.getElementById("moon").onclick = function icon(){
        document.getElementById('logo').style.display='block';
        document.getElementById('logo1').style.display='none';


}
document.getElementById("sun").onclick = function icon(){
  document.getElementById('logo').style.display='none';
  document.getElementById('logo1').style.display='block';


}


