let addButton = document.querySelector('#add-device');
let addPoup = document.querySelector('.edit-popup');
let deletePoup = document.querySelector('.delete-popup');
let selectPoup = document.querySelector('.select-popup');
let billsPoup = document.querySelector('.bills-popup');
let editBtn = document.querySelectorAll('#edit');
let deleteBtn = document.querySelectorAll('#delete');
let availBtn = document.querySelectorAll('#available');
let closeBtn = document.querySelectorAll('.close');
let bills = document.querySelectorAll('.bills');

addButton.addEventListener('click', () => {
       addPoup.classList.add('show');
});
document.querySelector('#save-device').onclick = function () {
       addPoup.classList.remove('show');
};
closeBtn.forEach((e) => {
       e.addEventListener('click', () => {
              e.parentElement.parentElement.classList.remove('show');
       });
});
document.querySelector('#cancel').onclick = function () {
       deletePoup.classList.remove('show');
};
document.querySelector('#save').onclick = function () {
       selectPoup.classList.remove('show');
};

editBtn.forEach((e) => {
       e.addEventListener('click', () => {
              addPoup.classList.add('show');
       });
});
deleteBtn.forEach((e) => {
       e.addEventListener('click', () => {
              deletePoup.classList.add('show');
       });
});
availBtn.forEach((e) => {
       e.addEventListener('click', () => {
              selectPoup.classList.add('show');
       });
});
bills.forEach((e) => {
       e.addEventListener('click', () => {
              billsPoup.classList.add('show');
       });
});

document.querySelector('.bar').onclick = function () {
       document.querySelector('.sidebar').classList.add('show');
};
