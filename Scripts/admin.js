/* Muestra el formulario para asignar horas laboradas a un trabajador */
function mostrarHoras() {
    cancelar();
    document.getElementById("asignarHoras").hidden = "";
    document.getElementById('btnIngresar').style.visibility = 'hidden';
    document.getElementById('btnModificar').style.visibility = 'hidden';
    document.getElementById('btnEliminar').style.visibility = 'hidden';
    document.getElementById('btnPlanilla').style.visibility = 'hidden';
}

function modifPorSucursal() {
	document.getElementById("modificarProducto").hidden = "hidden";
	document.getElementById("modifProdSucursal").hidden = "";	
}

function regresar() {
	document.getElementById("modificarProducto").hidden = "";
	document.getElementById("modifProdSucursal").hidden = "hidden";
	document.getElementById("modifProv").hidden = "hidden";			
}

function modifProv() {
	document.getElementById("modificarProducto").hidden = "hidden";	
	document.getElementById("modifProv").hidden = "";
}

function mostrarFormPlanilla() {
	cancelar();
	document.getElementById("generarPlanilla").hidden = "";
	document.getElementById('btnIngresar').style.visibility = 'hidden';
    document.getElementById('btnModificar').style.visibility = 'hidden';
    document.getElementById('btnEliminar').style.visibility = 'hidden';
    document.getElementById('btnHoras').style.visibility = 'hidden';	
}

function mostrarTabla() {
	document.getElementById("tablaPlanilla").hidden = "";
}

/*  Muestra u oculta el formulario de porcentaje de descuento 
	dependiendo del radio button de descuento */
function mostrarPorcentaje() {
    document.getElementById("porcentaje").hidden = "";
}

function quitarPorcentaje() {
    document.getElementById("porcentaje").hidden = "hidden";
}

/* Selecciona el valor del radio button para ver cual formulario mostrar cuando
   se presiona el botón INGRESAR, además de ocultar los demás botones
   si no hay radio button seleccionado muestra mensaje de alerta */
function ingresar() {
    document.getElementById('btnModificar').style.visibility = 'hidden';
    document.getElementById('btnEliminar').style.visibility = 'hidden';
    document.getElementById('btnHoras').style.visibility = 'hidden';
    document.getElementById('btnPlanilla').style.visibility = 'hidden';
    if (document.getElementById("optRoles").checked) {
        document.getElementById("ingresarRol").hidden = "";
    }
    else if (document.getElementById("optSucursales").checked) {
        document.getElementById("ingresarSucursal").hidden = "";
    }
    else if (document.getElementById("optTrabajadores").checked) {
        document.getElementById("ingresarTrabajador").hidden = "";
    }
    else if (document.getElementById("optProveedores").checked) {
        document.getElementById("ingresarProveedor").hidden = "";
    }
    else if (document.getElementById("optProductos").checked) {
        document.getElementById("ingresarProducto").hidden = "";
    }
    else if (document.getElementById("optCompras").checked) {
        document.getElementById("ingresarCompra").hidden = "";
    }
    else {
        alert("Seleccione una categoría para ingresar");
        cancelar();
    }
}

/* Selecciona el valor del radio button para ver cual formulario mostrar cuando
   se presiona el botón MODIFICAR, además de ocultar los demás botones,
   si no hay radio button seleccionado muestra mensaje de alerta */
function modificar() {
    document.getElementById('btnIngresar').style.visibility = 'hidden';
    document.getElementById('btnEliminar').style.visibility = 'hidden';
    document.getElementById('btnHoras').style.visibility = 'hidden';
    document.getElementById('btnPlanilla').style.visibility = 'hidden';
    if (document.getElementById("optRoles").checked) {
        document.getElementById('modificarRol').hidden = "";
    }
    else if (document.getElementById("optSucursales").checked) {
        document.getElementById("modificarSucursal").hidden = "";
    }
    else if (document.getElementById("optTrabajadores").checked) {
        document.getElementById("modificarTrabajador").hidden = "";
    }
    else if (document.getElementById("optProveedores").checked) {
        document.getElementById("modificarProveedor").hidden = "";
    }
	else if (document.getElementById("optCompras").checked) {
		document.getElementById("modificarCompra").hidden = "";	
	}
	else if (document.getElementById("optProductos").checked) {
		document.getElementById("modificarProducto").hidden = "";	
	}
    else {
        alert("Seleccione una categoría para modificar");
        cancelar();
    }
}

