import axios from "axios";

// Export an object containing methods we'll use for accessing the ramdom API
const API =
 {
  getEmployee: function() {
    return axios.get("https://randomuser.me/api/?nat=us&results=20");
  },
  
};
export default API;
