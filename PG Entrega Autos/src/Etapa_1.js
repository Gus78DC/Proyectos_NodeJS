/*
En esta primera etapa, necesitamos requerir tu módulo autos que se encuentra en la misma carpeta del archivo 
donde estás trabajando.

Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades 
que el cliente solicita.

Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles 
importada anteriormente.
*/


/*
const concesionaria = {

   autos: autos,
   buscarAuto: function(patente){
    let autoEncontrado = null;
    this.autos.forEach(object =>{
        if(object.patente == patente){
            autoEncontrado = this.autos.filter((obj) => obj.patente === patente);
            }
        });
        return autoEncontrado
    }
    venderAuto: function(patente){
       if(this.buscarAuto(patente) != null){
           this.autos.fi
       }
    }  
}  
*/

const autos = require("./autos");
const persona = require("./personas");

const concesionaria = {
    autos: autos,
    buscarAuto: function(patente){
      let auto = null
         for (let i = 0; i < autos.length; i++){
            if(autos[i].patente === patente){
            auto = autos[i]
         }         
      } 
      return auto
    },
      venderAuto: function(patente){
        let auto = this.buscarAuto(patente);
        let resultado = "";
        if(auto != null && auto.vendido === false){
            auto.vendido = true;
            resultado = "El auto se actualizo a Vendido";
        }
        else if(auto.vendido === true)
            resultado = "El fue vendido anteriormente";
        else{
            resultado = "El fue no fue encontrado por la patente: " + patente;

        }      
        return resultado;
    },
    autosParaLaVenta: function (){
            let autosEnVenta = this.autos.filter((obj) => obj.vendido == false);
            return autosEnVenta;
         },
    autosNuevos: function(){
        let autoEnVenta = this.autosParaLaVenta().filter((obj) => obj.km <= 100);
        return autoEnVenta;
    },
    listaDeVentas: function(){
        let listaPrecioVendidos = [];
        for (let i = 0; i< this.autos.length; i++){
           if (this.autos[i].vendido === true){
              listaPrecioVendidos.push(this.autos[i].precio)
           }
        }
        return listaPrecioVendidos
     },
     totalDeVentas: function (){
        let sumaVentas = 0;
        if(this.listaDeVentas().length > 0){
            sumaVentas = this.listaDeVentas().reduce(function(acum = 0, valor = 0){return acum + valor});
        }
        return sumaVentas;
     },
     puedeComprar: function(auto,persona){
        return (auto.precio < persona.capacidadDePagoTotal && auto.precio/auto.cuotas < persona.capacidadDePagoEnCuotas)
     },
     autosQuePuedeComprar: function(persona){
        let autosParaComprar = this.autosParaLaVenta().filter(auto => this.puedeComprar(auto,persona))
        return autosParaComprar
     }
}

//console.log(concesionaria.buscarAuto('JJK116'));

//console.log(concesionaria.venderAuto('JJK116'));

//console.log(concesionaria.autosParaLaVenta());

//console.log(concesionaria.autosNuevos());

//console.log(concesionaria.listaDeVentas());

//console.log(concesionaria.totalDeVentas());

console.log(concesionaria.puedeComprar(autos[0],persona[0]);