class Usuario {
  constructor(email, password) {
    (this.email = email), (this.password = password);
  }

  saludar() {
    console.log(`Hola soy ${this.email}`);
  }

  despedirse() {
    console.log(`Adios ${this.email}`);
  }
}

export default Usuario;
