const namaMember = document.getElementById('judul');

const namaTersimpan = localStorage.getItem('nama');
if (namaTersimpan) {
    namaMember.innerHTML = 'Halo ' + namaTersimpan + '!';
}

function gantiNama(e) {
    let nama = prompt('Masukkan nama Anda:');
    if (nama && nama.trim() !== '') {
        localStorage.setItem('nama', nama);
        namaMember.innerHTML = 'Halo ' + nama + '!';
    } else {
        alert('Nama tidak boleh kosong!');
    }

    e.preventDefault();
}

function hapusNama(e) {
    localStorage.removeItem('nama');
    namaMember.innerHTML = 'Selamat Datang, Member!';
    alert('Nama berhasil dihapus!');

    e.preventDefault();
}
