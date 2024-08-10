function kalkulator(angka1, angka2, operasi) {
  let hasil;

  switch (operasi) {
    case 'tambah':
      hasil = angka1 + angka2;
      break;
    case 'kurang':
      hasil = angka1 - angka2;
      break;
    default:
      hasil = 'Operasi tidak dikenal';
  }

  return hasil;
}

// Contoh penggunaan
const angka1 = 5;
const angka2 = 3;
const operasi = 'tambah';

console.log(`Hasil: ${kalkulator(angka1, angka2, operasi)}`);
