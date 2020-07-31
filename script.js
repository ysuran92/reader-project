document.getElementById("btn2").style.display = "none";

document.getElementById("btn").onclick = function() {
    let parrafo = document.getElementById("parrafo1");
    parrafo.innerHTML = "Integer rutrum a enim eget blandit. Fusce tellus neque, placerat ullamcorper ligula at, scelerisque auctor quam. Quisque rutrum est non ipsum tincidunt lacinia. Vivamus vel sollicitudin lacus. Nulla facilisi. Morbi porta ex tincidunt turpis iaculis congue. Aenean in imperdiet neque. In et libero at lectus tincidunt mollis vel ac arcu.";
    document.getElementById("btn").style.display = "none";
    document.getElementById("btn2").style.display = "block";
};

document.getElementById("btn2").onclick = function() {
    let volver = document.getElementById("parrafo1");
    volver.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed gravida eros. Donec non cursus sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ultrices ut nisl a faucibus.";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn").style.display = "block";
};