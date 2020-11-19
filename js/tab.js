'use strict';

const tabBlock = document.querySelectorAll('.faq-tab-head');
const tabBlockVisible = document.querySelectorAll('.faq-tab-hidden_block');

tabBlock.forEach((elBlock, index) => {
  elBlock.addEventListener('click', () => {

    if(elBlock.classList.contains('tab-active')) {
      hideBlock(elBlock, index);
    } else {
      showBlock(elBlock, index);
    }
  });
});

function showBlock(block, index) {

  for(let i = 0; i < tabBlock.length; i++) {
    if(tabBlock[i].classList.contains('tab-active')) {
      tabBlock[i].classList.remove('tab-active');
      tabBlockVisible[i].style.maxHeight = 0;
      tabBlockVisible[i].classList.remove('hidden-block-active');
    }
  }

  block.classList.add('tab-active');
  tabBlockVisible[index].style.maxHeight = tabBlockVisible[index].scrollHeight + 42 + 'px'; // 42 это паддинг из css
  tabBlockVisible[index].classList.add('hidden-block-active'); 
}

function hideBlock(block, index) {
  block.classList.remove('tab-active');
  tabBlockVisible[index].style.maxHeight = 0;
  tabBlockVisible[index].classList.remove('hidden-block-active'); 
}

const causeItems = document.querySelectorAll('.cause-block'),
      contentBlocks = document.querySelectorAll('.content-block');

causeItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    if(item.classList.contains('cause-block-active')) {
      return;
    }
    for(let i = 0; i < causeItems.length; i++) {
      causeItems[i].classList.remove('cause-block-active');
      contentBlocks[i].classList.remove('content-block-active');
    }
    causeItems[index].classList.add('cause-block-active');
    contentBlocks[index].classList.add('animated', 'fadeIn', 'content-block-active');
  });
});