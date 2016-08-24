<?php


// Ik werd helemaal priegel van dreamweaver! Dus dan maar een template definen in php! :)
// Dit is ook nog eens veel flexibeler :)

// THIS SCRIPT DEPENDS ON A 'TO_ROOT' CONSTANT DEFINED INLINE!



// Determine wether to echo a header, footer and other template markup
$ajaxRequest = isset($_GET['ajax']) && $_GET['ajax'] === 'true' ? true : false;

// Load data dependencies
function parseJSON($dep) {
    $JSON = file_get_contents(TO_ROOT.'json/'.$dep.'.json');
    return json_decode($JSON, true);
}

$JSON_data = array(
    'books' => parseJSON('books')
);

foreach($dependencies['JSON'] as $dep) $JSON_data[$dep] = parseJSON($dep);

// load PHP-LIB function dependencies
foreach($dependencies['func'] as $dep):
    $file = TO_ROOT.'php-lib/'.$dep.'.php';
    require($file);
endforeach;

// load cart widget constructor functions

    
// some mockup cart content
$cartItems = array(
    array(
        'id' => 'b00012',
        'count' => '1'
    ),

    array(
        'id' => 'b00008',
        'count' => '2'
    ),

    array(
        'id' => 'b00011',
        'count' => '1'
    )

);

if(!$ajaxRequest) {  
    require_once(TO_ROOT.'php-lib/cartWidget/cartWidget.php');
};


// Define pages to draw in the header. Values can be compared to inline $pageData for conditional markup
$pages = array(
    'headerLeft' => array(
        array(
            'title' => 'Home',
            'code' => 'home',
            'location' => 'index.php'
        ),
        
        array(
            'title' => 'Over Cuisine',
            'code' => 'overCuisine',
            'location' => 'pages/over-cuisine/index.php'
        ),
        
        array(
            'title' => 'Bookstore',
            'code' => 'bookstore',
            'location' => 'pages/bookstore/index.php'
        )
    ),
    
    'headerRight' => array(
        array(
            'title' => 'Recepten',
            'code' => 'recepten',
            'location' => 'pages/recepten/index.php'
        ),
        
        array(
            'title' => 'Tips &amp; Tricks',
            'code' => 'tipsEnTricks',
            'location' => 'pages/tips-en-tricks/index.php'
        ),
        
        array(
            'title' => 'Contact',
            'code' => 'contact',
            'location' => 'pages/contact/index.php'
        )
    ),
);

// make one merged array for the footer navigation
$pages['footer'] = array_merge($pages['headerLeft'], $pages['headerRight']);

$pages['byCode'] = array();

foreach($pages['footer'] as $page):
    $pages['byCode'][$page['code']] = array(
        'title' => $page['title'],
        'location' => $page['location']
    );
endforeach;

function drawBreadcrumb ($links, $pageString, $white) {
    
    global $pages; 
    
    $colorString = $white ? '-white' : '';
    
    $markup = '
    
        <div class="breadcrumb">
            <ul>
                <li class="home">
                    <a data-page="home" 
                       data-pagegroup="home" 
                       data-href="index.php"
                       href="'.AHTR.'index.php" 
                       class="crossPage">
                       
                       <img src="'.AHTR.'images/icons/BC-home'.$colorString.'.png" title="Ga naar de homepage" alt="Home">
                    </a>
                </li>';
    
    
    foreach($links as $link):
    
        $markup .='<li>
                    <a data-page="'.$link.'" 
                       data-pagegroup="'.$link.'" 
                       data-href="'.$pages['byCode'][$link]['location'].'"
                       href="'.AHTR.$pages['byCode'][$link]['location'].'" 
                       class="crossPage">
                       '.$pages['byCode'][$link]['title'].'
                    </a>
                </li>';
    endforeach;
    
    $markup .='
                <li>
                    '.$pageString.'
                </li>
            </ul>
        </div>';
    
    return $markup;
}




