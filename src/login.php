<?php
header('Content-Type: text/html; charset=utf-8');
 $username=$_POST['username'];
  echo json_encode($username);

?>