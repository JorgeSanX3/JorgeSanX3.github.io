// Datos para cargar
  var estadosMexico = ["Hidalgo", "Querétaro"];
  var municipiosHidalgo = ["Tula", "Tepeji", "Mixquiahuala", "Tezontepec de Aldama"];
  var municipiosQueretaro = ["El Marqués", "Pedro Escobedo", "Peñamiller"];
  var localidadesTula = ["El Llano", "San Marcos", "San Miguel Vindho"];
  var localidadesTepeji = ["San Buenaventura", "Santa María Magdalena", "Benito Juárez"];
  var localidadesMixquiahuala = ["Teñhe", "Tepeitic", "Motobatha"];
  var localidadesTezontepec = ["La Palma", "Santa Maria Batha (SMB)", "Panuaya"];
  var localidadesElMarques = ["Saldarriaga", "El Mirador", "La Cañada"];
  var localidadesPedroEscobedo = ["La Lira", "El Sauz", "San Clemente"];
  var localidadesPenamiller = ["Agua Fría", "Villa Emiliano Zapata", "Camargo"];

  var estadosUSA = ["Florida", "Texas"];
  var municipiosFlorida = ["Orlando", "Miami", "Oakland"];
  var municipiosTexas = ["Houston", "Dallas", "San Antonio"];
  var localidadesOrlando = ["Apopka", "Bay Lake", "Belle Isle"];
  var localidadesMiami = ["Aventura", "Coral Gables", "Doral"];
  var localidadesOakland = ["Fincas Lloyd", "Garden Acres", "Coral Heights"];
  var localidadesHouston = ["Downtown", "River Oaks", "Midtown"];
  var localidadesDallas = ["Collin", "Dallas", "Denton"];
  var localidadesSanAntonio = ["Atascosa", "Bandera", "Bexar"];

  function cargarEstados() {
    var paisSelect = document.getElementById("paisSelect");
    var estadoSelect = document.getElementById("estadoSelect");
    estadoSelect.innerHTML = '<option value="">Seleccionar estado</option>';
    if (paisSelect.value === "Mexico") {
      estadosMexico.forEach(function(estado) {
        var option = document.createElement("option");
        option.text = estado;
        estadoSelect.add(option);
      });
    } else if (paisSelect.value === "Estados Unidos") {
      estadosUSA.forEach(function(estado) {
        var option = document.createElement("option");
        option.text = estado;
        estadoSelect.add(option);
      });
    }
  }

  function cargarMunicipios() {
    var estadoSelect = document.getElementById("estadoSelect");
    var municipioSelect = document.getElementById("municipioSelect");
    municipioSelect.innerHTML = '<option value="">Seleccionar municipio</option>';
    if (estadoSelect.value === "Hidalgo") {
      municipiosHidalgo.forEach(function(municipio) {
        var option = document.createElement("option");
        option.text = municipio;
        municipioSelect.add(option);
      });
    } else if (estadoSelect.value === "Queretaro") {
      municipiosQueretaro.forEach(function(municipio) {
        var option = document.createElement("option");
        option.text = municipio;
        municipioSelect.add(option);
      });
    }else if (estadoSelect.value === "Florida") {
      municipiosFlorida.forEach(function(municipio) {
        var option = document.createElement("option");
        option.text = municipio;
        municipioSelect.add(option);
      });
    }else if (estadoSelect.value === "Texas") {
      municipiosTexas.forEach(function(municipio) {
        var option = document.createElement("option");
        option.text = municipio;
        municipioSelect.add(option);
      });
    }
  }

  function cargarLocalidades() {
    var municipioSelect = document.getElementById("municipioSelect");
    var localidadSelect = document.getElementById("localidadSelect");
    localidadSelect.innerHTML = '<option value="">Seleccionar localidad</option>';
    if (municipioSelect.value === "Tula") {
      localidadesTula.forEach(function(localidad) {
        var option = document.createElement("option");
        option.text = localidad;
        localidadSelect.add(option);
      });
    } else if (municipioSelect.value === "Tepeji") {
      localidadesTepeji.forEach(function(localidad) {
        var option = document.createElement("option");
        option.text = localidad;
        localidadSelect.add(option);
      });
    } else if (municipioSelect.value === "Mixquiahuala") {
      localidadesMixquiahuala.forEach(function(localidad) {
        var option = document.createElement("option");
        option.text = localidad;
        localidadSelect.add(option);
      });
    }else if (municipioSelect.value === "Tezontepec de Aldama") {
      localidadesTezontepec.forEach(function(localidad) {
        var option = document.createElement("option");
        option.text = localidad;
        localidadSelect.add(option);
      });
    }else if (municipioSelect.value === "El Marqués") {
      localidadesElMarques.forEach(function(localidad) {
        var option = document.createElement("option");
        option.text = localidad;
        localidadSelect.add(option);
      });
    }else if (municipioSelect.value === "Pedro Escobedo") {
      localidadesPedroEscobedo.forEach(function(localidad) {
        var option = document.createElement("option");
        option.text = localidad;
        localidadSelect.add(option);
      });
    }else if (municipioSelect.value === "Peñamiller") {
      localidadesOrlando.forEach(function(localidad) {
        var option = document.createElement("option");
        option.text = localidad;
        localidadSelect.add(option);
      });
    }else if (municipioSelect.value === "Orlando") {
      localidadesOrlando.forEach(function(localidad) {
        var option = document.createElement("option");
        option.text = localidad;
        localidadSelect.add(option);
      });
    } else if (municipioSelect.value === "Miami") {
      localidadesMiami.forEach(function(localidad) {
        var option = document.createElement("option");
        option.text = localidad;
        localidadSelect.add(option);
      });
    } else if (municipioSelect.value === "Oakland") {
      localidadesOakland.forEach(function(localidad) {
        var option = document.createElement("option");
        option.text = localidad;
        localidadSelect.add(option);
      });
    } else if (municipioSelect.value === "Houston") {
      localidadesHouston.forEach(function(localidad) {
        var option = document.createElement("option");
        option.text = localidad;
        localidadSelect.add(option);
      });
    } else if (municipioSelect.value === "Dallas") {
      localidadesDallas.forEach(function(localidad) {
        var option = document.createElement("option");
        option.text = localidad;
        localidadSelect.add(option);
      });
    } else if (municipioSelect.value === "San Antonio") {
      localidadesSanAntonio.forEach(function(localidad) {
        var option = document.createElement("option");
        option.text = localidad;
        localidadSelect.add(option);
      });
    }
  }

  document.getElementById("ubicacionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    mostrarUbicacion();
  });

  function mostrarUbicacion() {
    var pais = document.getElementById("paisSelect").value;
    var estado = document.getElementById("estadoSelect").value;
    var municipio = document.getElementById("municipioSelect").value;
    var localidad = document.getElementById("localidadSelect").value;

    document.getElementById("paisSeleccionado").textContent = pais;
    document.getElementById("estadoSeleccionado").textContent = estado;
    document.getElementById("municipioSeleccionado").textContent = municipio;
    document.getElementById("localidadSeleccionada").textContent = localidad;

    document.getElementById("ubicacionSeleccionada").style.display = "block";
  }