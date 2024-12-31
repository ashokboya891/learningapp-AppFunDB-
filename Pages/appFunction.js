//testing connection
// var mysql = require('mysql2');

// var sqlconnection = mysql.createConnection({
//   host: "mysqlserver111.mysql.database.azure.com",
//   user: "sqladmin",
//   password: "Boya8919388938@",
//   database: "appdb"
// });

// sqlconnection.connect((error)=> {
//   if (error) console.log(error);
//   else
//   {
//     console.log("Connected to the MySQL database");
//     var sqlquery="SELECT CourseID,CourseName,Rating FROM Course";
//     sqlconnection.query(sqlquery,function(error,result) {
//         console.log(result);
//     });
//   }
// });

//getting data and displayed in console
// const { app } = require('@azure/functions');

// app.http('appFunction', {
//     methods: ['GET', 'POST'],
//     authLevel: 'anonymous',
//     handler: async (request, context) => {
//         var mysql = require('mysql2');
//         var sqlconnection = mysql.createConnection({
//             host: "mysqlserver111.mysql.database.azure.com",
//             user: "sqladmin",
//             password: "Boya8919388938@",
//             database: "appdb"
//           });
          
//           sqlconnection.connect((error)=> {
//             if (error) console.log(error);
//             else
//             {
//               console.log("Connected to the MySQL database");
//               var sqlquery="SELECT CourseID,CourseName,Rating FROM Course";
//               sqlconnection.query(sqlquery,function(error,result) {
//                   console.log(result);
//               });
//             }
//           });
          
//     }
// });

//returing got data from db to borswer in json format
const { app } = require('@azure/functions');

app.http('appFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request,context) => {
        var mysql = require('mysql2/promise');
        var jsonBody;
        var sqlconnection = mysql.createPool({
            host: "mysqlserver111.mysql.database.azure.com",
            user: "sqladmin",
            password: "Boya8919388938@",
            database: "appdb"
          });         

         
              var sqlquery="SELECT CourseID,CourseName,Rating FROM Course";              
              var result = await sqlconnection.query(sqlquery);             
              return { body: JSON.stringify(result[0])};
    }
});
