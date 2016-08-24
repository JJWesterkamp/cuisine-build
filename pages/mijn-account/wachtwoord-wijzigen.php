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
                <li>
                    <a data-page="mijnAccount" 
                       data-pagegroup="mijnAccount" 
                       class="crossPage accountLink" href="<?php echo AHTR; ?>pages/mijn-account/index.php">Mijn gegevens</a></li>
                <li class="current">
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
            <section class="changePass">
                <h2>Wachtwoord wijzigen</h2>

                <form id="updatePass" method="POST" action="#">
                    <fieldset>
                        <label for="oldPass">Huidig wachtwoord</label>
                        <input id="oldPass" type="password" placeholder="voer eerst je huidige wachtwoord in...">

                        <label for="newPass">Nieuw wachtwoord</label>
                        <input id="newPass" type="password">

                        <label for="newPassRepeat">Herhaal wachtwoord</label>
                        <input id="newPassRepeat" type="password">

                        <input type="submit" class="button" value="Bevestigen">
                    </fieldset>
                </form>
            </section>
        </div>
        
        
        
        
    </div>
</div>

<?php 
drawFooter(); 
?>