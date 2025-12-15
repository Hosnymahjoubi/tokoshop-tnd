/* ===== Blanter Tokoshop - TND Currency ===== */

function angkaToTND(price){
  if (price === null || price === undefined || isNaN(price)) {
    return '0.000 د.ت';
  }

  price = parseFloat(price);

  let formatted = price.toFixed(3);
  formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return formatted + ' د.ت';
}

/* Override original formatter */
window.angkaToRp = angkaToTND;
