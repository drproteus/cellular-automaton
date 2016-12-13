var initialize = function() {
  window.gol = CellularAutomaton;
  window.gol.init(25, 40);
  window.paused = true;
  if (window.tid) {
    window.clearInterval(window.tid);
  }
  printDivwise();
}

var update = function() {
  window.gol.update();
  printDivwise();
  document.querySelector("#generation_count").innerHTML = window.gol.generations;
}

var printDivwise = function() {
  var html = "";
  window.gol.space.grid.forEach(function(cellRow) {
    html += '<div class="cellrow">'
    cellRow.forEach(function(cell) {
      if (cell.state === 0) {
        html += '<div class="cell dead"></div>';
        } else {
        html += '<div class="cell alive"></div>';
        }
    });
    html += "</div>"
  });
  document.querySelector("#goldiv").innerHTML = html;
}

var printToHtml = function() {
  var html = "";
  window.gol.space.grid.forEach(function(cellRow) {
    html += "<pre>"
    cellRow.forEach(function(cell) {
      if (cell.state === 0) {
        html += " ";
        } else {
        html += "☺";
        }
    });
    html += "</pre>"
  });
  document.querySelector("#goldiv").innerHTML = html;
}

var start = function() {
  if (window.paused) {
    window.tid = window.setInterval(update, 60);
    window.paused = false;
  }
}

var stop = function() {
  if (!window.paused) {
    window.clearInterval(window.tid);
    window.paused = true;
  }
}
