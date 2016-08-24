<?php
// relative path to the root of the site
define('TO_ROOT', '../../');

// page depencencies.
$dependencies = array(

    // JSON data dependencies. Values correspond to JSON file names (books.json is always included by header.php)
    'JSON' => array(),

    // PHP function dependencies.
    'func' => array()
);

// Some static page parameters. Each page should have its own $pageData array
$pageData = array(
    
    // What people get to see
    'title'             => 'Contact',
    
    // unique string for processing in PHP and JS
    'currentPage'       => 'contact',
    
    // the page group this page is part of. used for navigation highlighting 
    'currentPageGroup'  => 'contact',
    
    // Need some scripts specifically for this page? define the paths here (without extension, relative to js root folder)
    'nonGlobal_scripts' => array(),
    
    // Are there canvas elements? Define them here and JS takes care of everything!
    'canvas'            => array('turningPage')
);

// Include the page header
require(TO_ROOT.'/php-lib/loader.php');
drawHeader();
?>

<div class="mainContainer">
    <div class="mapContainer">
        <iframe id="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.301418029883!2d4.861564551191504!3d52.328677758043696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60a0a4559c535%3A0xc7cf6d82611a1eef!2sEgelenburg+150%2C+1081+GK+Amsterdam!5e0!3m2!1sen!2snl!4v1459769485181" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>

        <div class="container contactCard">
            <div class="content">
                content goes here...
            </div>
        </div>    
    </div>

    <section id="contactForm" class="darkGrey">
        <div class="container">
            <div class="content">

                <h2 class="construct">
                    <span class="subtitle">
                        <em>Laat ons weten</em> wat je van ons vindt, <em>of stel een vraag</em>
                    </span>
                    Laat een berichtje achter
                </h2>

                <form id="homeMessage" action="#" method="post">
                    <fieldset>

                        <!-- Left column -->
                        <div class="col"> 
                            <!-- Name -->
                            <label for="name">Naam *</label>
                            <input 
                                   id="name" 
                                   name="name" 
                                   type="text" 
                                   placeholder="Jouw naam..." 
                                   required />

                            <!-- Email -->
                            <label for="email">Email *</label>
                            <input id="email" 
                                   name="email" 
                                   type="text" 
                                   placeholder="Jouw email adres..." 
                                   required />

                            <!-- Phone -->
                            <label for="phone">Telefoon</label>
                            <input id="phone" 
                                   name="phone" 
                                   type="text" 
                                   placeholder="Jouw telefoonnummer..." 
                                   />
                        </div>

                        <!-- Right column -->
                        <div class="col">
                            <!-- Message -->
                            <label for="message">Bericht *</label>
                            <textarea id="message" 
                                      name="message" 
                                      placeholder="Jouw bericht..." 
                                      required></textarea>

                            <!-- Submit -->
                            <input type="submit" class="submit" name="submit" value="verzenden">
                        </div>
                    </fieldset>
                </form>

            </div>
        </div>
    </section>
</div>

<?php 
drawFooter(); 
?>
		