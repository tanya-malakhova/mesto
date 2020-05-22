const body = document.querySelector('.root');
const editButton = body.querySelector('.profile__edit-button');
const closeButton = body.querySelector('.popup__close-button');
const profileName = body.querySelector('.profile__name');
const profileStatus = body.querySelector('.profile__status');
const popupName = body.querySelector('.popup__input_name');
const popupStatus = body.querySelector('.popup__input_status');
const popup = body.querySelector('.popup');
const saveButton = body.querySelector('.popup__save');


//Функция открытия формы для редактирования профайла
function editProfile() {
    popup.classList.remove('popup_close');
    popupName.value = profileName.textContent;
    popupStatus.value = profileStatus.textContent;
}
//Функция закрытия формы через крестик
function closePopup() {
    popup.classList.add('popup_close');
} 
//Функция сохранения изменений и закрытия формы
function formSubmitHandler(evt) {
    evt.preventDefault(); 

    profileName.textContent = popupName.value;
    profileStatus.textContent = popupStatus.value;
    
    closePopup()
}

editButton.addEventListener('click', editProfile);

closeButton.addEventListener('click', closePopup);

saveButton.addEventListener('submit', formSubmitHandler);