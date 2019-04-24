<?php


$username = $_POST['username'];
$password1 = $_POST['password'];
$email = $_POST['email'];
if(!empty($username) || !empty($password1) || !empty($email))
{
   $host="localhost";
   $dbUsername="root";
   $dbPassword="";
   $dbname="lin";

   $conn = new mysqli($host, $dbUsername, $dbPassword,$dbname);
// Check connection
if (mysqli_connect_error) {
    die('Connect Error('.mysqli_connect_errno().')'. mysqli_connect_error());
} 
else{
   $SELECT = "SELECT email from login Where email=? Limit 1";
    $INSERT = "INSERT Into login ('username' , 'password1','email') values(?,?)";
   $stmt=$conn->prepare($SELECT);
   $stmt->bind_param("s",$email);
    $stmt->execute();
    $stmt->bind_result($email);
    $stmt->store_result();
    $rnum=$stmt->num_rows;
    if($rnum==0)
    {
        $stmt->close();
        $stmt=$conn->prepare($INSERT);
        $stmt->bind_param("ssssii",$username,$password1,$email);
        $stmt->execute();
        echo "New Record inserted";
    }
    else{
        echo "Someone already registerd by using this id";
    }
    $stmt->close();
    $conn->close();
}
}
else
{
    echo "All fields are required";
    die();
}


?>