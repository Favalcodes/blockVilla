<?php
// Include config file
require_once "config.php";

// Initialize the session
session_start();

// Check if the user is logged in, if not then redirect him to login page
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
  header("location: login.php");
  exit;
}

// SQL query to select data from database 
$sql = "SELECT * FROM users";
$result = $link->query($sql) or die("Error: " . mysqli_error($link));

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>BlockVilla</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">

  <!-- Favicons -->
  <link href="img/screenshot_20201111-173542_2.png" rel="icon">
  <link href="img/screenshot_20201111-173542_2.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">

  <!-- Bootstrap CSS File -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Libraries CSS Files -->
  <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="lib/animate/animate.min.css" rel="stylesheet">
  <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet">
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">

  <!-- Main Stylesheet File -->
  <link rel="stylesheet" href="css/form.css">
  <link href="css/style.css" rel="stylesheet">
</head>

<body>

  <div class="click-closed"></div>

  <!--/ Nav Star /-->
  <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
    <div class="container">
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a class="navbar-brand text-brand" href="index.php">Block<span class="color-b">Villa</span></a>
      <button type="button" class="btn btn-link nav-search navbar-toggle-box-collapse d-md-none" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-expanded="false">
        <span class="fa fa-search" aria-hidden="true"></span>
      </button>
      <div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="index.php">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.php">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="property-grid.php">Property</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.php">Contact</a>
          </li>
        </ul>
      </div>
      <ul class="navbar-nav">
        <?php
        while ($tablerow = mysqli_fetch_array($result)) {
        ?>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <?php echo $tablerow['full_name'] ?>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="dashboard.php">Dashboard</a>
              <a class="dropdown-item" href="logout.php">Logout</a>
            </div>
          </li>
        <?php } ?>
      </ul>
    </div>
  </nav>
  <!--/ Nav End /-->

  <!--/ Intro Single star /-->
  <section class="intro-single">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-8">
          <div class="title-single-box">
            <h1 class="title-single">Dashboard</h1>
            <!-- <span class="color-text-a">Aut voluptas consequatur unde sed omnis ex placeat quis eos. Aut natus officia corrupti qui autem fugit consectetur quo. Et ipsum eveniet laboriosam voluptas beatae possimus qui ducimus. Et voluptatem deleniti. Voluptatum voluptatibus amet. Et esse sed omnis inventore hic culpa.</span> -->
          </div>
        </div>
        <div class="col-md-12 col-lg-4">
          <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.php">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Dashboard
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  <!--/ Intro Single End /-->

  <!--/ Contact Start /-->
  <section class="contact">
    <div class="container tabs">
      <div class="row">
        <div class="col-3">
          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Stat</a>
            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Sell</a>
            <a class="nav-link" href="login.html">Logout</a>
          </div>
        </div>
        <div class="col-9">
          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              Dashboard</div>
            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
              <table class="table table-reponsive-lg table-lg table-striped w-100">
                <thead>
                  <tr>
                    <th>Stat</th>
                    <th>Figure</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Number of Property Sold/Rent</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Number of Property Bought/Rented</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Amount Made</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Amount Paid</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Total Amount in Wallet</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
              <div class="form-container">
                <form action="" method="POST" role="form" enctype="multipart/form-data">
                  <input id='step2' type='checkbox'>
                  <input id='step3' type='checkbox'>

                  <div id="part1" class="form-group">
                    <div class="panel panel-primary">
                      <div class="panel-heading">
                        <h3 class="panel-title">Sell/Rent</h3>
                      </div>
                      <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Type</label>
                      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Select</option>
                        <option value="1">Sell</option>
                        <option value="2">Rent</option>
                      </select>
                      <input type="text" id="location" class="form-control" placeholder="Location" aria-describedby="sizing-addon1">
                      <div class="btn-group btn-group-lg" role="group" aria-label="...">
                        <label for='step2' id="continue-step2" class="continue">
                          <div class="btn btn-default btn-success btn-lg">Continue</div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div id="part2" class="form-group">
                    <div class="panel">
                      <div class="panel-heading">
                        <h3 class="panel-title">Step 2</h3>
                      </div>
                      <div class="custom-file">
                        <input type="file" name="fileUpload[]" class="custom-file-input" id="chooseFile" multiple>
                        <label class="custom-file-label" for="chooseFile">Select images (min of 3 images)</label>
                      </div>
                      <div class="imgGallery">
                        <!-- image preview -->
                      </div>
                      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Number of Bath</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Number of Room(s)</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                      <div class="btn-group btn-group-lg btn-group-justified" role="group" aria-label="...">

                        <label for='step2' id="back-step2" class="back">
                          <div class="btn btn-default btn-lg" role="button">Back</div>
                        </label>
                        <label for='step3' id="continue-step3" class="continue">
                          <div class="btn btn-default btn-success btn-lg" role="button">Continue</div>
                        </label>

                      </div>
                    </div>
                  </div>

                  <div id="part3" class="form-group">
                    <div class="panel panel-primary">
                      <div class="panel-heading">
                        <h3 class="panel-title">Step 3</h3>
                      </div>
                      <div class="custom-file">
                        <input type="file" name="docUpload[]" class="custom-file-input" id="chooseDoc" multiple>
                        <label class="custom-file-label" for="chooseFile">Select Document(Proof of Owner)</label>
                      </div>
                      <div class="docGallery">
                        <!-- image preview -->
                      </div>
                      <input type="text" id="amount" class="form-control" placeholder="Amount" aria-describedby="sizing-addon1">
                      <textarea id="message" class="form-control" placeholder="Full Description"></textarea>
                      <label for="exampleFormControlFile1">Contact Details <span>(contact available to buyers/clients)</span></label>
                      <input type="text" id="whatsapp" class="form-control" placeholder="WhatsApp" name="whatsapp" aria-describedby="sizing-addon1">
                      <input type="text" id="call" class="form-control" placeholder="Call Number" name="call" aria-describedby="sizing-addon1" required>
                      <input type="text" id="twitter" class="form-control" placeholder="Twitter" name="twitter" aria-describedby="sizing-addon1">
                      <div class="btn-group btn-group-lg" role="group" aria-label="...">
                        <label for='step3' id="back-step3" class="back">
                          <div class="btn btn-default btn-lg">Back</div>
                        </label>
                        <label class="continue">
                          <button type="submit" class="btn btn-default btn-success btn-lg">Submit</button>
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
              Settings</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/ Contact End /-->

  <!--/ footer Star /-->
  <section class="section-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <div class="widget-a">
            <div class="w-header-a">
              <h3 class="w-title-a text-brand">BlockVilla</h3>
            </div>
            <div class="w-body-a">
              <p class="w-text-a color-text-a">
                BlockVilla is a real estate decentralized smart contract app that connects buyers or renters to
                properties on sale or rent. It doesn’t need a third party/agent to complete a transaction, a transaction
                can be fully done on the app with the use of local currency or cryptocurrency.
              </p>
            </div>
            <div class="w-footer-a">
              <ul class="list-unstyled">
                <li class="color-a">
                  <span class="color-text-a">Phone .</span> +234 700 blockVilla<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+254 700 BlockVilla</li>
                <li class="color-a">
                  <span class="color-text-a">Email .</span> support@blockvilla.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 section-md-t3">
          <div class="widget-a">
            <div class="w-header-a">
              <h3 class="w-title-a text-brand">The Company</h3>
            </div>
            <div class="w-body-a">
              <div class="w-body-a">
                <ul class="list-unstyled">
                  <li class="item-list-a">
                    <i class="fa fa-angle-right"></i> <a href="#">Site Map</a>
                  </li>
                  <li class="item-list-a">
                    <i class="fa fa-angle-right"></i> <a href="#">Legal</a>
                  </li>
                  <li class="item-list-a">
                    <i class="fa fa-angle-right"></i> <a href="#">Agent Admin</a>
                  </li>
                  <li class="item-list-a">
                    <i class="fa fa-angle-right"></i> <a href="#">Careers</a>
                  </li>
                  <li class="item-list-a">
                    <i class="fa fa-angle-right"></i> <a href="#">Affiliate</a>
                  </li>
                  <li class="item-list-a">
                    <i class="fa fa-angle-right"></i> <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 section-md-t3">
          <div class="widget-a">
            <div class="w-header-a">
              <h3 class="w-title-a text-brand">International sites</h3>
            </div>
            <div class="w-body-a">
              <ul class="list-unstyled">
                <li class="item-list-a">
                  <i class="fa fa-angle-right"></i> <a href="#">Nigeria</a>
                </li>
                <li class="item-list-a">
                  <i class="fa fa-angle-right"></i> <a href="#">Kenya</a>
                </li>
                <li class="item-list-a">
                  <i class="fa fa-angle-right"></i> <a href="#">China</a>
                </li>
                <li class="item-list-a">
                  <i class="fa fa-angle-right"></i> <a href="#">Hong Kong</a>
                </li>
                <li class="item-list-a">
                  <i class="fa fa-angle-right"></i> <a href="#">Argentina</a>
                </li>
                <li class="item-list-a">
                  <i class="fa fa-angle-right"></i> <a href="#">Singapore</a>
                </li>
                <li class="item-list-a">
                  <i class="fa fa-angle-right"></i> <a href="#">Philippines</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <nav class="nav-footer">
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#">Home</a>
              </li>
              <li class="list-inline-item">
                <a href="#">About</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Property</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Blog</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div class="socials-a">
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-dribbble" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="copyright-footer">
            <p class="copyright color-text-a">
              &copy; Copyright
              <span class="color-a">BlockVilla</span> All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!--/ Footer End /-->

  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  <div id="preloader"></div>

  <!-- JavaScript Libraries -->
  <script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/jquery/jquery-migrate.min.js"></script>

<script>
  $(function () {
    // Multiple images preview with JavaScript
    var multiImgPreview = function (input, imgPreviewPlaceholder) {

      if (input.files) {
        var filesAmount = input.files.length;

        for (i = 0; i < filesAmount; i++) {
          var reader = new FileReader();

          reader.onload = function (event) {
            $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(imgPreviewPlaceholder);
          }

          reader.readAsDataURL(input.files[i]);
        }
      }

    };

    $('#chooseFile').on('change', function () {
      multiImgPreview(this, 'div.imgGallery');
    });
    $('#chooseDoc').on('change', function () {
      multiImgPreview(this, 'div.docGallery');
    });
  });
</script>

  <script src="lib/popper/popper.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.min.js"></script>
  <script src="lib/easing/easing.min.js"></script>
  <script src="lib/owlcarousel/owl.carousel.min.js"></script>
  <script src="lib/scrollreveal/scrollreveal.min.js"></script>
  <!-- Contact Form JavaScript File -->
  <script src="contactform/contactform.js"></script>

  <!-- Template Main Javascript File -->
  <script src="js/main.js"></script>

</body>

</html>