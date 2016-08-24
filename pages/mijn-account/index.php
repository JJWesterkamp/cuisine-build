<?php
// relative path to the root of the site
define('TO_ROOT', '../../');

// page depencencies.
$dependencies = array(

    // JSON data dependencies. Values correspond to JSON file names (books.json is always included by header.php)
    'JSON' => array(

    ),

    // PHP function dependencies.
    'func' => array(
    )
);

// Some static page parameters. Each page should have its own $pageData array
$pageData = array(
    
    // What people get to see
    'title'             => 'Mijn account',
    
    // unique string for processing in PHP and JS
    'currentPage'       => 'mijnAccount',
    
    // the page group this page is part of. used for navigation highlighting 
    'currentPageGroup'  => 'mijnAccount',
    
    // Need some scripts specifically for this page? define the paths here (without extension, relative to js root folder)
    'nonGlobal_scripts' => array(),
    
    // Are there canvas elements? Define them here and JS takes care of everything!
    'canvas'            => array('turningPage')
);

// Include the page header
require(TO_ROOT.'/php-lib/loader.php');
drawHeader();
?>

<div class="mainContainer chalkboard">
    <div id="mijnAccount">
	
        
        <nav id="accountNav">
            <ul>
                <li class="current">
                    <a data-page="mijnAccount" 
                       data-pagegroup="mijnAccount" 
                       class="crossPage accountLink" href="<?php echo AHTR; ?>pages/mijn-account/index.php">Mijn gegevens</a></li>
                <li>
                    <a data-page="veranderWachtwoord" 
                       data-pagegroup="mijnAccount" 
                       class="crossPage accountLink" href="<?php echo AHTR; ?>pages/mijn-account/wachtwoord-wijzigen.php">wachtwoord wijzigen</a></li>
                <li>
                    <a data-page="mijnRecepten" 
                       data-pagegroup="mijnAccount" 
                       class="crossPage accountLink" href="<?php echo AHTR; ?>pages/mijn-account/mijn-recepten.php">Recepten</a></li>
                <li>
                    <a data-page="mijnBestellingen" 
                       data-pagegroup="mijnAccount" 
                       class="crossPage accountLink" href="<?php echo AHTR; ?>pages/mijn-account/mijn-bestellingen.php">Bestellingen</a></li>
            </ul>
        </nav>
        <!-- Address and contact info -->
        
        <div id="accountContentWrapper">
            <section class="accountDetails">
                <h2>Mijn gegevens</h2>


                <dl>
                    <dt>Naam:</dt>
                    <dd>Jeffrey Westerkamp</dd>

                    <dt>Straat:</dt>
                    <dd>Nicolaas v.d. Laanstraat</dd>

                    <dt>Huisnummer / toev.</dt>
                    <dd>17 rood</dd>

                    <dt>Postcode:</dt>
                    <dd>2013BL</dd>

                    <dt>Plaats:</dt>
                    <dd>Haarlem</dd>

                    <dt>Telefoon:</dt>
                    <dd>-</dd>

                    <dt>Mobiel:</dt>
                    <dd>0683570738</dd>

                    <dt>Email adres:</dt>
                    <dd>jeffreywesterkamp@hotmail.com</dd>
                </dl>

                <a class="button crossPage" 
                   data-page="wijzigGegevens" 
                   data-pagegroup="mijnAccount"
                   data-href="pages/mijn-account/gegevens-wijzigen.php" 
                   href="<?php echo AHTR; ?>pages/mijn-account/gegevens-wijzigen.php">

                    Mijn gegevens wijzigen
                </a>
            </section>
        </div>      
        
    </div>
</div>

<?php 
drawFooter(); 
?>