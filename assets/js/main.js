//creacion de clases
class Paciente {
    #nombre;
    #edad;
    #rut;
    #diagnostico;
    //constructor

    constructor(nombre, edad, rut, diagnostico) {
        this.#nombre = nombre
        this.#edad = edad
        this.#rut = rut
        this.diagnostico = diagnostico
    }
    get nombre() {
        return this.#nombre
    }
    set nombre(value) {
        this.#nombre = value
    }
    get edad() {
        return this.#edad
    }
    set edad(value) {
        this.#edad = value
    }
    get rut() {
        return this.#rut
    }
    set rut(value) {
        this.#rut = value
    }
    get diagnostico() {
        return this.#diagnostico
    }
    set diagnostico(value) {
        this.#diagnostico = value
    }
}
class Consultorio {
    #nombre;
    #pacientes;
    constructor(nombre) {
        this.#nombre = nombre
        this.#pacientes = []
    }
    agregarPaciente(paciente) {
        this.#pacientes.push(paciente)
    }
    mostrarPacientes() {
        this.#pacientes.forEach((paciente) => {
            console.log(paciente)
        })
    }


}
const consultorioMaipu = new Consultorio("Maipu")
const paciente1 = new Paciente("Lisa", 57, "1234567", "HTA")
const paciente2 = new Paciente("Homero", 70, "98745641", "Obeso")
const paciente3 = new Paciente("Bart", 30, "3216548", "Sano")
const paciente4 = new Paciente("Margerine", 60, "98745321", "Sana")

consultorioMaipu.agregarPaciente(paciente1)
consultorioMaipu.agregarPaciente(paciente2)
consultorioMaipu.agregarPaciente(paciente3)
consultorioMaipu.agregarPaciente(paciente4)

consultorioMaipu.mostrarPacientes()







