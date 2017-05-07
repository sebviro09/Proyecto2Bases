function validarDatos(){
	var fechanac = document.getElementById("fechanac").value;
	var año = fechanac[0] + fechanac[1] + fechanac[2] + fechanac[3];
	alert(año);
	var mes = fechanac[5] + fechanac[6];
	alert(mes);
	var dia = fechanac[8] + fechanac[9];
	alert(dia);
	// Debe existir un nombre de usuario válido
	var usuario = document.getElementById("usuario").value;
	if (usuario == ""){
		alert("Debe escribir un nombre de usuario");
	}
	// Contraseña (deben ser iguales)
	var pass1 = document.getElementById("pass1").value;
	var pass2 = document.getElementById("pass2").value;
	if (pass1 != pass2) {
		alert("Las contraseñas no coinciden");
	}
	var apellido1 = document.getElementById("apellido1").value;
	if (apellido1 == ""){
		alert("Debe escribir su apellido");
	}
	if (document.getElementById("hombre").checked) {
		genero = "hombre";
	}
	else {
		genero = "mujer";
	}	
}

var app = angular.module("Registro", []);

app.controller ("registroController", function($scope, $http) {
	$scope.User = {
		usuario: "",
		contrasena: "",
		nombre: "",
		apellido1: "",
		apellido2: "",
		ced1: "",
		ced2: "",
		ced3: "",
		fecha: "",
		genero: "Masculino",
	};
	$scope.click = function () {		
        if ($scope.User.usuario == ""){
		alert("Debe escribir un nombre de usuario");
		}
		else if ($scope.User.contrasena1 == ""){
			alert("Debe escribir una contraseña");
		}
		// Contraseña (deben ser iguales)
		else if ($scope.User.contrasenna1 != $scope.User.contrasenna2) {
			alert("Las contraseñas no coinciden");
		}
		else if ($scope.User.nombre == ""){
			alert ("Debe ingresar su nombre");
		}
		else if ($scope.User.apellido1 == ""){
		alert("Debe escribir su primer apellido");
		}
		else if ($scope.User.apellido2 == ""){
		alert("Debe escribir su segundo apellido");
		}
		else{
			$http.get('http://localhost:56099/api/LogIn?ced1=' + $scope.User.ced1 +  '&ced2=' + $scope.User.ced2 + '&ced3=' + $scope.User.ced3 + '&nom=' + $scope.User.nombre + '&apell1=' + $scope.User.apellido1 + '&apell2=' + $scope.User.apellido2 + '&fecha=' + $scope.User.fecha + '&sex=' + $scope.User.genero + '&username=' + $scope.User.usuario + '&password=' + $scope.User.contrasena ).success(function (data, status, headers, config) { 
			$scope.exito = data;
			alert("no error");
		}).error(function (data, status, headers, config) {
			alert("Error");
		});					
		}
			
	}
});
