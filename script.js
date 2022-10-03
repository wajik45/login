// fe
const bukaReg = document.querySelector('.kotak .reg');
const closeReg = document.querySelector('.kotak .close');

const ktkReg = document.querySelector('.kotak.dua');

bukaReg.onclick = function () {
    ktkReg.style.transform = 'scale(1)';
}
closeReg.onclick = function () {
    ktkReg.style.transform = 'scale(0)';
}

// register
const btnRegister = document.getElementById('register');
const rUsername = document.getElementById('r-username');
const rPassword = document.getElementById('r-password');
const namaLengkap = document.getElementById('nama-lengkap');

btnRegister.addEventListener('click', function () {

    if (rUsername.value.length < 3 && rPassword.value.length < 3 && namaLengkap.value.length < 3) {
        alert('minimal tiga deck');

        rUsername.style.borderColor = 'red';
        rPassword.style.borderColor = 'red';
        namaLengkap.style.borderColor = 'red';
    } else if (rUsername.value.length > 16 || rPassword.value.length > 16 || namaLengkap.value.length > 32) {
        alert('kebanyakan deck');

        rUsername.style.borderColor = 'red';
        rPassword.style.borderColor = 'red';
        namaLengkap.style.borderColor = 'red';
    } else {

        if (rUsername.value.length < 3 || rPassword.value.length == 0 || namaLengkap.value.length == 0) {
            alert('isi semua deck');
            rUsername.style.borderColor = 'red';
            rPassword.style.borderColor = 'red';
            namaLengkap.style.borderColor = 'red';
        } else if (rPassword.value.length < 3 || rUsername.value.length == 0 || namaLengkap.value.length == 0) {
            alert('isi semua deck');
            rUsername.style.borderColor = 'red';
            rPassword.style.borderColor = 'red';
            namaLengkap.style.borderColor = 'red';
        } else if (namaLengkap.value.length < 3 || rUsername.value.length == 0 || rPassword.value.length == 0) {
            alert('isi semua deck');
            rUsername.style.borderColor = 'red';
            rPassword.style.borderColor = 'red';
            namaLengkap.style.borderColor = 'red';
        } else {
            localStorage.setItem('nama', namaLengkap.value);
            localStorage.setItem('username', rUsername.value);
            localStorage.setItem('password', rPassword.value);
            alert('ente berhasil mendaftar');

            rUsername.style.borderColor = 'green';
            rPassword.style.borderColor = 'green';
            namaLengkap.style.borderColor = 'green';

            this.innerHTML = 'ok';
            ktkReg.style.transform = 'scale(0)';
        }
    }
});

// login
const btnLogin = document.getElementById('login');
const username = document.getElementById('username');
const password = document.getElementById('password');

const container = document.querySelector('.container');
const containerDua = document.querySelector('.container-dua');

btnLogin.addEventListener('click', function () {
    if (username.value == localStorage.getItem('username') && password.value == localStorage.getItem('password')) {
        localStorage.setItem('sip', username.value);
        location.reload();
        container.style.display = 'flex';
        containerDua.style.display = 'none';
    } else if (username.value.length < 3) {
        alert('minimal 3 deck');
        username.style.borderColor = 'red';
        password.style.borderColor = 'red';
    } else {
        alert('username / password salah');
        username.style.borderColor = 'red';
        password.style.borderColor = 'red';
    }
});

if (localStorage.getItem('sip')) {
    container.style.display = 'flex';
    containerDua.style.display = 'none';
} else {
    container.style.display = 'none';
    containerDua.style.display = 'flex';
}

// logout
const logout = document.querySelector('.lg');
logout.onclick = () => {
    const yakin = confirm('keluar akun ente langsung ilang');
    if (yakin) {
        localStorage.clear();
        location.reload();
    } else {
        alert('orajadi dah');
    }
}

// tambahan

const uNama = document.querySelector('.u-nama');
const spanDua = document.querySelector('.kartu span');
const nama = document.querySelector('.nama');

uNama.innerHTML = `${localStorage.getItem('username')}`;
spanDua.innerHTML = `${localStorage.getItem('nama')}`;
nama.innerHTML = `${localStorage.getItem('nama')}`;