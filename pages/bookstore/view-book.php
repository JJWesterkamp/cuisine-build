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
        'books/booksFunc'
    )
);

// Some static page parameters. Each page should have its own $pageData array
$pageData = array(
    
    // What people get to see
    'title'             => 'Bookstore',
    
    // unique string for processing in PHP and JS
    'currentPage'       => 'viewBook',
    
    // the page group this page is part of. used for navigation highlighting 
    'currentPageGroup'  => 'bookstore',
    
    // Need some scripts specifically for this page? define the paths here (without extension, relative to js root folder)
    'nonGlobal_scripts' => array(),
    
    // Are there canvas elements? Define them here and JS takes care of everything!
    'canvas'            => array('turningPage')
);

// Include the page loader
require(TO_ROOT.'/php-lib/loader.php');

// Get the book to show
$thisBook;

// if book was passed && its value is not empty && this value exists in the parsed books
if(isset($_GET['book']) && !empty($_GET['book']) && array_key_exists($_GET['book'], $JSON_data['books'])):

    // ...then continue loading page with a current recipe namespace
    $thisBook = $JSON_data['books'][$_GET['book']];
    $thisBook['id'] = $_GET['book'];
else:

    // else get the hell outta here: go to books index page
    header('Location: index.php');
endif;


// Update the page title accordingly, before drawing the header
$pageData['title'] = $thisBook['title'].' - Bookstore';

// Update currentPage variable accordingly
$pageData['currentPage'] .= '-'.$_GET['book'];


drawHeader();
?>

<div class="mainContainer">
    <div id="viewBook">
        <?php echo drawDetails($thisBook['id']); ?>
    </div>
</div>

<?php 
drawFooter(); 
?>