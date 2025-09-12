// assets/js/app.js
document.addEventListener('DOMContentLoaded', ()=> {
  const burger = document.querySelector('.burger');
  const mobile = document.querySelector('.mobile-menu');

  if(burger && mobile){
    burger.addEventListener('click', ()=> {
      const open = mobile.getAttribute('data-open') === 'true';
      mobile.setAttribute('data-open', !open);
      mobile.style.display = open ? 'none' : 'block';
      burger.setAttribute('aria-expanded', String(!open));
    });

    // Close when clicking outside
    document.addEventListener('click', (e)=> {
      if(!mobile.contains(e.target) && !burger.contains(e.target)){
        mobile.style.display = 'none';
        mobile.setAttribute('data-open', 'false');
        burger.setAttribute('aria-expanded','false');
      }
    });
  }

  // Smooth internal anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    })
  });
});
