





10. Encapsulación de datos:

Enunciado: Crea un objeto llamado "cuentaBancaria" con una propiedad privada llamada "saldo" y métodos públicos para depositar y retirar dinero.
Ejemplo de entrada y salida:
javascript
Copy code
const cuentaBancaria = {
  _saldo: 1000, // Propiedad privada
  depositar: function(cantidad) {
    if (cantidad > 0) {
      this._saldo += cantidad;
      console.log(`Se depositaron ${cantidad} unidades. Saldo actual: ${this._saldo}`);
    } else {
      console.log('La cantidad debe ser mayor que cero.');
    }
  },
  retirar: function(cantidad) {
    if (cantidad > 0 && cantidad <= this._saldo) {
      this._saldo -= cantidad;
      console.log(`Se retiraron ${cantidad} unidades. Saldo actual: ${this._saldo}`);
    } else {
      console.log('Saldo insuficiente o cantidad no válida.');
    }
  }
};

cuentaBancaria.depositar(500); // Saldo actual: 1500
cuentaBancaria.retirar(200);   // Saldo actual: 1300
Estos ejercicios te ayudarán a practicar tus habilidades con objetos en JavaScript. Puedes personalizarlos y extenderlos según tus necesidades de aprendizaje.





