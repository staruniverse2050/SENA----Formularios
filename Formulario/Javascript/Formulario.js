function Masculino() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;




    document.write("Su nombre es: " + nombre);
    document.write("<br>");

    document.write("Sus apellidos son: " + apellido);
    document.write("<br>");

    document.write("Su usuario es: " + usuario)
    document.write("<br>");

    document.write("Su clave es: " + clave);
    document.write("<br>");
    document.write("Su genero es: " + "Masculino");
    alert("Se envío con éxito");
    alert("A continúacion tus datos introducidos ");

}

function Femenino() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;




    document.write("Su nombre es: " + nombre);
    document.write("<br>");

    document.write("Sus apellidos son: " + apellido);
    document.write("<br>");

    document.write("Su usuario es: " + usuario);
    document.write("<br>");

    document.write("Su clave es: " + clave);
    document.write("<br>");
    document.write("Su genero es: " + "Femenino");

    alert("Se envío con éxito");
    alert("A continúacion se mostrarán sus datos introducidos ");

}