/* Selecciona el valor del radio button para ver cual formulario mostrar cuando
   se presiona el botón ELIMINAR, además de ocultar los demás botones
   si no hay radio button seleccionado muestra mensaje de alerta */
function eliminar() {
    document.getElementById('btnIngresar').style.visibility = 'hidden';
    document.getElementById('btnModificar').style.visibility = 'hidden';
    document.getElementById('btnHoras').style.visibility = 'hidden';
    document.getElementById('btnPlanilla').style.visibility = 'hidden';
    if (document.getElementById("optRoles").checked) {
        document.getElementById("eliminarRol").hidden = "";
    }
    else if (document.getElementById("optSucursales").checked) {
        document.getElementById("eliminarSucursal").hidden = "";
    }
    else if (document.getElementById("optTrabajadores").checked) {
        document.getElementById("eliminarTrabajador").hidden = "";
    }
    else if (document.getElementById("optProveedores").checked) {
        document.getElementById("eliminarProveedor").hidden = "";
    }
    else if (document.getElementById("optProductos").checked) {
        document.getElementById("eliminarProducto").hidden = "";
    }
	else if (document.getElementById("optCompras").checked) {
		document.getElementById("eliminarCompra").hidden = "";	
	}
    else {
        alert("Seleccione una categoría para eliminar");
        cancelar();
    }
}

/* Función para cancelar cualquier operación de ingreso, modificación o eliminación
   Muestra la página como en su estado inicial */
function cancelar() {
    document.getElementById('btnIngresar').style.visibility = '';
    document.getElementById('btnModificar').style.visibility = '';
    document.getElementById('btnEliminar').style.visibility = '';
    document.getElementById('btnHoras').style.visibility = '';
    document.getElementById('btnPlanilla').style.visibility = '';
    document.getElementById('ingresarRol').hidden = "hidden";
    document.getElementById('modificarRol').hidden = "hidden";
    document.getElementById('eliminarRol').hidden = "hidden";
    document.getElementById('ingresarSucursal').hidden = "hidden";
    document.getElementById('modificarSucursal').hidden = "hidden";
    document.getElementById('eliminarSucursal').hidden = "hidden";
    document.getElementById('ingresarTrabajador').hidden = "hidden";
    document.getElementById('modificarTrabajador').hidden = "hidden";
    document.getElementById('eliminarTrabajador').hidden = "hidden";
    document.getElementById('ingresarProveedor').hidden = "hidden";
    document.getElementById('modificarProveedor').hidden = "hidden";
    document.getElementById('eliminarProveedor').hidden = "hidden";
    document.getElementById('ingresarProducto').hidden = "hidden";
    document.getElementById('eliminarProducto').hidden = "hidden";
    document.getElementById('ingresarCompra').hidden = "hidden";
    document.getElementById('ingresarProducto').hidden = "hidden";
    document.getElementById('eliminarProducto').hidden = "hidden";
    document.getElementById('eliminarCompra').hidden = "hidden";
    document.getElementById('modificarCompra').hidden = "hidden";
    document.getElementById('modificarProducto').hidden = "hidden";	
    document.getElementById('asignarHoras').hidden = "hidden";
	document.getElementById('generarPlanilla').hidden = "hidden";
	document.getElementById('tablaPlanilla').hidden = "hidden";
	document.getElementById("modifProdSucursal").hidden = "hidden";
	
}


