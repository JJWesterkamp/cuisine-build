<?php
define('TO_ROOT', '');

// page depencencies.
$dependencies = array(

    // JSON data dependencies. Values correspond to JSON file names (books.json is always included by header.php)
    'JSON' => array(
        'recipes',
        'books'
    ),

    // PHP function dependencies.
    'func' => array(
        'books/booksFunc',
        'recipes/recipeFunc'
    )
);

// Some static page parameters. Each page should have its own $pageData array
$pageData = array(
    
    // What people get to see
    'title'             => 'Home',
    
    // unique string for processing in PHP and JS
    'currentPage'       => 'home',
    
    // the page group this page is part of. used for navigation highlighting 
    'currentPageGroup'  => 'home',
    
    // Need some scripts specifically for this page? define the paths here (without extension, relative to js root folder)
    'nonGlobal_scripts' => array(),
    
    // Are there canvas elements? Define them here and JS takes care of everything!
    'canvas'            => array('turningPage', 'drivingCar')
);

// Include the page header
require(TO_ROOT.'/php-lib/loader.php');

drawHeader();
?>
        
<!-- Homepage caroussel -->

<div class="caroussel">
    <div class="container slide-1">
        <div class="slideContent">
            <img src="<?php echo AHTR; ?>images/caroussel/slide-1/text.png" width="493" height="388" alt="Maak thuis professionele gerechten met de boeken van cuisine.">
        </div>
    </div>

    <div class="searchBox">
        <form id="homeSearch" action="#" method="GET">
            <fieldset>
                <div class="searchField">
                    <input type="text" placeholder="Zoek recepten, boeken, tips en meer...">
                </div>

                <div class="submit">
                    <input type="submit" value="zoeken">
                </div>

            </fieldset>
        </form>
    </div>
</div>



<!-- SECTION: intro text -->

<section id="home-introduction">
    <div class="container">
        <div class="content">

            <h2 class="construct">
                <span class="subtitle">
                    Zet de <em>mooiste creaties</em> op tafel
                </span>
                Een culinaire wereldreis
            </h2>


            <p class="center">Voor de boeken die wij uitgeven reizen specialisten de hele wereld over om voor jou de beste streekgerechten te selecteren. Kwaliteit en originaliteit zijn belangrijke factoren bij het samenstellen van de recepten. En dat zie je terug in onze boeken.</p>

            <a data-page="overCuisine" data-pagegroup="overCuisine" class="button cuisine crossPage" href="pages/over-cuisine/index.php">Over Cuisine</a>


        </div>
    </div>
    <canvas id="drivingCar" width="2000" height="200"></canvas>
</section>



<!-- SECTION: Latest recipes -->
<section id="home-latestRecipes" class="darkGrey">
    <div class="container">
        <div class="content">

            <h2 class="construct">
                <span class="subtitle">
                    Een greep uit onze <em>nieuwste boeken</em>
                </span>
                Bekijk deze recepten online!
            </h2>

            <p class="center">
                We geven voortdurend nieuwe boeken uit. Om je een idee te geven van de inhoud van onze boeken publiceren we regelmatig recepten online, zodat jij zelf onze gerechten kan ervaren voordat je een boek koopt. Vind je een gerecht helemaal geweldig? Dan kan je eenvoudig de link naar het boek in de bookstore volgen om die aan te schaffen, zodat je eindeloos kan varieren met nog veel meer recepten in hetzelfde thema.
            </p>
        </div>

        <div id="featuredRecipes">
            <?php echo drawFeaturedRecipes(); ?>
        </div>

        <div class="centerText">
            <a data-page="recepten" data-pagegroup="recepten" class="button recipe crossPage" href="pages/recepten/index.php">Alle recepten</a>
        </div>
    </div>

</section>



<!-- SECTION: Community book -->

<section id="home-communityBook">
    <div class="container">
        <div class="content">

            <h2 class="construct">
                <span class="subtitle">
                    Jouw gerecht in het volgende <em>community kookboek</em>?
                </span>
                Upload direct jouw beste idee!
            </h2>

            <p>
                Heb jij ook een heerlijk recept bedacht, en wil je die graag delen met anderen? Dat kan! Je kan jouw recepten aan je persoonlijke account toevoegen, zodat deze online te bekijken zijn door overige leden van de Cuisine community. Je kan elkaars recepten beoordelen, en eens per jaar publiceren wij de beste gerechten in het Community kookboek! Zie jij graag jouw recept terug in het volgende community receptenboek? Wacht niet langer, en upload jouw beste ideeeen!
            </p>


                <a data-page="recepten" class="button community crossPage" href="pages/recepten/index.php">Bekijk community recepten</a>
                <span class="buttonConnect">of</span>
                <a data-page="uploadRecept" data-pagegroup="recepten" class="button upload crossPage" href="pages/recepten/upload.php">Upload je eigen recept</a>

        </div>
    </div>
</section>



<!-- SECTION: Bookstore -->

<section id="home-bookstore">
    <div class="container">
        <div class="content">

            <h2 class="construct">
                <span class="subtitle">
                    De <em>nieuwste boeken</em> uit onze collectie
                </span>
                Nieuw van Cuisine
            </h2>
            
            <div id="books">
                <?php
                    echo drawBook('b00003');
                    echo drawBook('b00011');
                ?>
            </div>
            <a data-page="bookstore" data-pagegroup="bookstore" class="button bookstore crossPage" href="pages/bookstore/index.php">Naar de bookstore</a>

        </div>
    </div>
</section>



<!-- SECTION: Contact -->

<section id="contactForm" class="darkGrey">
    <div class="container">

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
</section>

<script>
     
</script>

<?php
drawFooter();
?>
