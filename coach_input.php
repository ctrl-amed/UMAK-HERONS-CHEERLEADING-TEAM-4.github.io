<?php


session_start();
$user = $_SESSION['coach'];	
if(isset($_SESSION['officer'])) header('Location: indexofficer.php');
else if(!isset($_SESSION['coach'])) header('Location: login.php');
?>
<!DOCTYPE html>
<html>
	<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="coach_input.css">
	</head>
	<body>
		<div class="wrapper">
            
            <div class="headercontainer">
                <div class="umakcontainer">
                    <div class="umaktext"> UMAK HERONS CHEERLEADING TEAM</div>
                </div>
                <div class="ribboncontainer">
                    <div class="ribboncontainer2">
                        <div class="ribboncontainer3">
								<div class="ribbontext"><a href= "indexcoach.php">HOME</a></div>
							</div>
							<div class="ribboncontainer3">
								<div class="ribbontext"><a href= "aboutuscoach.php">ABOUT US</a></div>
							</div>
							<div class="ribboncontainer3">
								<div class="ribbontext"><a href= "gallerycoach.php">GALLERY</a></div>
							</div>
							<div class="ribboncontainer3">
								<div class="ribbontext"><a href= "schedulecoach.php">SCHEDULE</a></div>
							</div>
							<div class="ribboncontainer3">
								<div class="ribbontext"><a href= "newscoach.php">NEWS</a></div>
							</div>
							<div class="ribboncontainer3">
								<div class="ribbontext"><a href= "tryoutaltcoach.php">TRYOUTS/FAQ</a></div>
							</div>
							<div class="ribboncontainer3">
								<div class="ribbontext"><a href= "contactusaltcoach.php">CONTACT US</a></div>
							</div>             
                        <div class="ribboncontainer3">
                            <div class="dropdown">
                                <button class="dropbtn"><a href="?"><?php echo $user['USERNAME'] ?></a> 
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <div class="dropdown-content">
                                    <a href="logout.php">LOG OUT</a>
                                    <a href="member_attend.php">ATTENDANCE</a>
                                    <a href="attendance-month.php">RECORDS</a>
                                    <a href="coach_input.php">EVALUATION</a>
                                    <a href="submitted_formscoach.php">SUBMISSIONS</a>
                                </div>
                            </div> 
                        </div>
                </div>
            </div>
    
            <img class="logo1" src="images/logo1.png" alt="logo1-umak"> 
                    <img class="logo2" src="images/logo2.png" alt="logo2-herons">  
            </div>

            <div class="containera">
                




                <div class="containerc">
                    <form class="containernotify" action="coach_input_to_member_attend.php"  method="post">
                        <div class="text">NOTIFY A MEMBER</div>
                        <div class="line"></div>
                        <div class="containerd">
                            <div class="containerf">
                                <div class="text1">
                                    MEMBER:

                                    <input list="NotifyMemberList" placeholder="MEMBER NAME">
                                    <datalist id="NotifyMemberList">
                                        <?php
                                        // Connect to database
                                        $dbHost = 'localhost';
                                        $dbUsername = 'root';
                                        $dbPassword = '';
                                        $dbName = 'cheerleading';

                                        $conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);

                                        //Check the connection
                                        if (!$conn) {
                                            die("Connection Failed:" . mysqli_connect_error());
                                        }


                                        // Fetch options from database
                                        $sql = "SELECT name FROM official_members";
                                        $result = $conn->query($sql);

                                        if ($result->num_rows > 0) {
                                            while($row = $result->fetch_assoc()) {
                                                echo "<option value='" . $row['name'] . "'>";
                                            }
                                        }

                                        // Close connection
                                        $conn->close();
                                        ?>
                                    </datalist>           
                                </div>
                            </div>
                            <div class="containerf">
                                <div class="text2">
                                    MESSAGE:
                                    <div class="containerg">
                                    <textarea id="MESSAGE" name="MESSAGE"></textarea>
                                    </div>
                                </div>      
                            </div>
                            <div class="containerh">
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </form>








                <form class="containerfeedback" action="coach_input_to_member_attend.php" method="post">
                    <div class="text">COACH FEEDBACK</div>
                    <div class="line"></div>
                    <div class="containerd">
                        <div class="containerf">
                            <div class="text2">
                                <label>SESSION DATE:</label>
                                <input type="date" id="sess_date" name="sess_date">
                            </div> 
                        </div>

                        <div class="containerf">
                            <div class="text1">
                                MEMBER:
                                
                                <input list="FeedbackMemberList" placeholder="MEMBER NAME" required>
                                <datalist id="FeedbackMemberList">
                                    <?php
                                    // Connect to database
                                    $dbHost = 'localhost';
                                    $dbUsername = 'root';
                                    $dbPassword = '';
                                    $dbName = 'cheerleading';

                                    $conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);

                                    //Check the connection
                                    if (!$conn) {
                                        die("Connection Failed:" . mysqli_connect_error());
                                    }


                                    // Fetch options from database
                                    $sql = "SELECT name FROM official_members";
                                    $result = $conn->query($sql);

                                    if ($result->num_rows > 0) {
                                        while($row = $result->fetch_assoc()) {
                                            echo "<option value='" . $row['name'] . "'>";
                                        }
                                    }

                                    // Close connection
                                    $conn->close();
                                    ?>  
                                                                                                                            
                                </datalist>
                            </div>
                        </div>

                        <div class="containerf">
                            <div class="text2">
                                <label>PERFORMANCE RATING:</label>  
                                <div class="card"> 
                                    <span class="star" data-value="1">★</span>
                                    <span class="star" data-value="2">★</span>
                                    <span class="star" data-value="3">★</span>
                                    <span class="star" data-value="4">★</span>
                                    <span class="star" data-value="5">★</span>
                                </div> 
                                <label id="output">Rating is: 0/5</label>
                            </div> 
                        </div>
                        

                        <div class="containerf">
                            <div class="text2">
                                ADDITIONAL COMMENT:
                                <div class="containerg">
                                <textarea id="COMMENT" name="comment"></textarea>
                                </div>
                            </div> 
                        </div>
                        <div class="containerh">
                            <button type="submit" id="submit">Submit</button>
                        </div>
                
                    </div>
                </form>
                </div>
            </div>
            
        </div>
            












            











            <div class="footer">
                  <img class="footlogo" src="images/logo2.png">
  
                  <div class="container2">
                  <div class="foot1">HERONS CHEERLEADING TEAM</div>
                  <div class="foot2">UNIVERSITY OF MAKATI</div>
                  <div class="foot3">The UMAK Herons Cheerleading Team, under the Center for Athletic Development (CAD), boosts school morale and supports sports teams with exceptional athleticism, passion, and collaboration. Led by experienced captains, they exemplify duty, school pride, and represent the university with skill and fervor.
                  </div>
                  <div class="foot4"> 
                      <a href= "aboutus.html">LEARN MORE</a>
                  </div>
                  </div>
  
                  <div class="container">
                      <div class="quicklinks">QUICK LINKS
                         <div class="roster"><a href= "aboutus.html#but4">Roster</a></div>
                         <div class="About"><a href= "aboutus.html">About the team</a></div>
                         <div class="schedule"><a href= "schedule.html">Schedule</a></div>
                         <div class="common"><a href= "tryoutalt.html">Common inquiries</a></div>
                         <div class="cont"><a href= "contactusalt.html">Contacts</a></div>
                      </div>
                     </div>
  
                   <div class="container1">
                      <div class="followus">FOLLOW US
                         <div class="fb"><div class="fb1"><a href= "https://www.facebook.com/UMAKHeronsCheerleadingTeam">Facebook</a></div></div>
                         <div class="tiktok"><div class="tiktok1"><a href= "https://www.tiktok.com/@umak_hct?is_from_webapp=1&sender_device=pc">Tiktok</a></div></div>
                      </div>
                     </div>
     
                      
  
                  <div class="container3">
                  <div class="got1">GOT THE SPIRIT? <BR> LET'S HEAR IT!
                      <div class="got2">
                          <div class="got3">
                          <a href= "contactusalt.html">CONTACT US</a>
                          </div>
                      </div>   
                   </div>
                  </div>
  
                  
  
  
  
                   
              </div>
              <div class="footlast">
                  <div class="hct">© UMAK HCT</div>
                  <div class="all">All Rights Reserved </div>
               </div>
               <div class="footlast1"></div>
          </div>
      
  
          <script src="coach_input.js"></script>
  </body>
  </html>