$ajax_host_to_root =  isset($_GET['toRoot']) ? $_GET['toRoot'] : TO_ROOT;

// AJAX HOST TO ROOT: AHTR is a bit shorter. For PHP use TO_ROOT, for anything that ends up in the browser, use AHTR.
define('AHTR', $ajax_host_to_root);



////////////////////////// HEADER MARKUP //////////////////////////


function drawHeader() { 
    
    global $ajaxRequest, $JSON_data, $pageData, $cartItems, $pages;
    
    if(!$ajaxRequest) { ?>
    
    <!DOCTYPE html>
    <html lang="nl">
        <head>
            <meta charset="UTF-8">
            
            <?php print '
            <title>'.$pageData['title'].' - Cuisine</title>
            ';?>
            <meta name="Author" content="Jeffrey Westerkamp"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <!-- Styles -->
            <link
            href="https://fonts.googleapis.com/css?family=Merriweather:400italic,700italic,300,700,300italic%7CAmatic+SC%7CRoboto+Condensed:400,700%7CJust+Another+Hand"
            rel="stylesheet"
            type="text/css">
            <link rel="stylesheet" type="text/css" href="<?php echo AHTR; ?>css/style.min.css">
            
            <!-- Javascript global options -->
            <script>
                var options = {
                    currentPage   : '<?php print $pageData['currentPage']; ?>',
                    currentPagegroup: '<?php print $pageData['currentPageGroup']; ?>',
                    previousPagegroup: null,
                    toRoot        : '<?php print AHTR; ?>',
                    canvas        : [
                        <?php
                        for($i = 0, $l = count($pageData['canvas']); $i < $l; $i++):
                            $canvas = $pageData['canvas'][$i];
                            print "'$canvas'";
                            if($i + 1 < $l) print ',';
                        endfor;
                        ?>
                    ]  
                };
            </script>
        </head>

        <!-- Start page content -->
        <body>
            
            <!-- mobile header -->
            <header id="mobileHeader">
                
                <!-- header buttons -->
                <div id="menuToggle">
                    <div class="burger">
                        <div class="stripe top"></div>
                        <div class="stripe center1"></div>
                        <div class="stripe center2"></div>
                        <div class="stripe bottom"></div>
                    </div>
                </div>
                <div id="cartToggle"></div>
                
                <!-- header logo -->
                <div class="mobileLogo">
                    <img src="<?php echo AHTR; ?>images/cuisine-logo.png" alt="Cuisine" width="92" height="40">
                </div>
                
                <!-- mobile page menu -->
                <nav id="mobilePages">
                    <ul>
                        <?php 
                        foreach($pages['footer'] as $page):

                            $currentClass = $pageData['currentPageGroup'] === $page['code'] ? ' class="current" ' : '';
                            $link = $page['location'];

                            echo '

                                <li'.$currentClass.'>
                                    <a data-page="'.$page['code'].'" 
                                       data-pagegroup="'.$page['code'].'" 
                                       data-href="'.$link.'" 
                                       href="'.AHTR.$link.'">
                                       '.$page['title'].'
                                    </a>
                                </li>

                            ';
                       endforeach;
                       ?>
                    </ul>
                </nav>
            </header>
            
            <!-- desktop header -->
            <header id="pageHeader">

                <!-- Green user bar -->
                <nav id="userNav">
                    <div class="container">
                        <div class="content">
                            <ul>

                                <li><a class="user" 
                                       data-page="mijnAccount" 
                                       data-pagegroup="mijnAccount" 
                                       data-href="pages/mijn-account/index.php" 
                                       href="<?php echo AHTR; ?>pages/mijn-account/index.php">
                                        mijn account
                                    </a>
                                </li>

                                <li>
                                    <a class="user" 
                                       data-page="uitloggen" 
                                       data-pagegroup="mijnAccount" 
                                       data-href="pages/mijn-account/logout.php" 
                                       href="<?php echo AHTR; ?>pages/mijn-account/logout.php">
                                        uitloggen
                                    </a>
                                </li>

                                <li>
                                    <a id="headerCart" 
                                       class="cart" 
                                       data-page="winkelmandje" 
                                       data-pagegroup="shop" 
                                       data-href="pages/winkelmandje/index.php" 
                                       href="<?php echo AHTR; ?>pages/winkelmandje/index.php" 
                                       title="Bekijk je winkelmandje">
                                    </a>
                                </li>
                            </ul>

                            <!-- cart widget -->
                            <div id="cartWidget">
                                <?php drawCartWidget( $cartItems ) ?>
                            </div>
                        </div>
                    </div>
                </nav>

                <!-- Site page navigation -->
                <nav id="pagesNav">
                    <div class="container">
                        <div class="content">

                            <!-- Left navigation -->
                            <ul>
                                <?php 
                                foreach($pages['headerLeft'] as $page):

                                    $currentClass = $pageData['currentPageGroup'] === $page['code'] ? ' class="'.$page['code'].' current" ' : ' class="'.$page['code'].'"';
                                    $link = $page['location'];

                                    echo '
                                        <li'.$currentClass.'>
                                            <a data-page="'.$page['code'].'" 
                                               data-pagegroup="'.$page['code'].'" 
                                               data-href="'.$link.'" 
                                               href="' . AHTR . $link . '">
                                               '.$page['title'].'
                                            </a>
                                        </li>';
                               endforeach;
                               ?>
                            </ul>

                            <!-- Logo -->
                            <div class="logo">
                                <?php
                                    $logoLink = 'index.php';
                                ?>
                                <!-- width and height is scaled down with CSS for retina support -->
                                <a data-page="home" 
                                   data-pagegroup="home" 
                                   class="logoLink" 
                                   data-href="<?php echo $logoLink; ?>"
                                   href="<?php echo AHTR . $logoLink; ?>">
                                    <canvas id="headerLogo" width="320" height="200"></canvas>
                                </a>
                                <h1>Cuisine</h1>
                            </div>

                            <!-- Right navigation -->
                            <ul>
                                <?php 
                                foreach($pages['headerRight'] as $page):

                                    $currentClass = $pageData['currentPageGroup'] === $page['code'] ? ' class="'.$page['code'].' current" ' : ' class="'.$page['code'].'"';
                                    $link = $page['location'];

                                    echo '
                                        <li'.$currentClass.'>
                                            <a data-page="'.$page['code'].'" 
                                               data-pagegroup="'.$page['code'].'" 
                                               data-href="'.$link.'" 
                                                href="' . AHTR . $link . '">
                                                '.$page['title'].'
                                            </a>
                                        </li>
                                    ';
                               endforeach;
                               ?>
                            </ul>

                        </div>
                    </div>
                </nav>

            </header>

            <!-- start main content -->
            <div id="main">

<?php }}

