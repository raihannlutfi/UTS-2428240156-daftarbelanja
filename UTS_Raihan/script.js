let nama_barang = document.getElementById("nama_barang");
let jumlah = document.getElementById("jumlah");
let keterangan = document.getElementById("keterangan");

function simpan(){
    console.log(nama_barang.value)
    console.log(jumlah.value)
    console.log(keterangan.value)
    

    // localStorage.setItem("npm",npm.value)
    // localStorage.setItem("nama",nama.value)

    // jika local storage ada isi atau value
    if(localStorage.getItem("barang")===null){
        // simpan array kososng []
        localStorage.setItem("barang", "[]")
    }
    // panggil local storage (konversi string = > object)
    let data = JSON.parse(localStorage.getItem("barang"))
    console.log(data)

    // simpan value npm dan nama ke dalam object data
    data.push({
        nama_barang: nama_barang.value,
        jumlah: jumlah.value,
        keterangan: keterangan.value
    })
    console.log(data)

    // simpan data terbaru ke dalam local storage
    // konversi dari object menjadi string
    localStorage.setItem("barang", JSON.stringify(data))

    // panggil tampil
    tampil()
}

function tampil() {
    // panggil local storage
    let hasil = JSON.parse(localStorage.getItem("barang"))

    // clear element ul id= list-mhs
    document.getElementById("list-barang").innerHTML=""

    // lakukan perulangan ( forEach)
    hasil.forEach(element => {
        // console.log(element)
        document.getElementById("list-barang").innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12">
         <h4 class= "text-primary">${element.nama_barang}</h4> 
         <h6 class="text-danger">${element.jumlah}</h6> 
         <p>${element.keterangan}</p>
        </div>`
    });
}
// jalankan function tampil()
tampil()
