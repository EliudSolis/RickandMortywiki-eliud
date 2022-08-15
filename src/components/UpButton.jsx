import React from 'react'

const UpButton = () => {

    $(document).ready(function(){

        $('.ir-arriba').click(function(){
            $('body, html').animate({
                scrollTop: '0px'
            }, 300);
        });
    
        $(window).scroll(function(){
            if( $(this).scrollTop() > 0 ){
                $('.ir-arriba').slideDown(300);
            } else {
                $('.ir-arriba').slideUp(300);
            }
        });
    
    });
    

  return (
    <div className='ir-arriba'><button className='up__btn'><i class='bx bxs-chevron-up'></i></button></div>
  )
}

export default UpButton