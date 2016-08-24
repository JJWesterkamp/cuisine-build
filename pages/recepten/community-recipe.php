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
    'title'             => 'Community Recepten',
    
    // unique string for processing in PHP and JS
    'currentPage'       => 'communityRecept',
    
    // the page group this page is part of. used for navigation highlighting 
    'currentPageGroup'  => 'recepten',
    
    // Need some scripts specifically for this page? define the paths here (without extension, relative to js root folder)
    'nonGlobal_scripts' => array(),
    
    // Are there canvas elements? Define them here and JS takes care of everything!
    'canvas'            => array('turningPage')
);

// Include the page header
require(TO_ROOT.'/php-lib/loader.php');




// We gaan natuurlijk niet voor elk recept een pagina maken hè!

///////////////////////////////////////////////// validate GET value /////////////////////////////////////////////////


// Get the recipe to show
$thisRecipe;

// if recipe was passed && its value is not empty && this value exists in the parsed recipes
if(isset($_GET['recipe']) && !empty($_GET['recipe']) && array_key_exists($_GET['recipe'], $JSON_data['recipes']['community'])):

    // ...then continue loading page with a current recipe namespace
    $thisRecipe = $JSON_data['recipes']['community'][$_GET['recipe']];
else:

    // else get the hell outta here: go to recipes index page
    header('Location: index.php');
endif;


// Update the page title accordingly, before drawing the header
$pageData['title'] = $thisRecipe['title'].' - Community recepten';

// Update currentPage variable accordingly
$pageData['currentPage'] .= '-'.$_GET['recipe'];

///////////////////////////////////////// Define markup constructor functions /////////////////////////////////////////

// drawHeader constructs and returns markup string containing the division with background image of the dish, title and subtitle
function drawRecipeHeader () {
    
    global $JSON_data, $thisRecipe;
    
    $heroImage = AHTR . $JSON_data['recipes']['imagePath'] . $_GET['recipe'] . '.jpg';

    $markup  = '<div class="hero" style="background-image: url('.$heroImage.')">';
    $markup .= '<div class="container"><div class="content"><h1>';
    $markup .= $thisRecipe['title'];
    $markup .= '</h1><p class="subtitle">';
    $markup .= $thisRecipe['introduction'];
    $markup .= '</p></div></div></div>';

    return $markup;
}

// constructs and returns the list of ingredients to show on the shopping list
function drawRecipeIngredients () {
    
    global $thisRecipe;
    
    $ingr = $thisRecipe['ingredients'];

    $markup = '<p>';
    $markup .= 'Ingrediënten voor '.$thisRecipe['keyword'].':<br><br>';

    for($i = 0, $l = count($ingr); $i < $l; $i++):
        $markup .= $ingr[$i].'<br>';
    endfor;

    return $markup.'</p>';
}

// constructs and returns the paragraphs describing the preparation of the dish
function drawRecipePreparation () {
    
    global $thisRecipe;
    
    $prep = $thisRecipe['preparation'];
    $markup = '<ol>';

    for($i = 0, $l = count($prep); $i < $l; $i++):
        $markup .= '<li><p>'.$prep[$i].'</p></li>';
    endfor;

    return $markup.'</ol>';
}


drawHeader();
?>
<div class="mainContainer">
    <section id="recipe">

        <!-- Hero image -->
        <?php echo drawRecipeHeader(); ?>

        <!-- Summary bar -->
        <div class="recipeSummary">
            <ul>
                <li class="peopleAmount"><?php echo $thisRecipe['people']; ?> personen</li>
                <li class="prepTime"><?php echo $thisRecipe['prepTime'][0]; ?></li>
                <li class="author"><?php echo $thisRecipe['author']; ?></li>
                <li class="country"><?php echo $thisRecipe['country']; ?></li>
            </ul>
        </div>

        <div class="recipe">

            <!-- Left column -->
            <div class="recipeDetails">
                <div id="ingredients">
                    <?php echo drawRecipeIngredients(); ?>
                </div>

                <a class="print" href="#">Print boodschappenlijstje</a>
            </div>

            <!-- Right column -->

            <div class="preparation">
                <h3>Bereiding:</h3>
                <div id="prepContent">
                    <?php echo drawRecipePreparation(); ?>
                </div>
            </div>
        </div>                
    </section>

    <section class="lightGrey">
        <div id="communityRecipes">

            <h2 class="construct">
                <span class="subtitle">
                    Bekijk deze <em>recepten van andere Cuisine leden</em> ook eens!
                </span>
                meer community recepten
            </h2>

            <?php echo drawCommunityRecipes(); ?>
        </div>
    </section>
</div>

<?php 
drawFooter(); 
?>