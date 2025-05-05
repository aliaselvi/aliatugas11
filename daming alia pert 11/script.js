document.getElementById("formPerhitungan").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const panjang = parseInt(document.getElementById("panjang").value);
    const jenis = document.getElementById("jenis").value;
    const biayaPerMeter = parseInt(document.getElementById("biaya_per_meter").value);
  
    // Tentukan faktor biaya berdasarkan jenis kapal
    let faktorJenis;
    if (jenis === "kapal_berbobot_ringan") {
      faktorJenis = 1.1; // Faktor biaya untuk kapal berbobot ringan
    } else if (jenis === "kapal_berbobot_berat") {
      faktorJenis = 1.3; // Faktor biaya untuk kapal berbobot berat
    } else {
      faktorJenis = 1;
    }
  
    // Perhitungan total biaya
    const totalBiaya = panjang * biayaPerMeter * faktorJenis;
  
    // Menampilkan data yang dikirim
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
      <strong>Data Terkirim:</strong><br>
      Jenis Kapal: ${jenis === "kapal_berbobot_ringan" ? "Kapal Berbobot Ringan" : "Kapal Berbobot Berat"}<br>
      Panjang Kapal: ${panjang} meter<br>
      Biaya per Meter: Rp ${biayaPerMeter.toLocaleString()}<br>
      Faktor Jenis Kapal: x${faktorJenis}
    `;
    outputDiv.style.display = "block";
  
    // Menampilkan total biaya
    const totalDiv = document.getElementById("totalBiaya");
    totalDiv.innerText = `Rp ${totalBiaya.toLocaleString()}`;
  });
  