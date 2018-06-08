<?php
Header("Content-type: application/html"); //no comment
Header("Content-Disposition: inline; filename=v3-steal-content-of-session-files-downloaded.html"); 
readfile("test3.html"); 
?>