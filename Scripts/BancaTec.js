/* FUNCIONES PARA VISTA ADMINISTRACIÓN */

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
    else if (document.getElementById("optClientes").checked) {
        document.getElementById("ingresarCliente").hidden = "";
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
    else if (document.getElementById("optClientes").checked) {
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
    else if (document.getElementById("optClientes").checked) {
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
    document.getElementById('ingresarCliente').hidden = "hidden";
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
