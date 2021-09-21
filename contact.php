<?php
  
if($_POST) {
    $visitor_name = "";
    $visitor_email = "";
    $email_title = "Contact Form Response | jonathansexton.me";
    $visitor_message = "";
    $email_body = "<div>";
      
    if(isset($_POST['visitor_name'])) {
        $visitor_name = filter_var($_POST['visitor_name'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Visitor Name:</b></label>&nbsp;<span>".$visitor_name."</span>
                        </div>";
    }
 
    if(isset($_POST['visitor_email'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div>
                           <label><b>Visitor Email:</b></label>&nbsp;<span>".$visitor_email."</span>
                        </div>";
    }
      
    if(isset($_POST['email_title'])) {
        $email_title = filter_var($_POST['email_title'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>New email from website contact form</b></label>&nbsp;<span>".$email_title."</span>
                        </div>";
    }
      
      
    if(isset($_POST['visitor_message'])) {
        $visitor_message = htmlspecialchars($_POST['visitor_message']);
        $email_body .= "<div>
                           <label><b>Visitor Message:</b></label>
                           <div>".$visitor_message."</div>
                        </div>";
    }

    $recipient = "hello@jonathansexton.me";
      
    $email_body .= "</div>";
 
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $visitor_email . "\r\n";
      
    // *TODO build Gatsby contact page and have this script redirect to that page
    if(mail($recipient, $email_title, $email_body, $headers)) {?>
        <script language="javascript" type="text/javascript">
          alert('Thank you for the message. I respond to all contact within 24hrs.');
          window.location = 'https://jonathansexton.me';
        </script>
        <?php
      }
      else { ?>
          <script language="javascript" type="text/javascript">
            alert('Message failed to send. Please, send your email to hello@jonathansexton.me');
            window.location = 'https://jonathansexton.me/consulting';
          </script>
          <?php
    }
      
} else {
    echo '<p>Something went wrong</p>';
}
?>