let result = document.getElementById("result");

function startCounter() {
  var start = document.getElementById("start");
  var end = document.getElementById("end");
  var step = document.getElementById("step");

  if (step.value <= 0 && start.value.length > 0 && end.value.length > 0) {
    step.value = 1;
  }

  detectValueError(start);
  detectValueError(end);

  if (start.value.length == 0 || end.value.length == 0) {
    return (result.innerHTML = "Preencha os campos para contar!");
  }

  result.innerHTML = "Contando: ";

  count(start.value, end.value, step.value);
}

function count(start, end, step) {
  var startValue = Number(start);
  var endValue = Number(end);
  var stepValue = Number(step);
  var count;

  if (startValue < endValue) {
    for (count = startValue; count <= endValue; count += stepValue) {
      result.innerHTML += ` ${count}, `;
    }
  } else {
    for (count = startValue; count >= endValue; count -= stepValue) {
      result.innerHTML += `${count}, `;
    }
  }

  result.innerHTML = result.innerHTML.slice(0, -2) + ".";
}

function detectValueError(elem) {
  if (elem.value.length == 0) {
    elem.classList.add("error");
  } else {
    elem.classList.remove("error");
  }
}
