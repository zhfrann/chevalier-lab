<?php
$host = "localhost";
$user = "root";
$password = "muh13zhafran";
$database = "cheva_backend";

// Koneksi ke database
$conn = mysqli_connect($host, $user, $password, $database);
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

// CREATE (Insert data)
$query = "INSERT INTO users (nama, email) VALUES ('John Doe', 'john@example.com')";
$result = mysqli_query($conn, $query);
if ($result) {
    echo "sukses insert";
} else {
    echo "gagal insert: " . mysqli_error($conn);
}

// READ (Ambil data)
$query = "SELECT * FROM users";
$result = mysqli_query($conn, $query);
if ($result) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<br>Nama: " . $row['nama'] . " - Email: " . $row['email'];
    }
} else {
    echo "gagal read: " . mysqli_error($conn);
}

// UPDATE (Update data)
$query = "UPDATE users SET email = 'john.doe@example.com' WHERE nama = 'John Doe'";
$result = mysqli_query($conn, $query);
if ($result) {
    echo "<br>anjay sukses update";
} else {
    echo "<br>gagal bang update: " . mysqli_error($conn);
}

// DELETE (Hapus data)
$query = "DELETE FROM users WHERE nama = 'John Doe'";
$result = mysqli_query($conn, $query);
if ($result) {
    echo "<br>anjay sukses delete";
} else {
    echo "<br>gagal bang delete: " . mysqli_error($conn);
}

// Tutup koneksi
mysqli_close($conn);
?>
