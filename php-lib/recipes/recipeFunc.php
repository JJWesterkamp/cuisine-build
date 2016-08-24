<?php

//////////////////// Draw a recipe box function ////////////////////

function drawRecipe ($type, $key) {
    
    global $JSON_data;

    $recipe     = $JSON_data['recipes'][$type][$key];
    
    $title      = $recipe['title'];
    $prepTime   = $recipe['prepTime'][0];
    $country    = $recipe['country'];
    
    $markup = '
    
    <a data-page="'.$type.'Recept-'.$key.'" data-pagegroup="recepten" class="recipe crossPage" href="'.AHTR.'pages/recepten/'.$type.'-recipe.php?recipe='.$key.'">
        <div class="recipeTitle" style="background-image: url('.AHTR.'images/recipeHeroes/'.$key.'.jpg);">
            <p class="title">'.$title.'</p>
        </div>
        <ul class="recipeDetails">
            <li class="prepTime">'.$prepTime.'</li>
    
    ';
    
    if($type === 'featured'):
        $country = $recipe['country'];
        $markup .= '<li class="country">'.$country.'</li>';
    elseif($type === 'community'):
        $author = $recipe['author'];
        $markup .= '<li class="author">'.$author.'</li>';
    endif;
    
    $markup .= '
    
        </ul>
    </a>
    
    ';
    
    return $markup;
}

//////////////////// Draw featured recipe boxes ////////////////////

function drawFeaturedRecipes () {
    
    global $JSON_data;

    $featured = $JSON_data['recipes']['featured'];
    $markup = '';
    
    foreach($featured as $key => $value) {
        $markup .= drawRecipe('featured', $key);
    }
    
    return $markup;
}

//////////////////// Draw community recipe boxes ////////////////////

function drawCommunityRecipes () {
    
    global $JSON_data;

    $community = $JSON_data['recipes']['community'];
    $markup = '';
    
    foreach($community as $key => $value) {
        $markup .= drawRecipe('community', $key);
    }
    
    return $markup;
}

?>