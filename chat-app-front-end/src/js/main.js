import { GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from '../firebase.js';

const accountElm = document.querySelector("#account");
const userNameElm = document.querySelector("#user-name");
const userEmailElm = document.querySelector("#user-email");
const btnSignOutElm = document.querySelector("#btn-sign-out");
const loaderElm = document.querySelector("#loader");
const { API_BASE_URL } = process.env;
const user = {
    email: null,
    name: null,
    picture: null
};

accountElm.addEventListener('click', (e)=> {
    accountElm.querySelector("#account-details")
        .classList.remove('d-none');
    e.stopPropagation();
});

document.addEventListener('click', ()=> {
    accountElm.querySelector("#account-details")
        .classList.add('d-none');
});

btnSignOutElm.addEventListener('click', (e)=> {
    accountElm.querySelector("#account-details")
        .classList.add('d-none');
    e.stopPropagation();
    signOut(auth);
});

