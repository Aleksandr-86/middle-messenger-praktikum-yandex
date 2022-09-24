import hbs from "Handlebars"

hbs.registerHelper("some", function (aString) {
  return aString.toUpperCase();
});
