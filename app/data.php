<?php
session_start();
header('Content-Type: application/json');
$email=$_POST['email'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	if (strtolower(filter_input(INPUT_SERVER, 'HTTP_X_REQUESTED_WITH')) === 'xmlhttprequest') {
		if (!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {  //  Request Call********************
			$to = 'deepkarmakar61@gmail.com';
		    //	$to = '64@a1future.com';
			
			$name=$_POST['name'];
			$email=$_POST['email'];
			$captcha=$_POST['captcha'];
			$sub=$_POST['subject'];
			$msg=$_POST['message'];
			//exit;
			$from="From: deepkarmakar61@gmail.com";
			$revertfrom="From: themeplify";

			$subject = 'Inquiry Through :: themeplify';

			$revertsubject = 'Through :: themeplify';

			$message = "Inquiry Through :: themeplify - \n\n

			Name : $name\n
			Subject  : $sub\n
			Email  : $email\n
			Message : $msg\n\n
			Thanking You,
			$name
			";
			$revertmessage = "Through :: themeplify \n\n

			Thank You, we will contact you soon.";

			$headers  = 'MIME-Version: 1.0' . "\r\n";
			$headers .= 'Content-type: text/plain; charset=iso-8859-1' . "\r\n";

			// Additional headers
			$headers .= 'To: '.$to. "\r\n";
			$headers .= "From: deepkarmakar61@gmail.com\r\n";

			$revertheaders .= 'To: '.$email. "\r\n";
			$revertheaders .= "From: deepkarmakar61@gmail.com\r\n";

				if( mail($to, $subject, $message, $headers) )
				{
					// echo "mail sent done";
					$revertmail = mail($email, $revertsubject, $revertmessage, $revertheaders);
					$status=1;

				}
				else{
					// echo "Mail sent error";
					$status=0;
				}
		}
		else{
			$status = 3;
		}
	}
	else{
		$status = 2;
	}

	$myarray = array('status' => $status);
	echo json_encode($myarray);
}
else{
	header("location: index.html");
	die();
}

?>