function draw_nonGlobal_scripts() {
    
    global $pageData;
    
    foreach($pageData['nonGlobal_scripts'] as $script):
        echo '<script src="'. AHTR . 'js/' . $script . '.js"></script>';
    endforeach;
}

function drawFooter() {
    
    global $pageData, $pages, $ajaxRequest;

    // If page was requested by AJAX, only add page specific scripts, and update application parameters.
    if($ajaxRequest) {  
        
        draw_nonGlobal_scripts();
        
         echo'
            <script>
                radio.publish(\'newReferrerLocation\', \''.AHTR.'\');
                document.title = "'.$pageData['title'].' - Cuisine";
        ';
        
        foreach($pageData['canvas'] as $canvas) {
            if($canvas !== 'turningPage')
                echo 'radio.publish(\'rebindStage:'.$canvas.'\');';
        }
        
        echo '
            </script>
        ';
        
       
        
    // else draw the footer
    } else { ?>
            
        </div><!-- close #main -->

        <footer id="pageFooter">
            
            <div class="container">
                <div class="content">
                    
                    <!-- Footer navigation -->
                    <nav>
                        <ul id="footerPages" class="pages">
                            <?php 
                            foreach($pages['footer'] as $page):

                                $currentClass = $pageData['currentPageGroup'] === $page['code'] ? ' class="current" ' : '';
                                $link = $page['location'];
        
                                echo '
                                
                                    <li'.$currentClass.'>
                                        <a data-page="'.$page['code'].'" 
                                           data-pagegroup="'.$page['code'].'" 
                                           data-href="'.$link.'" 
                                           href="'.AHTR.$link.'">
                                           '.$page['title'].'
                                        </a>
                                    </li>
                                
                                ';
                           endforeach;
                           ?>
                        </ul>
                        
                        <ul class="social">
                            <div class="socialTitle">
                                <img src="<?php echo AHTR; ?>images/footer/footerSprite.png" alt="Volg ons op onze social media!">
                            </div>
                            <li><a href="#"><img class="facebook" src="<?php echo AHTR; ?>images/footer/footerSprite.png" alt="Facebook"></a></li>
                            <li><a href="#"><img class="twitter" src="<?php echo AHTR; ?>images/footer/footerSprite.png" alt="Twitter"></a></li>
                            <li><a href="#"><img class="googleplus" src="<?php echo AHTR; ?>images/footer/footerSprite.png" alt="Google+"></a></li>
                            <li><a href="#"><img class="pinterest" src="<?php echo AHTR; ?>images/footer/footerSprite.png" alt="Pinterest"></a></li>
                            <li><a href="#"><img class="instagram" src="<?php echo AHTR; ?>images/footer/footerSprite.png" alt="Instagram"></a></li>
                        </ul>
                    </nav>
                    
                    <!-- A healthy logo -->
                    <img class="footerLogo"
                    	 src="<?php echo AHTR; ?>images/footer/logo.png"
                         width="660"
                         height="215"
                         alt="Cuisine logo, some berries and an avocado.">
                </div>
            </div>
            
             <!-- Credits image -->
            <div class="credits">
                <img src="<?php echo AHTR; ?>images/footer/footerSprite.png"
                     alt="Made with &#9825; by Jeffrey Westerkamp. MME 15-B MM-B">
            </div>

            <!-- Green copyright bar -->
            <div class="copyright">
                <p>
                    <b>&copy; 2016 Jeffrey Westerkamp. </b>Alle rechten voorbehouden.
                </p>
            </div>
        </footer>
        
        <!-- Scripts -->
        <div>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
            <script>

                // jQuery fallback to local file
                window.jQuery || document.write('<script src="<?php echo AHTR; ?>js/lib/jquery-2.2.0.min.js"><\/script>');
                
                // ES5 Promise polyfill for older browsers
                window.Promise || document.write('<script src="<?php echo AHTR; ?>js/lib/es6-promise.min.js"><\/script>');
                
                // remove $ reference from global scope
                $.noConflict();
            </script>

            <!-- CreateJS library -->
            <script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>

            <!-- Mediator -->
            <script src="<?php echo AHTR; ?>js/mediator.radio.js"></script>
            
            <!-- Canvas mapping -->
            <script src="<?php echo AHTR; ?>js/animations.js"></script>

            <!-- Headerlogo library -->
            <script src="<?php echo AHTR; ?>js/canvas/turningPage.js"></script>
            <script src="<?php echo AHTR; ?>js/canvas/drivingCar.js"></script>
            
            <!-- page specific scripts -->
            <?php
                draw_nonGlobal_scripts();
            ?>
            
            <!-- Site application -->
            <script src="<?php echo AHTR; ?>js/module.requests.js"></script>
            <script src="<?php echo AHTR; ?>js/module.ui.js"></script>
    </div>
    <script>
        radio.publish('domContentLoaded');
    </script>
    </body>
</html>

<?php }}
