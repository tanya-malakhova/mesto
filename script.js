const body = document.querySelector('.root');
const editButton = body.querySelector('.profile__edit-button');
const closeButton = body.querySelector('.popup__close');
const profileName = body.querySelector('.profile__name');
const profileStatus = body.querySelector('.profile__status');
const popupName = body.querySelector('.popup__input_name');
const popupStatus = body.querySelector('.popup__input_status');
const popup = body.querySelector('.popup');
const saveButton = body.querySelector('.popup__save');



function editProfile() {
    popup.classList.remove('popup_opened');
    popupName.value = profileName.textContent;
    popupStatus.value = profileStatus.textContent;
}

editButton.addEventListener('click', editProfile);

function closePopup() {
    popup.classList.add('popup_opened');
}

closeButton.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault(); 

    profileName.textContent = popupName.value;
    profileStatus.textContent = popupStatus.value;
    
    closePopup()
}

saveButton.addEventListener('click', formSubmitHandler);