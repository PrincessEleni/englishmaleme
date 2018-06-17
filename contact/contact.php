<?php
	// Message Vars
	$msg = '';
	$msgClass = '';

	// Check For Submit
	if(filter_has_var(INPUT_POST, 'submit')){
		// Get Form Data
		$name = htmlspecialchars($_POST['name']);
		$email = htmlspecialchars($_POST['email']);
		$phone = htmlspecialchars($_POST['phone']);
		$subject = htmlspecialchars($_POST['subject']);
		$message = htmlspecialchars($_POST['message']);

		// Check Required Fields
		//if(!empty($email) && !empty($name) && !empty($phone) && !empty($message)){
			// Passed
			// Check Email
			if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
				// Failed
				$msg = 'Please use a valid email';
				$msgClass = 'alert-danger';
			} else {
				// Passed
				$toEmail = 'eleni_ver@hotmail.com';
				$subject = 'Contact Request From '.$name;
				$body = '<h2>Contact Request</h2>
					<h4>Name</h4><p>'.$name.'</p>
					<h4>Email</h4><p>'.$email.'</p>
					<h4>Phone</h4><p>'.$phone.'</p>
					<h4>Subject</h4><p>'.$subject.'</p>
					<h4>Message</h4><p>'.$message.'</p>
				';

				// Email Headers
				$headers = "MIME-Version: 1.0" ."\r\n";
				$headers .="Content-Type:text/html;charset=UTF-8" . "\r\n";

				// Additional Headers
				$headers .= "From: " .$name. "<".$email.">". "\r\n";

				if(mail($toEmail, $subject, $body, $headers)){
					// Email Sent
					$msg = 'Your email has been sent';
					$msgClass = 'alert-success';
					//header('Location: ' . $_SERVER['PHP_SELF'], true, 303);
                    //die();
                    $name = '';
                    $email = '';
					$phone = '';
					$subject = '';
                    $message = '';
				} else {
					// Failed
					$msg = 'Your email was not sent';
					$msgClass = 'alert-danger';
				}
			}
		//} else {
			// Failed
		//	$msg = 'Please fill in all fields';
		//	$msgClass = 'alert-danger';
		//}
	}
?>
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>English Maleme Contact Us</title>
    <script type="text/javascript" src="../jquery.min.js"></script>
    <script src="setStrings.js" type="text/javascript"></script>
    <script src="../smallScreenMenu.js" type="text/javascript"></script>
    <script src="../translation.js" type="text/javascript"></script>
    <script src="../jumpToSubPages.js" type="text/javascript"></script>
    <script src="../includeHtml.js" type="text/javascript"></script>
</head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="../style.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
    body, h1, h2, h3, h4, h5, h6 {
        font-family: "Lato", sans-serif;
    }

    .w3-bar, h1, button {
        font-family: "Montserrat", sans-serif;
    }

    .fa-history {
        font-size: 90px;
    }
</style>
<body>
<button class="translate translate-button blue-background w3-medium button" style="left: 88%;" id="en">English</button>
    <button class="translate translate-button blue-background w3-medium button" style="left: 93%;" id="gr">Ελληνικά</button>
    
    <div id="Contact Us">

        <div class="row green-background">
            <div class="w3-row ">
                <div class="w3-container w3-third blue-text w3-padding-64">
                    <div class="w3-twothird" style="margin-top: 30px; margin-left: 50px;">
                        <h1><i id="title" class="title lang" key="title"></i></h1>
                        <h5 id="paragraph" class="w3-padding-32 lang" key="paragraph"></h5>
                        <p id="address" class="lang" key="address"></p>
                        <p id="email" class="lang" key="email"></p>
                        <p id="phone" class="lang" key="phone"></p>
                        <p id="skype" class="lang" key="skype"></p>
                    </div>
                </div>
                <div class="w3-container w3-twothird w3-padding-64" style="margin-top: 30px;">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.3225366168726!2d23.85031331514712!3d35.52102638023195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149c8a040820f145%3A0xd193791860f0f87f!2zzprOrc69z4TPgc6_IM6ezq3Ovc-Jzr0gzpPOu8-Jz4PPg8-Ozr0gzpzOkc6bzpXOnM6V!5e0!3m2!1sel!2sse!4v1526054793128" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>

            </div>
        </div>
        
		<div class="blue-background w3-padding-32 w3-container">
            <h3 style="margin-left: 55px;">Contact Form</h3>
            <div class="containerContact w3-padding-64" style="width: 90%; margin: auto;margin-bottom: 20px;">
    		<?php if($msg != ''): ?>
    			<div class="alert <?php echo $msgClass; ?>"><?php echo $msg; ?></div>
    		<?php endif; ?>
			  <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
				  <div>
					  <label for="name">Full Name *</label>
					  <input type="text" name="name" required placeholder="Your full name.." value="<?php echo isset($_POST['name']) ? $name : ''; ?>">
				  </div>
				  <div>
					  <label for="phone">Phone Number *</label>
					  <input type="text" name="phone" required placeholder="Your phone number.." value="<?php echo isset($_POST['phone']) ? $phone : ''; ?>">
				  </div>
				  <div>
	      			<label for="email">E-mail *</label>
	      			<input type="text" name="email" required placeholder="Your e-mail.." value="<?php echo isset($_POST['email']) ? $email : ''; ?>">
				  </div>
				  <div>
	      			<label for="subject">Subject</label>
	      			<input type="text" name="subject" placeholder="Your subject.." value="<?php echo isset($_POST['subject']) ? $subject : ''; ?>">
				  </div>
				  <div>
	      			<label for="message">Message *</label>
	      			<textarea name="message" required placeholder="Write something.."><?php echo isset($_POST['message']) ? $message : ''; ?></textarea>
				  </div>
				  <br>
				  <input type="submit" name="submit" value="Submit">
			  </form>
		</div>
		</div>
            <div class="green-background w3-padding-64 w3-container" style="text-align:center;">
                <i class="fa fa-history" style="color: #0d1526!important;"></i>
                <h3 id="opening" class="lang" key="opening"></h3>
                <p id="hours1" class="lang" key="hours1"></p>
                <p id="hours2" class="lang" key="hours2"></p>
                <p id="hours3" class="lang" key="hours3"></p>
            </div>
        
		<div w3-include-html="../footer.html"></div>
    <div w3-include-html="../navigationMenu.html"></div>
    <script>
        includeHTML();
		window.localStorage.setItem("homePath", "../home.html");
        window.localStorage.setItem("aboutPath", "../about.html");
        window.localStorage.setItem("activitiesPath", "../activities/activities.html");
        window.localStorage.setItem("classesPath", "../classes/classes.html");
        window.localStorage.setItem("learningPath", "#");
        window.localStorage.setItem("contactPath", "contact.php");
        window.localStorage.setItem("coloured", "contact");
    </script>


</body>
</html>