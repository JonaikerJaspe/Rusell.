//Ordenar los dos array y sacar un solo array de objecto de edad de menor a mayor


 

//HOmbressss
var arrayHombre = [{

    nombre:"",
    edad:43,
    genero:"homBre",
    colorDePiel:""
},
{
    nombre:"",
    edad:23,
    genero:"homBre",
    colorDePiel:""
},
{
    nombre:"",
    edad:12,
    genero:"homBrE",
    colorDePiel:""
},
{
    nombre:"",
    edad:16,
    genero:"homBre",
    colorDePiel:""
},
{
    nombre:"",
    edad:69,
    genero:"hOmBre",
    colorDePiel:""
},
{
    nombre:"",
    edad:34,
    genero:"HomBre",
    colorDePiel:""
}]

//Mujeres
var arrayMujer = 
[{
    nombre:"",
    edad:23,
    genero:"Mujer",
    colorDePiel:""
},
{
    nombre:"",
    edad:44,
    genero:"mujEr",
    colorDePiel:""
},
{
    nombre:"",
    edad:87,
    genero:"MUJER",
    colorDePiel:""
},
{
    nombre:"",
    edad:90,
    genero:"homBre",
    colorDePiel:""
},
{
    nombre:"",
    edad:18,
    genero:"Mujer",
    colorDePiel:""
},
{
    nombre:"",
    edad:17,
    genero:"muJer",
    colorDePiel:""
}]




arrayHombre.sort(function (a, b) {
    if (a.edad > b.edad) {
      return 1;
    }
    if (a.edad < b.edad) {
      return -1;
    }

    return 0;
  });

arrayMujer.sort(function (a, b) {
    if (a.edad > b.edad) {
      return 1;
    }
    if (a.edad < b.edad) {
      return -1;
    }
    return 0;
  });

console.log(arrayHombre);
console.log(arrayMujer);

