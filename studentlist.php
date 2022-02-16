<?php
    define('DB_HOST','localhost');
    define('DB_USER','root');
    define('DB_PASS','');
    define('DB_NAME','library');

    $con = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME);
    if ($con -> connect_error)
    {
        http_response_code(404);
        die("Error: ".$con -> connect_error);
    }

    $sql = 'SELECT * FROM students ORDER BY surname';
    $result = $con -> query($sql);

    if ($result -> num_rows > 0)
    {
        //van adat
        $value = $result -> fetch_all(MYSQLI_ASSOC);
        echo json_encode($value);
        //echo '<pre>';
        //print_r($value);
        //echo '</pre>';
    }

    else {
        //nincs adat
    }
?>