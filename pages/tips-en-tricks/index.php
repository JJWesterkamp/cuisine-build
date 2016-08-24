<?php
// relative path to the root of the site
define('TO_ROOT', '../../');

// page depencencies.
$dependencies = array(

    // JSON data dependencies. Values correspond to JSON file names (books.json is always included by header.php)
    'JSON' => array(
        'imagemaps',
        'tips-and-tricks'
    ),

    // PHP function dependencies.
    'func' => array(
        'imagemaps/mapsFunc',
        'tips-and-tricks/tipsFunc'
    )
);

// Some static page parameters. Each page should have its own $pageData array
$pageData = array(
    
    // What people get to see
    'title'             => 'Tips en Tricks',
    
    // unique string for processing in PHP and JS
    'currentPage'       => 'tipsEnTricks',
    
    // the page group this page is part of. used for navigation highlighting 
    'currentPageGroup'  => 'tipsEnTricks',
    
    // Need some scripts specifically for this page? define the paths here (without extension, relative to js root folder)
    'nonGlobal_scripts' => array('imageMap'),
    
    // Are there canvas elements? Define them here and JS takes care of everything!
    'canvas'            => array('turningPage'),
    
    'hasImageMaps'         => true
);

// Include the page header
require(TO_ROOT.'/php-lib/loader.php');
drawHeader();

// We are going to need the image map data as JS object. Let's write the script to the document, which is way faster than doing an XMLHttpRequest on DOM ready:
echo print_JS_imageMap_Object($mapsJSON); 
?>

