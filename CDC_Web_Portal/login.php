<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();

<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();

$users = [
    ['username' => 'Mariano', 'password' => 'Papucho2024', 'homepage' => 'HaltomCity.html'],
    ['username' => 'user', 'password' => 'user', 'homepage' => 'Home-User.html'],
    ['username' => 'user1', 'password' => 'user1', 'homepage' => 'Home-User1.html']
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $authenticatedUser = null;

    foreach ($users as $user) {
        if ($user['username'] === $username && $user['password'] === $password) {
            $authenticatedUser = $user;
            break;
        }
    }

    if ($authenticatedUser) {
        $_SESSION['username'] = $authenticatedUser['username'];
        header('Location: ' . $authenticatedUser['homepage']);
        exit();
    } else {
        echo 'Invalid username or password';
    }
}
?>

