/**
 * Fungsi untuk menghasilkan deret Fibonacci hingga elemen ke-n menggunakan rekursi.
 * @param {number} n - Indeks elemen Fibonacci
 * @returns {number} - Elemen ke-n dari deret Fibonacci
 */
function fibonacci(n) {
  if (n === 0) {
    return 0; // Basis rekursi
  }
  if (n === 1) {
    return 1; // Basis rekursi
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Rekursi
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
