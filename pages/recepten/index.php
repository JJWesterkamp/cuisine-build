<?php
define('TO_ROOT', '../../');

// page depencencies.
$dependencies = array(

    // JSON data dependencies. Values correspond to JSON file names (books.json is always included by header.php)
    'JSON' => array(
        'recipes'
    ),

    // PHP function dependencies.
    'func' => array(
        'recipes/recipeFunc'
    )
);

// Some static page parameters. Each page should have its own $pageData array
$pageData = array(
    
    // What people get to see
    'title'             => 'Recepten',
    
    // unique string for processing in PHP and JS
    'currentPage'       => 'recepten',
    
    // the page group this page is part of. used for navigation highlighting 
    'currentPageGroup'  => 'recepten',
    
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
    <article id="recipeIndex">

        <div class="hero">
            <h1>Deze recepten van Cuisine zullen je verrassen</h1>
            <p class="subtitle">Probeer deze <em>selectie uit onze boeken</em> eens thuis uit! Bij elk recept vind je een link naar het boek waar het instaat.</p>
            <?php echo drawBreadcrumb(array(), 'Recepten', true); ?>
        </div>
        
        
        <section>
            <div id="featuredRecipes">
                <h2>Recepten van Cuisine</h2>
                
                <p>Bekijk hier de recepten die wij gepubliceerd hebben. Bij elk recept vind je alle informatie die je nodig hebt om vanavond zelf wat lekkers te koken!</p>
                <?php echo drawFeaturedRecipes(); ?>
            </div>

            <div class="copyrightNotice">
                <div class="content">
                    <p>BRON: <a href="http://www.ah.nl/allerhande/">Albert Heijn</a></p>
                    <p>*Alle getoonde inhoud afkomstig van ah.nl wordt hier enkel om illustratieve / educatieve redenenen weergegeven. Het auteursrecht van de teksten en illustraties ligt bij de originele auteurs van deze inhoud, of bij hen die volgens de <a href="http://www.ah.nl/algemene-voorwaarden">algemene voorwaarden</a> van ah.nl rechten over de inhoud houden.</p>
                </div>
            </div>
        </section>

        <section class="communityRecipes lightGrey">

            <div class="container">
                <h2 class="construct">
                    <span class="subtitle">
                        Jij kan <em>je eigen recepten toevoegen</em> aan onze site. Velen zijn je al voorgegaan!
                    </span>
                    Recepten van onze community
                </h2>
            </div>


            <div id="communityRecipes">
                <?php echo drawCommunityRecipes(); ?>
            </div>

            <div class="copyrightNotice">
                <div class="content">
                    <p>BRON: <a href="http://www.smulweb.nl/recepten">Smulweb</a></p>
                    <p>*Alle getoonde inhoud afkomstig van smulweb wordt hier enkel om illustratieve / educatieve redenenen weergegeven. Het auteursrecht van de teksten en illustraties ligt bij de originele auteurs van deze inhoud, of bij hen die volgens de <a href="http://www.smulweb.nl/disclaimer_en_copyright">algemene voorwaarden</a> van smulweb.nl rechten over de inhoud houden.</p>
                </div>
            </div>

        </section> 
    </article>
</div>

<?php 
drawFooter(); 
?>