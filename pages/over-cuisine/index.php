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
    'title'             => 'Over Cuisine',
    
    // unique string for processing in PHP and JS
    'currentPage'       => 'overCuisine',
    
    // the page group this page is part of. used for navigation highlighting 
    'currentPageGroup'  => 'overCuisine',
    
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
    <div id="overCuisine">
        <?php echo drawBreadcrumb(array(), $pageData['title'], false); ?>
    </div>
</div>

<?php
drawFooter(); 
?>