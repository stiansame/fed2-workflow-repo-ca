import { createMenu } from "./ui/common/createMenu.js";
import { registerFormListener } from "./listeners/auth/registerFormListener.js";
import { loginFormListener } from "./listeners/auth/loginFormListener.js";
import { logoutButtonListener } from "./listeners/auth/logoutButtonListener.js";
import { displayVenueList } from "./listeners/venues/displayVenueList.js";
import { displayVenue } from "./listeners/venues/displayVenue.js";

function initializeApp() {
  createMenu();
  logoutButtonListener();

  const path = window.location.pathname;
  console.log("PATH:", path);

  if (path === "/" || path === "/index.html") {
    displayVenueList();
  } else if (path.startsWith("/login")) {
    loginFormListener();
  } else if (path.startsWith("/register")) {
    registerFormListener();
  } else if (path.startsWith("/venue/")) {
    displayVenue();
  }
}

initializeApp();
