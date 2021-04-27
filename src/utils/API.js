import axios from "axios";

// Export an object containing methods we'll use for accessing the Employee.Ceo API


export default {
  getEmployeesList: function() {
    return axios
      .get("https://randomuser.me/api/?nat=us&results=40")
      .then(res => {
        const employees = res.data;
        return employees.map(employee => {
          return {
            name: employee.name.first +" "+ employees.name.last,
            image: employee.picture.thumbnail,
            email: employee.email,
            location : employee.location.street.number +" "+ employee.location.name,
            phone: employee.phone
          };
        });
      });
  }
};