var app = angular.module("Admin", []);

app.controller("adminController", function ($scope, $http) {


    /* Obtiene el valor del radio buton */
    $scope.radio = {
        valor: 'rol'
    }


    /*---------* ROLES *-----------*/

    /* Rol para ingresar nuevo rol */
    $scope.rol = {
        nombreRol: "",
        descripRol: "",
        id: ""
    }

    /* Rol para modificar */

    $scope.rolModif = {
        id: 0,
        nombre: '',
        descr: '',
        confirmarElimacion : false,
    }

    /* llena los campos con los valores que tienen antes de ser modificados */
    $scope.fillFields = function () {
        $scope.rolModif.nombre = $scope.nombresRol[$scope.roles.indexOf($scope.rolModif.id)];
        $scope.rolModif.descr = $scope.descripRol[$scope.roles.indexOf($scope.rolModif.id)];
    }

    /* listas donde se guardan los roles despues de obtenerlos de la base */
    $scope.roles = [];
    $scope.nombresRol = [];
    $scope.descripRol = [];

    /*obtene los roles de la base */
    $scope.getRoles = function () {
        $http.get('http://localhost:9820/api/Rol').success(function (data, status, headers, config) {
            if (data == 'false') {
                alert("Error cargando los roles");
            } else {
                var tamano = data.length;
                var largo = 0;
                $scope.roles = [];
                $scope.nombresRol = [];
                $scope.descripRol = [];
                for (var i = 0; i < tamano; i++) {
                    largo = $scope.roles.length;
                    $scope.roles[largo] = data[i].ID;
                    $scope.nombresRol[largo] = data[i].Nombre;
                    $scope.descripRol[largo] = data[i].Descripcion;
                }
            }
        }).error(function (data, status, headers, config) {
            alert("Error");
        });
    }

    /*Insertar rol en la base */
    $scope.guardarRol = function () {
        $http.post('http://localhost:9820/api/Rol?nombre=' + $scope.rol.nombreRol + '&descripcion=' + $scope.rol.descripRol).success(function (data, status, headers, config) {
            if (data == "true") {
                alert("Rol agregado exitosamente");
            }
            else {
                alert("Hubo un error al ingresar el rol");
            }
        }).error(function (data, status, headers, config) {
            alert("Error");
        });
    }

    /* actualizar rol */
    $scope.updateRol = function () {
        if ($scope.rolModif.id == 0 || $scope.rolModif.nombre == "" || $scope.rolModif.descr == '') {
            alert("Por favor ingrese un valor válido");
        } else {


            $http.post('http://localhost:9820/api/Rol/' + $scope.rolModif.id + '?&nuevoNom=' + $scope.rolModif.nombre + '&nuevaDesc=' + $scope.rolModif.descr).success(function (data, status, headers, config) {
                if (data == 'true') {
                    alert("Rol modificado exitosamente");
                } else {
                    alert("Error modificando el rol");
                }
            }).error(function (data, status, headers, config) {

            });
        }
    }

    /* eliminar rol */
    $scope.eliminarRol = function () {
        if ($scope.rolModif.confirmarElimacion && $scope.rolModif.id != 0) {
            $http.post('http://localhost:9820/api/Rol/' + $scope.rolModif.id).success(function (data, status, headers, config) {
                if (data == 'true') {
                    alert("Se eliminó el rol con exito");
                } else {
                    alert("No se pudo eliminar el rol");
                }
            }).error(function (data, status, headers, config) {
                alert("Error en la conexión");
            });
        } else {
            alert("Para eliminar el rol debe marcar 'Confirmar Eliminación'");
        }
    }

    /*---------* SUCURSALES *-----------*/

    $scope.sucursal = {
        nombre : "",
        provincia : "",
        canton : "",
        distrito : "",
        telefono : "",
    }

    $scope.sucursalModif = {
        id: "",
        nombre: "",
        provincia: "",
        canton: "",
        distrito: "",
        telefono: "",
        confirmarEliminacion: false,
    }

    /* lista de sucursales */
    $scope.listSucursalId = [];
    $scope.listSucursalNombre = [];
    $scope.listSucursalProvincia = [];
    $scope.listSucursalCanton = [];
    $scope.listSucursalDistrito = [];
    $scope.listSucursalTelefono = [];

    /*obtiene todas las sucursales activas en una lista */
    $scope.getSucursales = function () {
        $http.get('http://localhost:9820/api/Sucursal').success(function (data, status, headers, config) {
            if (data == 'false') {
                alert("Error cargando las sucursales");
            } else {
                var tamano = data.length;
                $scope.listSucursalId = [];
                $scope.listSucursalNombre = [];
                $scope.listSucursalProvincia = [];
                $scope.listSucursalCanton = [];
                $scope.listSucursalDistrito = [];
                $scope.listSucursalTelefono = [];
                for (var i = 0; i < tamano; i++) {
                    $scope.listSucursalId[i] = data[i].ID;
                    $scope.listSucursalNombre[i] = data[i].Nombre;
                    $scope.listSucursalProvincia[i] = data[i].Provincia;
                    $scope.listSucursalCanton[i] = data[i].Canton;
                    $scope.listSucursalDistrito[i] = data[i].Distrito;
                    $scope.listSucursalTelefono[i] = data[i].Telefono;
                }
            }
        }).error(function (data, status, headers, config) {
            alert("Error");
        });
    }

    /* elimina una sucursal */
    $scope.eliminarSucursal = function () {
        if ($scope.sucursalModif.confirmarEliminacion) {
            $http.post('http://localhost:9820/api/Sucursal/' + $scope.sucursalModif.id).success(function (data, status, headers, config) {
                if (data == "true") {
                    alert("Se eliminó la sucursal");
                } else {
                    alert("Error eliminando la sucursal");
                }
            }).error(function (data, status, headers, config) {
                alert("Error");
            });
        } else {
            alert("Para eliminar marque la casilla de confirmar eliminación");
        }
    }


    /* actualiza la sucursal */

    $scope.updateSucursal = function () {

        if ($scope.sucursalModif.nombre == "" || $scope.sucursalModif.provincia == "" || $scope.sucursalModif.canton == "" || $scope.sucursalModif.distrito == "" ) {
            alert("Ingrese todos los campos");
        } else {
            $http.post('http://localhost:9820/api/Sucursal/' + $scope.sucursalModif.id + '?nom=' + $scope.sucursalModif.nombre + '&prov=' + $scope.sucursalModif.provincia + '&cant=' + $scope.sucursalModif.canton + '&distr=' + $scope.sucursalModif.distrito + '&tel=' + $scope.sucursalModif.telefono).success(function (data, status, headers, config) {
                if (data == "true") {

                    alert("Se actualizó la sucursal");
                } else {
                    alert("Error actualizando la sucursal");
                }

            }).error(function (data, status, header, config) {
                alert("error");
            });
        }
    }


    /* llena los campos de modificar sucursal */
    $scope.fieldSucursalFields = function(){
        $scope.sucursalModif.nombre = $scope.listSucursalNombre[$scope.listSucursalId.indexOf($scope.sucursalModif.id)];
        $scope.sucursalModif.provincia = $scope.listSucursalProvincia[$scope.listSucursalId.indexOf($scope.sucursalModif.id)];
        $scope.sucursalModif.canton = $scope.listSucursalCanton[$scope.listSucursalId.indexOf($scope.sucursalModif.id)];
        $scope.sucursalModif.distrito = $scope.listSucursalDistrito[$scope.listSucursalId.indexOf($scope.sucursalModif.id)];
        $scope.sucursalModif.telefono = $scope.listSucursalTelefono[$scope.listSucursalId.indexOf($scope.sucursalModif.id)];
    }

    /* inserta sucursal */
    $scope.guardarSucursal = function () {
        if ($scope.sucursal.nombre != "" && $scope.sucursal.provincia != "" && $scope.sucursal.canton != "" && $scope.sucursal.distrito != "" && $scope.sucursal.telefono != "") {
            $http.post('http://localhost:9820/api/Rol?nombre=' + 'rol1' + '&descripcion=' + 'rol2').success(function (data, status, headers, config) {
                if (data == "true") {
                    alert("Rol agregado exitosamente");
                }
                else {
                    alert("Hubo un error al ingresar el rol");
                }
            });
        } else {
            alert("Ingrese todos los campos");
        }
    }


    /*-------TRABAJADOR ------------*/

    /* trabajador para insertar */
    $scope.trabajador = {
        nombre : '',
        apellido1: '',
        apellido2: '',
        ced1: '',
        ced2: '',
        ced3: '',
        sexo: '',
        fechaNac: '',
        fechaIng: '',
        salario: '',
    }

    /*listas para obtener todos los trabajadores */
    $scope.trabajadorListIds = [];
    $scope.trabajadorListNombres = [];
    $scope.trabajadorListApellidos1 = [];
    $scope.trabajadorListApellidos2 = [];
    $scope.trabajadorListCedulas = [];
    $scope.trabajadorListSalarios = [];
    $scope.trabajadorListRoles = [];
    $scope.trabajadorListSucursales = [];

    /*objeto trabajador para modificar */
    $scope.trabajadorModif = {
        id: "",
        nombre: "",
        apellido1: "",
        apellido2: "",
        cedula: "",
        salario: "",
        confirmarEliminacion : false,
    }

    /* inserta un trabajador en la base */
    $scope.guardarTrabajador = function () {
        if ($scope.trabajador.nombre == '' || $scope.trabajador.apellido1 == '' || $scope.trabajador.apellido2 == '' || $scope.trabajador.ced1 == '' || $scope.trabajador.ced2 == '' || $scope.trabajador.ced3 == '' || $scope.trabajador.sexo == '' || $scope.trabajador.fechaIng == '' || $scope.trabajador.fechaNac == "" || $scope.trabajador.salario == "") {
            alert("Por favor llene todos los campos");
        } else {
            $http.post('http://localhost:9820/api/Trabajador?ced1=' + $scope.trabajador.ced1 + '&ced2=' + $scope.trabajador.ced2 + '&ced3=' + $scope.trabajador.ced3 + '&nom=' + $scope.trabajador.nombre + '&ape1=' + $scope.trabajador.apellido1 + '&ape2=' + $scope.trabajador.apellido2 + '&fechaNac=' + $scope.trabajador.fechaNac + '&fechaReg=' + $scope.trabajador.fechaIng + '&idSucursal=' + $scope.sucursalModif.id + '&salarioPorHora=' + $scope.trabajador.salario + '&idRol=' + $scope.rolModif.id + '&sexo=' + $scope.trabajador.sexo)
            .success(function (data, status, headers, config) {
                if (data == "true") {
                    alert("Trabajador ingresado correctamente");
                } else {
                    alert("Error ingresando el trabajador");
                }
            }).error(function (data, status, headers, config) {
                alert("ERROR");
            });
                        
        }

    }


    /* carga los sucursales y los roles para trabajador */
    $scope.getSucursalesRolesyTrabajadores = function () {
        $scope.getSucursales();
        $scope.getRoles();
        $scope.getTrabajadores();
    }

    /*obtiene una lista de trabajadores*/
    $scope.getTrabajadores = function () {
        $http.get('http://localhost:9820/api/Trabajador').success(function (data, status, headers, config) {
            if (data == "false") {
                alert("Error cargando los roles");
            } else {
                var tamano = data.length;
                $scope.trabajadorListIds = [];
                $scope.trabajadorListNombres = [];
                $scope.trabajadorListApellidos1 = [];
                $scope.trabajadorListApellidos2 = [];
                $scope.trabajadorListCedulas = [];
                $scope.trabajadorListSalarios = [];
                $scope.trabajadorListRoles = [];
                $scope.trabajadorListSucursales = [];
                for (var i= 0 ; i< tamano ; i++){
                    $scope.trabajadorListIds[i] = data[i].ID;
                    $scope.trabajadorListNombres[i] = data[i].Nombre;
                    $scope.trabajadorListApellidos1[i] = data[i].Apellido1;
                    $scope.trabajadorListApellidos2[i] = data[i].Apellido2;
                    $scope.trabajadorListCedulas[i] = data[i].Cedula;
                    $scope.trabajadorListSalarios[i] = data[i].Salario;
                    $scope.trabajadorListRoles[i] = data[i].Rol;
                    $scope.trabajadorListSucursales[i] = data[i].Sucursal;
                    if (data[i] == 9) {
                        data[i].ID;
                        alert(data[i].Nombre);
                        alert(data[i].Apellido1);
                        alert( data[i].Apellido2);
                        alert( data[i].Cedula);
                        alert( data[i].Salario);
                        alert( data[i].Rol);
                        alert( data[i].Sucursal);
                    }
                }
            }
        })
    }

    /* llena los campos de trabajador para modificar */
    $scope.fillTrabajadorFields = function () {
        var i = $scope.trabajadorListIds.indexOf($scope.trabajadorModif.id);
        $scope.trabajadorModif.nombre = $scope.trabajadorListNombres[i];
        $scope.trabajadorModif.cedula = $scope.trabajadorListCedulas[i];
        $scope.trabajadorModif.apellido1 = $scope.trabajadorListApellidos1[i];
        $scope.trabajadorModif.apellido2 = $scope.trabajadorListApellidos2[i];
        $scope.trabajadorModif.salario = $scope.trabajadorListSalarios[i];
        $scope.rolModif.id = $scope.trabajadorListRoles[i];
        $scope.fillFields();
        $scope.sucursalModif.id = $scope.trabajadorListSucursales[i];
        $scope.fieldSucursalFields();
    }

    /*actualiza el trabajador en la base de datos */
    $scope.updateTrabajador = function () {
        if ($scope.trabajadorModif.nombre == "" || $scope.trabajadorModif.apellido1 == "" || $scope.trabajadorModif.apellido2 == "" || $scope.trabajadorModif.salario == "" || $scope.rolModif.id == 0 || $scope.sucursalModif.id == 0) {
            alert("Ingrese todos los campos");
        } else {
            $http.post('http://localhost:9820/api/Trabajador/' + $scope.trabajadorModif.id + '?cedula=' + $scope.trabajadorModif.cedula + '&nom=' + $scope.trabajadorModif.nombre + '&apel1=' + $scope.trabajadorModif.apellido1 + '&apel2=' + $scope.trabajadorModif.apellido2 + '&salary=' + $scope.trabajadorModif.salario + '&idRol=' + $scope.rolModif.id + '&idSucursal=' + $scope.sucursalModif.id).success(function (data, status, headers, config) {
                if (data == "true") {
                    alert("Actualizado con éxito");
                } else {
                    alert("Hubo un problema al actualizar");
                }
            }).error(function (data, status, header, config) {
                alert("Error");
            })
        }
    }

    /* elimina un trabajador */
    $scope.eliminarTrabajador = function () {
        if ($scope.trabajadorModif.confirmarEliminacion) {
            $http.post('http://localhost:9820/api/Trabajador/' + $scope.trabajadorModif.id).success(function (data, status, headers, config) {
                if (data == "true") {
                    alert("Trabajador eliminado con éxito");
                } else {
                    alert("No se pudo borrar el trabajador");
                }
            }
            ).error(function (data, status, headers, config) {
                alert("Error");
            })
        }
    }


    /* ------ PROVEEDORES ------- */
    $scope.proveedor = 
        {
            nombre: "",
            apellido1: "",
            apellido2: "",
            ced1: "",
            ced2: "",
            ced3: "",          
        }

    $scope.provModif = {
        ced: "",
        nombre: "",
        apellido1: "",
        apellido2: "",
        confirmarEliminacion : false,
    }

    $scope.provListCed = [];
    $scope.provListNom = [];
    $scope.provListApel1 = [];
    $scope.provListApel2 = [];

    /*obtiene los proveedores de la base */
    $scope.getProveedores = function () {
        $http.get("http://localhost:56099/api/Proveedor").success(function (data, status, headers, config) {
            $scope.provListCed = [];
            $scope.provListNom = [];
            $scope.provListApel1 = [];
            $scope.provListApel2 = [];
            var tamano = data.length;
            for (var i = 0; i < tamano ; i++) {
                $scope.provListCed[i] = data[i].Cedula
                $scope.provListNom[i] = data[i].Nombre;
                $scope.provListApel1[i] = data[i].Apellido1;
                $scope.provListApel2[i] = data[i].Apellido2;
            }
        }).error(function (data, status, headers, config) {
            alert("Error cargando los proveedores");
        });
    }

    /* actualiza los campos al proveedor seleccionado */
    $scope.fillProveedorFields = function () {
        var index = $scope.provListCed.indexOf($scope.provModif.ced);
        $scope.provModif.nombre = $scope.provListNom[index];
        $scope.provModif.apellido1 = $scope.provListApel1[index];
        $scope.provModif.apellido2 = $scope.provListApel2[index];
    }

    /* actualiza el proveedor en la base de datos */
    $scope.updateProveedor = function () {
        if ($scope.provModif.nombre == "" || $scope.provModif.ced == 0) {
            alert("Ingrese los campos obligatorios");
        } else {
            if ($scope.provModif.apellido1 == "") {
                $scope.provModif.apellido1 = "default";
            }
            if ($scope.provModif.apellido2 == "") {
                $scope.provModif.apellido2 = "default";
            }
            $http.post('http://localhost:56099/api/Proveedor?cedula=' + $scope.provModif.ced + '&nomb=' + $scope.provModif.nombre + '&apel1=' + $scope.provModif.apellido1 + '&apel2=' + $scope.provModif.apellido2)
            .success(function (data, status, headers, config) {
                if (data == "true") {
                    alert("Proveedor actualizado con éxito");
                } else {
                    alert("No se actualizó el proveedor");
                }
            }).error(function (data, status, headers, config) {
                alert("Error accediendo a la base de datos");

            });
        }
    }

    /*eliminar proveedor de la base de datos */
    $scope.eliminarProveedor = function () {
        if ($scope.provModif.confirmarEliminacion) {
            $http.post('http://localhost:56099/api/Proveedor?ced=' + $scope.provModif.ced).success(function (data, status, headers, config) {
                if (data == "true") {
                    alert("Eliminado con éxito");
                } else {
                    alert("No se pudo eliminar el proveedor");
                }
            }).error(function (data, status, headers, config) {
                alert("Error accediendo a la base");
            })
        } else {
            alert("Para eliminar marque la casilla de 'Confirmar eliminación'");
        }
    }


    /* ingresa un proveedor a la base de datos */
    $scope.guardarProveedor = function () {
        if ($scope.proveedor.nombre == "" ||  $scope.proveedor.ced1 == "" || $scope.proveedor.ced2 == "" || $scope.proveedor.ced3 == "") {
            alert("Favor ingrese los campos obligatorios");
        } else {
            if ($scope.proveedor.apellido1 == "") {
                $scope.proveedor.apellido1 = "default";
            }
            if ($scope.proveedor.apellido2 == "") {
                $scope.proveedor.apellido2 = "default";
            }
            $http.post('http://localhost:56099/api/Proveedor?ced1=' + $scope.proveedor.ced1 + '&ced2=' + $scope.proveedor.ced2 + '&ced3=' + $scope.proveedor.ced3 + '&nom=' + $scope.proveedor.nombre + '&apellido1=' + $scope.proveedor.apellido1 + '&apellido2=' + $scope.proveedor.apellido2)
            .success(function (data, status, headers, config) {
                if (data == "true") {
                    alert("Se insertó con éxito");
                } else {
                    alert("Error insertando el proveedor");
                }
            }).error(function (data, status, headers, config) {
                alert("Error conectando a la base");
            })
        }
    }


    /* ------------ PRODUCTOS ------------ */
    $scope.producto = {
        nombre: "",
        descripcion:"",
        precioCompra: "",
        impuesto: "no",
    }

    /*guarda un producto en la base */
    $scope.guardarProducto = function () {
        if ($scope.producto.nombre == "" || $scope.producto.precioCompra == "") {
            alert("Favor llene los campos requeridos");
        } else {
            var tieneImpuesto;
            if ($scope.producto.impuesto == "no") {
                tieneImpuesto = false;
            } else {
                tieneImpuesto = true;
            }
            if ($scope.producto.descripcion == "") {
                $scope.producto.descripcion = "default";
            }
            $http.post('http://localhost:56099/api/Producto?nombre=' + $scope.producto.nombre + '&descripcion=' + $scope.producto.descripcion + '&precioCompra= ' + $scope.producto.precioCompra + '&impuesto=' + tieneImpuesto)
            .success(function (data, status, headers, config) {
                if (data == "true") {
                    alert("Se ingresó con éxito el producto");
                } else {
                    alert("No se pudo ingresar el producto");
                }
            }).error(function (data, status, headers, config) {
                alert("Error accediendo a la base");
            })
        }
    }

    /*obtiene los productos y los proveedores */
    $scope.getProductos = function () {
        $scope.getProveedores();
    }

    
    /*-------------------------- ASIGNAR HORAS TRABAJADAS --------------------------------- */

    /*para asignar horas laborales */
    $scope.horasTrab = {
        id: "",
        horasReg: "",
        horasExtra: "",
        fecha: "",
    }

    /*guarda los id de los trabajadores de una sucursal */
    $scope.trabajadoresSucursalId = [];

    /*asigna horas laboradas a un trabajador */
    $scope.guardarHoras = function () {
        if ($scope.horasTrab.horasReg == "" || $scope.horasTrab.horasReg == 0 || $scope.horasTrab.fecha == "") {
            alert("Favor llene los campos obligatorios");
        } else {
            alert($scope.horasTrab.horasExtra);
            if ($scope.horasTrab.horasExtra == "") {
                $scope.horasTrab.horasExtra = 0;
            }
            $http.post('http://localhost:56099/api/Trabajador/' + $scope.horasTrab.id + '?horasR=' + $scope.horasTrab.horasReg + '&horasE=' + $scope.horasTrab.horasExtra + '&fecha=' + $scope.horasTrab.fecha).success(function (data, status, headers, config) {
                if (data == "false") {
                    alert("No ingresaron las horas");
                } else {
                    alert("Se ingresaron las horas exitosamente");
                }
            }).error(function (data, status, headers, config) {
                alert("Error entrando a la base de datos");
            });
        }
    }

    /* obtiene los trabajadores de la sucursal del admin */
    $scope.obtenerTrabajadoresSucursal = function () {
        $http.get('http://localhost:56099/api/Trabajador?idSucursal=' + localStorage.getItem("SUCURSAL")).success(function (data, status, headers, config) {
            if (data == "false") {
                alert("No se cargaron los trabajadores de la sucursal");
            } else {
                var tamano = data.length;
                for (var i = 0; i<tamano ; i++){
                    $scope.trabajadoresSucursalId[i] = data[i].ID;
                }
            }
        }).error(function (data, status, headers, config) {
            alert("Error cargando trabajadores");
        })
    }

});

    
