/* const Ani01 = document.querySelector('.subtitle01'),
Ani02 = document.querySelector('.subtitle02'),
        Ani03 = document.querySelector('.subtitle03'),
        Ani04 = document.querySelector('.subtitle04'); */
        
        
        /*     let A = Ani01.offsetHeight,
        B = Ani02.offsetHeight,
        C = Ani03.offsetHeight,
        D = Ani04.offsetHeight;
        */
       
       /*
       console.log(A,B,C,D) */
    
        const Ani01 = document.querySelector('.subtitle01'),
        Ani02 = document.querySelector('.subtitle02'),
        Ani03 = document.querySelector('.subtitle03'),
        Ani04 = document.querySelector('.subtitle04');
        
    
function aa() {
    A = window.pageYOffset
    B = Ani01.offsetHeight
    C = Ani02.offsetHeight
    D = Ani03.offsetHeight
    E = Ani04.offsetHeight
     
    console.log(A,B,C,Ani01,Ani02,Ani03,Ani04,)
    if (B <= A) {
        Ani01.classList.add('on')
    }
    if (B + C <= A) {
        Ani01.classList.remove('on')
        Ani02.classList.add('on')
    }
    if (B + C + D <= A) {
        Ani02.classList.remove('on')
        Ani03.classList.add('on')
    }
    if (B + C + D + E <= A) {
        Ani03.classList.remove('on')
        Ani04.classList.add('on')
    }

}
window.addEventListener('scroll', aa)
    
    
    

