class UserInfo {
  constructor(nameSelector, profesionSelector) {
    this.name = document.querySelector(nameSelector);
    this.profesion = document.querySelector(profesionSelector);
  }
  getUserInfo() {
    return {
      userName: this.name.textContent,
      userProfesion: this.profesion.textContent,
    };
  }
  setUserInfo(name, profesion) {
    this.name.textContent = name;
    this.profesion.textContent = profesion;
  }
}

export default UserInfo;
