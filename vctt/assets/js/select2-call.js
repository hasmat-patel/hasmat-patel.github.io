$(".js-select2-custom").select2({
  placeholder: "Select here",
  dropdownPosition: "below",
  dropdownCssClass: "select2-dropdown",
  minimumResultsForSearch: -1,
  width: '100%',
});

$("#phone-number-select2").select2({
  placeholder: "Select here",
  dropdownPosition: "below",
  dropdownCssClass: "phone-number-dropdown search-input-dropdown",
  minimumResultsForSearch: 1,
  width: '100%',
});

$(".select2-open-search").select2({
  dropdownPosition: "below",
  dropdownCssClass: "search-input-dropdown",
  minimumResultsForSearch: 1,
  width: '100%',
});

$(".js-select2-custom-multiple").select2({
  placeholder: "Select",
  dropdownPosition: "below",
  dropdownCssClass: "dropdown-custom-multiple2",
  minimumResultsForSearch: -1,
  width: '100%',
});

$(".form-select").select2({
  minimumResultsForSearch: Infinity,  
  width: '100%',
});