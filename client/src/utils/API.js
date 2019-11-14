import axios from "axios";

export default {
    getUserData: function(){
        return axios.get("/api/users");
    },
  // Gets all exercises
  getExercises: function() {
    return axios.get("/api/exercises/");
  }
}
