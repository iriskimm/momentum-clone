const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    event.preventDefault(); // to prevent page refresh
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    document.querySelector("#todo-form").classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay = "morning";
    if (hours >= 17) {
        timeOfDay = "evening";
    } else if (hours >= 12) {
        timeOfDay = "afternoon";
    }
    greeting.innerText = `Good ${timeOfDay}, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (!savedUsername) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    document.querySelector("#todo-form").classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}