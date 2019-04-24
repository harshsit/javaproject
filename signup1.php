<html>
    <head><title>Register</title></head>
    <body>
        <form action="signup1.php" method="POST">
            Username: <input type="text" name="username">
            <br> />Password : <input type="password" name="password">
            <br> />Email : <input type="text" name="email">
            <br> /><input type="submit" name="submit" value="Register">
</form>
</body>
</html>

<?php

 
     require('connect.php');
     $username=@$_POST['username'];
     $password=@$_POST['password'];
     $email=@$_POST['email'];

     if(isset($_POST['submit']))
     {
         if($query=mysql_query("INSERT INTO login ('id','username','password','email') VALUES ('','".$username."','".$password."',\'')"))
         {
         echo  "Success";}
         else{
            echo"Failure";} 
         }
        
 
 
 

   
?>