
var data_str = "";
for (var i=0; i<data.length; i += 50000) {
    data_str += String.fromCharCode.apply(null, data.slice(i, i+50000));
}