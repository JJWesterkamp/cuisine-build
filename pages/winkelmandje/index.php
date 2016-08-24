<?php
// relative path to the root of the site
define('TO_ROOT', '../../');

// page depencencies.
$dependencies = array(

    // JSON data dependencies. Values correspond to JSON file names (books.json is always included by header.php)
    'JSON' => array(),

    // PHP function dependencies.
    'func' => array()
);

// Some static page parameters. Each page should have its own $pageData array
$pageData = array(
    
    // What people get to see
    'title'             => 'Winkelmandje',
    
    // unique string for processing in PHP and JS
    'currentPage'       => 'winkelmandje',
    
    // the page group this page is part of. used for navigation highlighting 
    'currentPageGroup'  => 'winkelmandje',
    
    // Need some scripts specifically for this page? define the paths here (without extension, relative to js root folder)
    'nonGlobal_scripts' => array(),
    
    // Are there canvas elements? Define them here and JS takes care of everything!
    'canvas'            => array('turningPage'),
    
    'hasImageMaps'         => false
);

// Include the page header
require(TO_ROOT.'/php-lib/loader.php');

function drawCartPage() {
    
    global $cartItems, $JSON_data;
    
    $markup = '';
    $totalCost = 0;
    
    foreach($cartItems as $item):
    
        $specs = $JSON_data['books'][$item['id']];
        $price = floatval(str_replace(',', '.', $specs['price']));
        $subTotal = number_format($price * (int)$item['count'], 2);
        $link = 'pages/bookstore/view-book.php?book='.$item['id'];
        $totalCost = $totalCost + $subTotal;
    
        $markup .= '
        <div class="cartItems">
            <div class="cartItem">
                <div class="image">
                    <a data-page="viewBook-'.$item['id'].'" 
                       data-pagegroup="bookstore" 
                       data-href="'.$link.'" 
                       href="'.AHTR.$link.'"
                       class="crossPage">
                        <img src="'.AHTR.'images/books/thumbs/'.$item['id'].'.jpg" alt="'.$specs['title'].'">
                    </a>
                </div>
                
                <div class="details">
                    <a data-page="viewBook-'.$item['id'].'" 
                       data-pagegroup="bookstore" 
                       data-href="'.$link.'" 
                       href="'.AHTR.$link.'"
                       class="crossPage">
                        <span class="title">'.$specs['title'].'</span>
                    </a>
                    <span class="author">'.$specs['author'].'</span>
                    <span class="bookDetails">'.$specs['language'].' | '.$specs['binding'].'</span>
                </div>
                
                <div class="actions">
                    <form id="updateAmount--'.$item['id'].'" method="GET" action="#">
                        <fieldset>
                            <label for="selectAmount--'.$item['id'].'">Aantal</label>
                            <select name="amount" id="selectAmount--'.$item['id'].'">';
    
        
        for($i = 1; $i <= 10; $i++):
            $selected = $i === (int)$item['count'] ? ' selected' : '';
    
            $markup .='<option value="'.$i.'"'.$selected.'>'.$i.'</option>';
        endfor;
        
        $markup .='
                            </select>
                            <input type="hidden" id="productID" name="product_id" value="'.$item['id'].'">
                            
                        </fieldset>
                    </form>
                </div>
                
                <div class="price">
                    <span>&euro;'.$subTotal.'</span>
                </div>
            </div>
        </div>';
    endforeach;
    
    $tax = round((21 * ($totalCost / 121)), 2, PHP_ROUND_HALF_UP);
    $markup .= '
        <div class="total">
            <div class="totalContent">
                <table>
                    <tr>
                        <th>Totaal artikelen: </th>
                        <td>&euro;'.$totalCost.'</td>
                    </tr>

                    <tr>
                        <th>BTW (21%): </th>
                        <td class="tax">&euro;'.$tax.'</span>
                    </tr>

                    <tr>
                        <th>Verzendkosten: </th>
                        <td class="green">Gratis</td>
                    </th>

                    <tr>
                        <th class="totalPrice">Totaal: </th>
                        <td class="totalPrice">&euro;'.$totalCost.'</td>
                    </tr>
                </table>
            </div>
            
            <div class="container checkout">
                <div class="content">
                    <a class="button" href="#">Naar de kassa</a>
                </div>
            </div>
        
        </div>
    ';
    return $markup;
    
}
drawHeader();
?>

<div class="mainContainer">
    <section id="cart">
        <?php echo drawBreadcrumb(array(), 'winkelmandje', false); ?>
        <div class="container">
            <h2>Winkelmandje</h2>
        </div>
        
        <?php echo drawCartPage(); ?> 

    </section>
</div>

<?php
drawFooter();
?>