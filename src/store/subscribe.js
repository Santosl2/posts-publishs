import store from "./index";
import { API } from "../resources/axios";

store.subscribe((mutation) => {
  switch (mutation.type) {
    case "login/LOGIN/CHANGE_USER":
     
      if (mutation.payload) {
        let token = mutation.payload[1];
        if (!localStorage.getItem("token")) {
          localStorage.setItem("token", token);
        }
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } else {
        API.defaults.headers.common["Authorization"] = null;
        localStorage.remove("token");
      }
      break;
  }
});
