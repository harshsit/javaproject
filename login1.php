<?php

 {
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
     }
 
 }
 

   
?>