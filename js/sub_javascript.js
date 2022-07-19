'use strict';
//상품수량 1씩 증가/감소
(function(){
  const cartPlus = document.querySelector(".cart_plus");
  const cartMinus = document.querySelector(".cart_minus");
  let count = 1;

  cartPlus.addEventListener('click',function(){
    count = count + 1
    document.querySelector(".cart_quantity").innerText = count
  })

  cartMinus.addEventListener('click',function(){
    count = count - 1
    if(count<1){
      count = 1
    }
    document.querySelector(".cart_quantity").innerText = count
  })
})();
//이 책을 구매한 분들이 함께 구매한 상품입니다 prev/next button
(function () {
  const otherBookContainer = document.querySelectorAll('.other_book_container');
  const otherPrev = document.querySelector('.other_prev');
  const otherNext = document.querySelector('.other_next');
  let otherIndex = 1;
  let otherAdd;
  let otherSlide;
  let otherLogic;

  otherAdd = (num) => {
    otherLogic(otherIndex += num)
  }

  otherSlide = (num) => {
    otherLogic(otherIndex = num)
  }

  otherLogic = (num) => {
    if (num > otherBookContainer.length) {
      otherIndex = 1
    }
    if (num < 1) {
      otherIndex = otherBookContainer.length
    }
    for (let i = 0; i < otherBookContainer.length; i++) {
      const element = otherBookContainer[i];
      console.log(otherBookContainer)
      element.classList.remove('ch_flex')
    }
    otherBookContainer[otherIndex - 1].classList.add('ch_flex')
  }

  otherLogic(otherIndex)

  otherPrev.addEventListener('click', () => {
    otherAdd(-1)
  })

  otherNext.addEventListener('click', () => {
    otherAdd(1)
  })
})();

//정지우의 다른 작품 prev/next btn
(function () {
  const authorOtherWrap = document.querySelectorAll('.author_other_wrap');
  const otherBookPrev = document.querySelector('.otherbook_prev');
  const otherBookNext = document.querySelector('.otherbook_next');
  let otherBookIndex = 1;
  let otherBookAdd;
  let otherBookSlide;
  let otherBookLogic;

  otherBookAdd = (num) => {
    otherBookLogic(otherBookIndex += num)
  }

  otherBookSlide = (num) => {
    otherBookLogic(otherBookIndex = num)
  }

  otherBookLogic = (num) => {
    if (num > authorOtherWrap.length) {
      otherBookIndex = 1
    }
    if (num < 1) {
      otherBookIndex = authorOtherWrap.length
    }
    for (let i = 0; i < authorOtherWrap.length; i++) {
      const element = authorOtherWrap[i];
      console.log(authorOtherWrap)
      element.classList.remove('ch_flex')
    }
    authorOtherWrap[otherBookIndex - 1].classList.add('ch_flex')
  }

  otherBookLogic(otherBookIndex)

  otherBookPrev.addEventListener('click', () => {
    otherBookAdd(-1)
  })

  otherBookNext.addEventListener('click', () => {
    otherBookAdd(1)
  })
})();
//gift prev/next btn
(function () {
  const giftTopWrap = document.querySelectorAll('.gift_top_wrap');
  const topPrev = document.querySelector('.top_prev');
  const topNext = document.querySelector('.top_next');
  let giftTopIndex = 1;
  let giftTopAdd;
  let giftTopSlide;
  let giftTopLogic;

  giftTopAdd = (num) => {
    giftTopLogic(giftTopIndex += num)
  }

  giftTopSlide = (num) => {
    giftTopLogic(giftTopIndex = num)
  }

  giftTopLogic = (num) => {
    if (num > giftTopWrap.length) {
      giftTopIndex = 1
    }
    if (num < 1) {
      giftTopIndex = giftTopWrap.length
    }
    for (let i = 0; i < giftTopWrap.length; i++) {
      const element = giftTopWrap[i];
      console.log(giftTopWrap)
      element.classList.remove('ch_flex')
    }
    giftTopWrap[giftTopIndex - 1].classList.add('ch_flex')
  }

  giftTopLogic(giftTopIndex)

  topPrev.addEventListener('click', () => {
    giftTopAdd(-1)
  })

  topNext.addEventListener('click', () => {
    giftTopAdd(1)
  })
})();
//gift prev/next btn
(function () {
  const giftBottomWrap = document.querySelectorAll('.gift_bottom_wrap');
  const bottomPrev = document.querySelector('.bottom_prev');
  const bottomNext = document.querySelector('.bottom_next');
  let giftBottomIndex = 1;
  let giftBottomAdd;
  let giftBottomSlide;
  let giftBottomLogic;

  giftBottomAdd = (num) => {
    giftBottomLogic(giftBottomIndex += num)
  }

  giftBottomSlide = (num) => {
    giftBottomLogic(giftBottomIndex = num)
  }

  giftBottomLogic = (num) => {
    if (num > giftBottomWrap.length) {
      giftBottomIndex = 1
    }
    if (num < 1) {
      giftBottomIndex = giftBottomWrap.length
    }
    for (let i = 0; i < giftBottomWrap.length; i++) {
      const element = giftBottomWrap[i];
      console.log(giftBottomWrap)
      element.classList.remove('ch_flex')
    }
    giftBottomWrap[giftBottomIndex - 1].classList.add('ch_flex')
  }

  giftBottomLogic(giftBottomIndex)

  bottomPrev.addEventListener('click', () => {
    giftBottomAdd(-1)
  })

  bottomNext.addEventListener('click', () => {
    giftBottomAdd(1)
  })
})();
//책속으로
(function(){
  const intoOpenBtn = document.querySelector(".into_open_btn");
  const intoCloseBtn = document.querySelector(".into_close_btn");
  const intotheBook = document.querySelector(".intothe_book");
  const lastOpenBtn = document.querySelector(".last_open_btn");
  const lastCloseBtn = document.querySelector(".last_close_btn");
  const lastClose = document.querySelector(".last_close");

  intoOpenBtn.addEventListener('click',function(){
    intotheBook.style.display = "block"
    intoOpenBtn.style.display = "none"
  })

  intoCloseBtn.addEventListener('click',function(){
    intotheBook.style.display = "none"
    intoOpenBtn.style.display = "block"
  })

  lastOpenBtn.addEventListener('click',function(){
    lastClose.style.display = "block"
    lastOpenBtn.style.display = "none"
  })

  lastCloseBtn.addEventListener('click',function(){
    lastClose.style.display = "none"
    lastOpenBtn.style.display = "block"
  })
})();
