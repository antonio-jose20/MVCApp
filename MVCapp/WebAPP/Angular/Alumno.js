﻿var app = angular.module("App", []); //App emcotrara el angular para disponer de el

app.controller("Alumno", function ($scope, $http) { // ejecutara el angular

    

    $scope.ObtenerAlumnos = function () {
        $http({
            method: 'Post',
            url: '../Alumno/ObtenerAlumnos',
        }).then(function respuesta(r) {
            console.log(r);
            $scope.AlumnosData = r.data;
        });
    }
    $scope.ObtenerAlumnos();


    $scope.EliminarAlumnos = function (id) {
        debugger;
        $http({
            method: 'Post',
            url: '../Alumno/EliminarAlumnos',
            data: {
                Id:id
            }
        }).then(function respuesta(r) {
            console.log(r);
            if (r == 0) {
                alert("Registro eliminado");
                $scope.ObtenerAlumnos();
            }
            else {
                alert("Registro no eliminado");
            }
        });
    }

});

