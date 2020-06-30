$(document).ready(function () {
  // Obtención de datos sobre las provincias españolas
  $.getJSON('./services/services_region.json').then(findProvince);
  // Función de filtrado y generado de título de la sección principal
  function findProvince(response) {
    let provinceMadrid = response.filter((provinceData) => provinceData.name === 'Madrid');
    provinceMadrid.map((madridData) => {
      $(`<h1>Ciudades de ${madridData.name}</h1>`).attr('class', 'text-center mb-5').insertBefore($('.list'));
    });
  }
  // Obtención de datos sobre las ciudades de Madrid 
  $.getJSON('./services/services_ciudades14.json').then(showFilteredProvinces);
  // Función de filtrado y generado del listado de la sección principal
  function showFilteredProvinces(response) {
    let provinces = response.map((province) => province.name);
    let filteredProvinces = provinces.filter((str) => /[aeiou]$/i.test(str));
    filteredProvinces.forEach((province) => {
      $(`<li>${province}</li>`).attr('class', 'col-md-3 rounded-pill bg-secondary text-center text-white p-2 m-3').appendTo($('.main-info').children('ul'));
    });
  }
});
