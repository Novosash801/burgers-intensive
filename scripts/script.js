const btn = document.querySelector('#main-action-button'),
      products = document.querySelector('#products'),
      links = document.querySelectorAll('.menu-item > a'),
      buttons = document.querySelectorAll('.product-button'),
      order =  document.querySelector('#order'),
      burger = document.querySelector('#burger'),
      name = document.querySelector('#name'),
      phone = document.querySelector('#phone'),
      orderBtn = document.querySelector('#order-action'),
      changeCurrency = document.querySelector('#change-currency');
      scrollBtn = document.querySelector('.pageup');
let prices = document.querySelectorAll('.products-item-price');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    products.scrollIntoView({behavior: 'smooth'});
});

links.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector(`#${link.getAttribute('data-link')}`).scrollIntoView({behavior: 'smooth'});
    });
});

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
       order.scrollIntoView({behavior: 'smooth'});
    });
});

orderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let hasError = false;
    let inputArray = [burger, name, phone];

    inputArray.forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = 'red';
            hasError = true;
        } else {
            item.parentElement.style.background = 'green';
        }
    });

    if (!hasError) {
        inputArray.forEach(item => {
            item.value = '';
        })
        alert('Спасибо за заказ! Мы скоро свяжемся с вами!')
    }
})


changeCurrency.addEventListener('click', (e) => {
    let currentCurrency = e.target.innerText;
    let newCurrency = '$';
    let coef = 1;

    switch (currentCurrency) {
        case '$':
            newCurrency = '₽';
            coef = 90;
            break;
        case '₽':
            newCurrency = 'BYN';
            coef = 3;
            break;
        case 'BYN':
            newCurrency = '€';
            coef = 0.9;
           break;
        case '€':
            newCurrency = '¥';
            coef = 6.9;
            break;
    }

    e.target.innerText = newCurrency;
    prices.forEach(item => {
        item.innerText = +(item.getAttribute('data-base-price') * coef).toFixed(1) + ' ' + newCurrency;
    })
})

// smooth scroll & page up

window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
        scrollBtn.classList.remove('pageup-hide');
    } else if (window.scrollY < 700) {
        scrollBtn.classList.add('pageup-hide');
    }
})

scrollBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
})











