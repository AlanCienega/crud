const express=require('express');
const path =require('path');//une los directorios 
const morgan=require('morgan');//podemos registrar las peticiones antes de llegar
const mysql = require('mysql');
const myConnection=require('express-myconnection');

const app =express();
//importando rutas
const customerRoutes = require('./routes/customer');
//AJUSTES
app.set('port',process.env.PORT || 3000);//definimos una funcion que envia el puerto,
app.set ('view engine','ejs');			//consifguramos las vistas usando el motor deplatillas view engine
app.set('views',path.join(__dirname,'views'));//el metodo  joind del modulo path 
//middleware
app.use(morgan('dev'));			//podemos saber que peticiones llegan al servidor
app.use(myConnection(mysql,{	//escribimos la configuracion de mysql
	host:'localhost',
	user:'root',
	password:'Passwd0',
	port: 3306,
	database: 'crudnodejsmysql'
},'single'));
app.use(express.urlencoded({extended:false}));//extended false hace qur desde express entienda los datos del formilario

//rutas
app.use('/',customerRoutes); //applicacion, ejecuta customerRoutes cuando entren a la pag inicial

//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));//encuantra la carpeta public a partir de la direccion actual

//iniciando el servidor
app.listen(app.get('port'),()=>{		//ya sea que se obtiene o es el definido 3000
	console.log('server on port 3000');
});