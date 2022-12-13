const empleado = {
  bruto: 200000,
  hijos: 2,
  pagas: 14,
};

const carga = empleado.hijos;

const billetes = empleado.bruto;

if (billetes < 12000 && carga == 0) {
  console.log((empleado.bruto - empleado.bruto * 0) / empleado.pagas);
} else if (billetes < 24000 && carga == 0) {
  console.log((empleado.bruto - empleado.bruto * 0.08) / empleado.pagas);
} else if (billetes < 34000 && carga == 0) {
  console.log((empleado.bruto - empleado.bruto * 0.16) / empleado.pagas);
} else if (billetes > 34000 && carga == 0) {
  console.log((empleado.bruto - empleado.bruto * 0.3) / empleado.pagas);
} else if (billetes < 12000 && carga == 1) {
  console.log((empleado.bruto - empleado.bruto * 0) / empleado.pagas);
} else if (billetes < 24000 && carga == 1) {
  console.log((empleado.bruto - empleado.bruto * 0.06) / empleado.pagas);
} else if (billetes < 34000 && carga == 1) {
  console.log((empleado.bruto - empleado.bruto * 0.14) / empleado.pagas);
} else if (billetes > 34000 && carga == 1) {
  console.log((empleado.bruto - empleado.bruto * 0.28) / empleado.pagas);
} else if (billetes < 12000 && carga == 2) {
  console.log((empleado.bruto - empleado.bruto * 0) / empleado.pagas);
} else if (billetes < 24000 && carga == 2) {
  console.log((empleado.bruto - empleado.bruto * 0.04) / empleado.pagas);
} else if (billetes < 34000 && carga == 2) {
  console.log((empleado.bruto - empleado.bruto * 0.12) / empleado.pagas);
} else if (billetes > 34000 && carga == 2) {
  console.log((empleado.bruto - empleado.bruto * 0.26) / empleado.pagas);
}
