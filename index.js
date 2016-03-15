var express = require("express");
var app = express();


app.set("view engine","jade");
app.get("/login",function(req,res){

res.render("login");


});

app.get("/signup",function(req,res){

res.render("signup");

});


app.get("/",function(req,res){

res.render("start");

});
app.get("/proyect",function(req,res){
    res.render("proyects");
    
});

app.get("/productBacklog",function(req,res){
    res.render("prodBacklog");
    
});

app.get("/profile", function(req, res){
    var nombreUsuario="Hector Galvan";
    var fechaNacimiento="15/09/1992";
    var curp="";
    var RFC="";
    var domicilio="";
    var habiidades=["habilidad1","habilidad2","habilidad3"]
    
    
   res.render("profile",{nombreUsuario:nombreUsuario,
                        fechaNacimiento:fechaNacimiento,
                        curp:curp,
                        RFC:RFC,
                        domicilio:domicilio,
                        habilidades:habiidades
   }); 
   
});

app.listen(8080);