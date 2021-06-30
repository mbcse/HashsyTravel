var hbs=require("hbs");
hbs.registerHelper('check', function(value, comparator) {
    return (value === comparator);
  });

hbs.registerHelper('if', function(val, op1, op2) {
  return val?op1:op2;
});  