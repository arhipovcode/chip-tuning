let modFormBtn = document.querySelector('.modal-form button');
let modInput = document.querySelector('.modal-form input');
let modErrorBlock = document.querySelector('.modal-form .error-block');
let modal = document.querySelector('.modal-wrap');
let closedBtn = document.querySelector('.closed');
let modalLinks = document.querySelectorAll('.modal-link');
let policyLinks = document.querySelectorAll('.block-policy-link');
let body = document.querySelector('body');

modalLinks.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();

    body.style.overflow = 'hidden';
    modal.classList.remove('fadeOut');
    modal.classList.add('modal-active', 'animated', 'fadeIn');
  });
});

policyLinks.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
  })
});

closedBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if(e.target === modal) {
    closeModal();
  }
});

function closeModal() {
  body.style.overflow = 'initial';
  modal.classList.add('fadeOut');
  setTimeout(() => {
    modal.classList.remove('modal-active','fadeIn');
  }, 1000);
}

modFormBtn.addEventListener('click', (e) => {
  let target = e.target;

  if(target == modFormBtn) {
    e.preventDefault();

    if(modInput.value == '') {
      modErrorBlock.classList.add('error-active');

      setTimeout(() => {
        modErrorBlock.classList.remove('error-active');
        modErrorBlock.classList.add('error-out');
      }, 1500);
      setTimeout(() => {
        modErrorBlock.classList.remove('error-out');
      }, 2700);
    }
  }
});