class userService {
  listUser = [
    {
      id: "1",
      name: "Banh Bao",
      email: "banhbao@gmail.com",
      password: "banhbaonhanthit",
    },
    {
      id: "2",
      name: "banh mi",
      email: "banhmi@gmail.com",
      password: "banhmipate",
    },
    {
      id: "3",
      name: "The Gioi",
      email: "Thegioi@gmail.com",
      password: "Thegioiquaytron1",
    },
    {
      id: "4",
      name: "Ruta Sukura ",
      email: "RutaSakura@gmail.com",
      password: "SakuraSasuke",
    },
  ];
  async queryListUser() {
    return this.listUser;
  }
  async queryUser(id) {
    return this.listUser.find((item) => item.id === id);
  }
  //validate email with regax
}
