let option;
do {
    option = parseInt(prompt("1- Para calcular edad promedio \n" +
        "2- Para calcular nota final de un alumno \n" +
        "0- Para salir \n" +
        "Ingrese una opción"));
    switch (option) {
        case 1:
            let total = 0;
            let count1 = 0;
            let option1;
            let older = 0;
            let olderName = "";
            do {
                let name = prompt("Ingrese nombre")
                let age = parseInt(prompt("Ingrese edad"));
                total += age;
                count1++;
                option1 = prompt("1- Para agregar otra persona" +
                    "\nSalir- Para mostrar el resulta y volver al menu principal");
                if (age > older) {
                    older = age;
                    olderName = name;
                }

            } while (option1 != "Salir");
            alert("La edad promedio es: " + total / count1);
            alert("La persona mayor es: " + olderName + " y su edad es: " + older)
            break;
        case 2:
            let option2
            let name = prompt("Ingrese su nombre")
            let noteFinal = 0;
            let count2 = 0;
            do {
                let nota = parseInt(prompt("Ingrese nota"));
                noteFinal += nota;
                count2++;
                option2 = prompt("1- Para agregar otra nota\n" + "Salir- Para calcular nota final de un alumno y volver al menu principal\n");
            } while (option2 != "Salir");
            alert("La nota final de " + name + " es: " + noteFinal / count2);
            break;
        case 0:
            break;
        default:
            alert("Ingrese una opción válida");
            break;

    }


} while (option != 0);