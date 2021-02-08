var distance = document.getElementById("distance");
var poids = document.getElementById("poids");
var total = document.getElementById("total");
function valider() {
  var colisRegex = /^[a-zA-Z]{2}\d{3}$/;
  if (!colisRegex.test(document.getElementById("colis").value)) {
    alert("N de format colis n'est pas correct");
    return false;
  }
  var numerique = /^\d+$/;
  if (!numerique.test(distance.value)) {
    alert("distance doit etre numerique");
    return false;
  }
  if (!numerique.test(poids.value)) {
    alert("poids doit etre numerique");
    return false;
  }
  return true;
}
document.getElementById("calculer").addEventListener("click", function () {
  if (!valider()) return;
  if (parseInt(poids.value) < 10) {
    total.value = parseInt(distance * 0.5);
  } else {
    total.value = parseInt(distance.value) * (parseInt(poids.value) / 10) * 0.3;
  }
  if (document.querySelector('input[name="mode"]:checked').value == "express") {
    total.value = parseInt(total.value) + (parseInt(total.value) * 20) / 100;
  }
});
document.getElementById("effacer").onclick = function () {
  var inputs = document.querySelectorAll('input[type="text"]');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
};
