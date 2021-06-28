var hbs=require("hbs");
hbs.registerHelper('check', function(value, comparator) {
    return (value === comparator);
  });