<div class="mainContainer chalkboard">
    <div id="tips">
        <h1 id="tipsHeader">
            <img src="<?php echo AHTR; ?>images/tips-and-tricks/header/comp.png" alt="test en verbreed je kennis met deze tips en tricks" width="" height="">
        </h1>
        <?php echo drawBreadcrumb(array(), $pageData['title'], true); ?>
        <!-- All tips sit in here... Section extends %container_12 -->
        <section class="tips">

            <!-- Left column -->
            <div class="mainColumn">

                <!-- ARTICLE: Pork imageMap -->
                <article class="card">
                    <div class="date">
                        <p>4 april 2016</p>
                    </div>

                    <div class="cardContent">

                        <!-- Intro text -->
                        <div class="pad">
                            <h2>
                                <span><em>Weten wat je koopt</em>, de delen van...</span>
                                Varkensvlees
                            </h2>

                            <p>Heb je altijd al willen weten van welk deel van een dier jouw stukje vlees afkomstig is, of heb je geen idee over welke stukken vlees dat engelse kookboek van je het heeft? Wij zetten de voornaamste termen op een rijtje!</p>

                            <p>Deze keer laten we zien welke delen van een varken worden gebruikt, en waarvoor. Beweeg met je muis over de afbeelding hieronder, en wij laten je zien wat de nederlandse en engelse termen zijn van het deel, en waarvoor het wordt gebruikt.</p>
                        </div>

                        <!-- Image map -->
                        <div data-mapName="pork" id="pork" class="imageMap">
                            <table>
                                <tr>
                                    <th>Engels:</th>
                                    <td class="en"><span class="placeholder">geen selectie gemaakt.</span></td>
                                </tr>

                                <tr>
                                    <th>Nederlands:</th>
                                    <td class="nl"><span class="placeholder">beweeg met je muis over de afbeelding...</span></td>
                                </tr>
                            </table>

                            <div class="mapContent">

                                <!-- underlay image -->
                                <img class="underImg"
                                     src="<?php echo AHTR; ?>images/tips-and-tricks/maps/pork/initial.jpg"
                                     width="400" >

                                <!-- Mapped image -->
                                <img id="MappedImage--pork" 
                                     class="mappedImage"
                                     src="<?php echo AHTR; ?>images/tips-and-tricks/maps/pork/initial.jpg"
                                     alt="Afbeelding van de delen van een varken" 
                                     width="400" 
                                     usemap="#porkMap">



                                <!-- map Coords -->
                                <map name="porkMap" id="porkMap">
                                    <area title="head" alt="head" data-area="head" shape="poly" coords="21,110,52,77,87,47,111,87,124,138,74,166,49,163,43,164,31,157,36,151,44,125,18,138,2,135" href="#">
                                    <area title="spareribs" alt="spareribs" data-area="spareribs" shape="poly" coords="90,45,115,95,144,69,177,42,179,26,174,19,133,23" href="#">
                                    <area title="belly" alt="belly" data-area="belly" shape="poly" coords="158,108,217,80,275,65,283,126,266,133,229,130,190,131" href="#">
                                    <area title="loin" alt="loin" data-area="loin" shape="poly" coords="178,19,272,3,274,62,226,72,181,92,154,64,178,45,181,29" href="#">
                                    <area title="leg" alt="leg" data-area="leg" shape="poly" coords="117,103,156,113,180,130,174,143,159,154,149,155,142,188,134,188,132,200,117,194,130,160" href="#">
                                    <area title="ham" alt="ham" data-area="ham" shape="poly" coords="276,2,319,1,356,17,374,39,387,38,393,49,396,63,381,66,368,103,359,126,333,138,326,132,305,147,298,124,284,125,278,65" href="#">
                                    <area title="hock" alt="hock" data-area="hock" shape="poly" coords="153,160,173,151,174,168,158,178" href="#">
                                    <area title="hock" alt="hock" data-area="hock" shape="poly" coords="304,155,322,143,317,169,301,173" href="#">
                                    <area title="hock" alt="hock" data-area="hock" shape="poly" coords="336,145,358,132,351,164,339,166" href="#">
                                </map>
                            </div>



                            <h3>Wordt gebruikt voor:</h3>
                            <p class="uses"></p>
                        </div>
                    </div>
                </article>


                <!-- ARTICLE: Glaceren -->
                <article class="card">
                    <div class="date">
                        <p>19 februari 2016</p>
                    </div>

                    <?php echo drawArticle('Glaceren', $tips['cooking']['Glaceren']); ?>

                </article>

                <!-- ARTICLE: Ei koken -->
                <article class="card">
                    <div class="date">
                        <p>12 februari 2016</p>
                    </div>

                    <div class="cardContent expanded">

                        <!-- Intro text -->
                        <div class="pad">
                            <h2>
                                <span>Ontbijt op bed met een <em>perfect eitje</em></span>

                                Eieren koken
                            </h2>

                            <p>Eieren koken, voor de één gesneden koek, voor de ander wat lastiger. Krijg jij nooit de schaal los, ploffen jouw eieren uit elkaar tijdens het koken, of heb je andere slechte ervaringen?</p>

                            <p>Je wil dit weekend jouw valentijn niet verrassen met een mislukt gekookt eitje! Niet getreurd, na het kijken van deze video kan het niet meer fout gaan!</p>
                        </div>

                        <video poster="<?php echo AHTR; ?>images/tips-and-tricks/ei-koken-poster.jpg" 
                               controls 
                               preload="auto"
                               id="ei-koken">

                            <!-- Sources -->
                            <source src="<?php echo AHTR; ?>video/ei-koken/720/ei-koken-720.mp4" type="video/mp4">

                            <!-- Fallback text -->
                            <p>
                              To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video
                            </p>
                        </video>

                    </div>
                </article>

                <!-- ARTICLE: Blancheren -->
                <article class="card">
                    <div class="date">
                        <p>18 januari 2016</p>
                    </div>

                    <?php echo drawArticle('Blancheren', $tips['cooking']['Blancheren']); ?>

                </article>
            </div>

            <!-- Right column -->
            <div class="mainColumn">

                <!-- ARTICLE: snijtechnieken -->
                <article class="card">
                    <div class="date">
                        <p>20 maart 2016</p>
                    </div>

                    <div class="cardContent">

                        <!-- Intro text -->
                        <div class="pad">
                            <h2>
                                <span>Brunoise, <em>Chinoise</em>, Julienne</span>
                                Snijtechnieken en - terminologie
                            </h2>

                            <p>Kookboeken, en de professionele keuken in het algemeen komen vaak met allerlei (vaak franse) termen op de proppen om verschillende manieren van het snijden van groenten te beschrijven. Kom jij een term als ‘Brunoise’, ‘Canneleren’ of één van de honderden andere mogelijkheden tegen, en heb je geen idee wat ermee bedoeld wordt? Geen zorgen! Wij zetten de belangrijkste op een rijtje!</p>
                        </div>

                        <img src="<?php echo AHTR; ?>images/tips-and-tricks/cutting.jpg" alt="Afbeelding van het resultaat van verschillende snijtechnieken" width="100%">

                        <div class="pad">
                            <?php echo drawParagraphs($tips['cutting']); ?>
                        </div>
                    </div>
                </article>


                <!-- ARTICLE: Beef imageMap -->
                <article class="card">
                    <div class="date">
                        <p>11 februari 2016</p>
                    </div>

                    <div class="cardContent">

                        <!-- Intro text -->
                        <div class="pad">
                            <h2>
                                <span><em>Weten wat je koopt</em>, de delen van...</span>
                                Rundvlees
                            </h2>

                            <p>Heb je altijd al willen weten van welk deel van een dier jouw stukje vlees afkomstig is, of heb je geen idee over welke stukken vlees dat engelse kookboek van je het heeft? Wij zetten de voornaamste termen op een rijtje!</p>

                            <p>Deze keer laten we zien welke delen van een rund worden gebruikt, en waarvoor. Beweeg met je muis over de afbeelding hieronder, en wij laten je zien wat de nederlandse en engelse termen zijn van het deel, en waarvoor het wordt gebruikt.</p>
                        </div>

                        <!-- Image map -->
                        <div data-mapName="beef" id="beef" class="imageMap">
                            <table>
                                <tr>
                                    <th>Engels:</th>
                                    <td class="en"><span class="placeholder">geen selectie gemaakt.</span></td>
                                </tr>

                                <tr>
                                    <th>Nederlands:</th>
                                    <td class="nl"><span class="placeholder">beweeg met je muis over de afbeelding...</span></td>
                                </tr>
                            </table>

                            <div class="mapContent">

                                <!-- underlay image -->
                                <img class="underImg"
                                     src="<?php echo AHTR; ?>images/tips-and-tricks/maps/beef/initial.jpg"
                                     width="400" >

                                <!-- Mapped image -->
                                <img id="MappedImage--beef" 
                                     class="mappedImage"
                                     src="<?php echo AHTR; ?>images/tips-and-tricks/maps/beef/initial.jpg"
                                     alt="Afbeelding van de delen van een rund" 
                                     width="400" 
                                     usemap="#beefMap">



                                <!-- map Coords -->
                                <map name="beefMap" id="beefMap">

                                  <area title="chuck" alt="chuck" data-area="chuck" shape="poly" coords="89,8,118,2,157,3,166,4,168,87,92,93" href="#">
                                  <area title="rib" alt="rib" data-area="rib" shape="poly" coords="167,3,170,91,214,91,247,95,245,90,243,10" href="#">
                                  <area title="shortloin" alt="shortloin" data-area="shortloin" shape="poly" coords="245,11,291,18,290,35,263,41,264,47,286,54,293,53,295,106,247,95" href="#">
                                  <area title="brisket" alt="brisket" data-area="brisket" shape="poly" coords="97,94,167,90,167,124,160,126,122,127,107,113" href="#">
                                  <area title="plate" alt="plate" data-area="plate" shape="poly" coords="171,90,246,97,242,133,200,134,169,129" href="#">
                                  <area title="flank" alt="flank" data-area="flank" shape="poly" coords="246,97,293,105,316,119,287,124,246,132" href="#">
                                  <area title="sirloin" alt="sirloin" data-area="sirloin" shape="poly" coords="292,18,294,35,331,37,331,15" href="#">
                                  <area title="tenderloin" alt="tenderloin" data-area="tenderloin" shape="poly" coords="333,33,332,58,285,55,263,46,273,37" href="#">
                                  <area title="toploin" alt="toploin" data-area="toploin" shape="poly" coords="296,55,330,55,333,77,295,75" href="#">
                                  <area title="bottomsirloin" alt="bottomsirloin" data-area="bottomsirloin" shape="poly" coords="294,74,329,76,324,121,294,108" href="#">
                                  <area title="round" alt="round" data-area="round" shape="poly" coords="332,15,370,27,385,52,386,75,398,136,397,154,385,145,378,84,366,120,325,125,336,77" href="#">
                                  <area title="shank" alt="shank" data-area="shank" shape="poly" coords="139,129,159,129,160,155,152,158,143,143" href="#">
                                  <area title="shank" alt="shank" data-area="shank" shape="poly" coords="337,126,357,126,364,150,359,150,344,144" href="#">
                                </map>
                            </div>



                            <h3>Wordt gebruikt voor:</h3>
                            <p class="uses"></p>
                        </div>
                    </div>
                </article>


                <!-- ARTICLE: Gratineren -->
                <article class="card">
                    <div class="date">
                        <p>30 januari 2016</p>
                    </div>

                    <?php echo drawArticle('Gratineren', $tips['cooking']['Gratineren']); ?>
                </article>

                <!-- ARTICLE: Grill master -->
                <article class="card">
                    <div class="date">
                        <p>12 januari 2016</p>
                    </div>

                    <div class="cardContent">

                        <div class="pad">
                             <h2>
                                <span>Grill je vlees en groente altijd <em>perfect</em></span>


                                 Grill Master
                            </h2>

                            <p>Grill je vlees en groente perfect met deze cheatsheet! Zie voor een heleboel stukjes vlees, vis, kip of groenten hoe lang, en met welk soort warmte en welke temperatuur het het beste bereid wordt om  jouw barbecue tot een groot succes te maken dat je vrienden zullen onthouden! Klik voor een grotere afbeelding.</p>
                        </div>

                        <a href="<?php echo AHTR; ?>images/cheatsheets/08-grilling.jpg" target="_blank">
                            <img src="<?php echo AHTR; ?>images/cheatsheets/08-grilling.jpg" width="100%">
                        </a>
                    </div>
                </article>
            </div>

        </section>


    </div>

    <!-- SECTION: Contact -->

    <section id="contactForm" class="darkGrey">
        <div class="container">

                <h2 class="construct">
                    <span class="subtitle">
                        Weet jij een <em>goede tip of trick</em>? Laat het ons weten!
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
</div><!-- close .chalkboard -->
    
<?php 
drawFooter(); 
?>
       