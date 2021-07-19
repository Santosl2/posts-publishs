import store from "./index";

store.subscribe((mutation) => {
  switch (mutation.type) {
    case "login/LOGIN/CHANGE_USER":
      if (mutation.payload) {
        let token = mutation.payload[1];
        if (!localStorage.getItem("token")) {
          localStorage.setItem("token", token);
        }
      } else {
        localStorage.remove("token");
      }
      break;
  }
});
