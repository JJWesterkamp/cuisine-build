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
            <section class="editAccount">
                <form id="accountData" action="<?php echo AHTR; ?>pages/mijn-account/index.php" method="POST">
                    
                    <div class="row">
                        <div class="grid_6 alpha">
                            <label for="firstName">Voornaam *</label>
                            <input type="text" name="first_name" id="firstName" value="Jeffrey" pattern="^[A-Za-z-]{2,18}$" required>
                        </div>

                        <div class="grid_6 omega">
                            <label for="lastName">Achternaam *</label>
                            <input type="text" name="last_name" id="lastName" value="Westerkamp" pattern="^[A-Za-z-]{2,18}$" required>
                        </div>  
                    </div>
                    
                    <div class="row">

                        <div class="grid_6 alpha">
                            <label for="street">Straat *</label>
                            <input type="text" name="street" id="street" value="Nicolaas v.d. Laanstraat" pattern="^[A-Za-z.\s]{1,30}" required>
                        </div>

                        <div class="grid_3">
                            <label for="houseNr">Huisnummer *</label>
                            <input type="text" name="house_nr" id="houseNr" value="17" pattern="^[0-9]{1,5}$" required>

                        </div>

                        <div class="grid_3 omega">
                            <label for="houseNrSuffix">Toevoeging</label>
                            <input type="text" name="house_nr_suffix" id="houseNrSuffix" value="rood" pattern="^[A-Za-z0-9\s]{1,10}">
                        </div>
                    </div>
                    
                    <div class="row">

                        <div class="grid_3 alpha">
                            <label for="zipCode">Postcode *</label>
                            <input type="text" name="zip_code" id="zipCode" value="2013BL" pattern="^[0-9]{4}\s?[A-Za-z]{2}$" required>
                        </div>

                        <div class=" grid_9 omega">
                            <label for="city">Plaats *</label>
                            <input type="text" name="city" id="city" value="Haarlem" pattern="^[A-Za-z-\s]{3,30}" required>
                        </div>
                    </div>
                    
                    <div class="row">
                        <label for="phone">Telefoon</label>
                        <input type="text" name="phone" id="phone" value="" pattern="^[0-9]{10}$">
                    </div>
                    
                    <div class="row">
                        <label for="mobile">Mobiel</label>
                        <input type="text" name="mobile" id="mobile" value="0683570738" pattern="^[0-9]{10}$">
                    </div>
                    
                    <div class="row">
                        <label for="email">Email adres *</label>
                        <input type="email" name="email" id="email" value="jeffreywesterkamp@hotmail.com" pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$" required>
                    </div>


                    <input type="submit" class="submit button" value="Wijzigingen opslaan">
                </form>
            </section>
        </div>      
        
    </div>
</div>

<?php 
drawFooter(); 
?>