<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: TangledDemo';
    $to = 'nicknauert@gmail.com';
    $subject = 'Message From Your Site';
    $human = $_POST['human'];

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit']) {
        if (mail ($to, $subject, $body, $from)) {
	    echo '<p>Email Recieved!</p>';
	} else {
	    echo '<p>Something went wrong, go back and try again!</p>';
	}
?>
