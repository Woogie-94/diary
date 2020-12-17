class a {
  constructor() {
    this.name = "1";
  }

  a(name) {
    console.log(name);
  }

  b() {
    this.a("hi");
  }
}

const aa = new a();

aa.b();
