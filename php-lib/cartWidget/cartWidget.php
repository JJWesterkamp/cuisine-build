<?php

function constructCartItem ($books, $key, $count) {
    
    $book = $books[$key];
    $price = floatval(str_replace(',', '.', $book['price']));
    $subTotal = $price * $count;
    $link = 'pages/bookstore/view-book.php?book='.$key;
    $markup = '
    
    <div class="item" data-productId="'.$key.'">
        <div class="articleInfo">
            <a data-page="viewBook-'.$key.'" 
               data-pagegroup="bookstore" 
               data-href="'.$link.'" 
               href="'.AHTR.$link.'">
                <img class="productImg" src="'.AHTR.'images/books/thumbs/'.$key.'.jpg" alt="Foto: '.$book['title'].'" width="50" height="50">
            </a>

            <div class="text">
                <a data-page="viewBook-'.$key.'" 
                   data-pagegroup="bookstore" 
                   data-href="'.$link.'"  
                   href="'.AHTR.$link.'">'.$book['title'].'</a>
                <p>'.$book['subtitle'].'</p>
            </div>

            <a class="remove" href="#" title="verwijder artikel">
                <img src="'.AHTR.'images/remove.png" alt="verwijder">
            </a>
        </div>

        <table>
            <tr>
                <th>prijs p/s</th>
                <th>aantal</th>
                <th>subtotaal</th>
            </tr>

            <tr>
                <td>&euro;'.$book['price'].'</td>
                <td>
                    <a href="#">-</a>
                    '.$count.'
                    <a href="#">+</a>
                </td>
                <td>&euro;'.number_format($subTotal, 2, ',', '').'</td>
            </tr>
        </table>
    </div>
    
    ';
    
    return array(
        'markup' => $markup,
        'subTotal' => $subTotal
    );
}

function getCartItems ( $books, $items ) {
    
    $markup = '';
    $totalCost = 0;
    
    for ($i = 0, $l = count($items); $i < $l; $i++):
        $item = constructCartItem($books, $items[$i]['id'], $items[$i]['count']);
        
        $markup .= $item['markup'];
        $totalCost = $totalCost + $item['subTotal'];
    endfor;
    
    return array(
        'markup' => $markup,
        'totalCost' => number_format($totalCost, 2, ',', '')
    );
}

function drawCartWidget ( $items ) {
    
    // Get JSON data with all recipes
    $booksJSON = file_get_contents(AHTR.'json/books.json');
    $books = json_decode($booksJSON, true);
    
    $cartContent = getCartItems( $books, $items );
    
    $markup = '
        <div class="cartHeader">
            Mijn winkelmandje
        </div>

        <div class="items">
            '.$cartContent['markup'].'
            
            <div class="sum">
                Totaal: <span>&euro;'.$cartContent['totalCost'].'</span>
            </div>

            <div class="cartLinks">
                <a data-page="winkelmandje" 
                   data-pagegroup="shop" 
                   data-href="pages/winkelmandje/index.php" href="'.AHTR.'pages/winkelmandje/index.php" 
                   class="gotoCart">&gt; Bekijk mandje</a>

                <a data-page="checkout" data-pagegroup="shop" data-href="#" href="#" class="button">Naar de Kassa</a>
            </div>
        </div>';
    
    echo $markup;
}

?>