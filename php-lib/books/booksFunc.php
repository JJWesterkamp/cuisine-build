<?php

////////// Books list view //////////

function drawBook($key) {
    
    global $JSON_data;
    
    $book = $JSON_data['books'][$key];
    $title = $book['title'];
    $imgSrc = AHTR.'images/books/'.$key.'.jpg';
    $link = AHTR.'pages/bookstore/view-book.php?book='.$key;
    
    if($book['rating']['rates'] !== 0):
        // Percentage naar sterren
        $rating = $book['rating']['avg'] / 20;
        $ratingTitle = 'Gemiddelde beoordeling: '.$rating.' van de 5 sterren';
    else:
        $ratingTitle = 'Er zijn nog geen beoordelingen voor '.$book['title'];
    endif;
    
    $subtitle = $book['subtitle'] ? $book['subtitle'] : '-';
    $markup = '
    
    <div class="book">
        <div class="titleBox">
            <p class="title">'.$book['title'].'<span> - '.$book['author'].'</span></p>
            <p class="subtitle">'.$subtitle.'</p>
        </div>

        <div class="contentBox">
            <div class="details">
                <div class="textBox">
                    <p>'.$book['language'].' | '.$book['binding'].' | '.$book['release']['year'].' | </p>
                </div>
                <div class="rating">
                    <img class="stars" data-rating="'.$book['rating']['avg'].'" src="'.AHTR.'images/icons/stars.png" alt="'.$ratingTitle.'" title="'.$ratingTitle.'">
                </div>
            </div>
            
            <div class="price">
                <p>€'.$book['price'].'</p>
            </div>

            <a data-page="viewBook-'.$key.'" data-pagegroup="bookstore" class="bookImageBox crossPage" href="'.$link.'" title="Bekijk '.$book['title'].'">
                <div class="bookImage" style="background-image: url('.$imgSrc.');"></div>
            </a>

            <p class="summary">
                '.$book['summary'].'
            </p>
        </div>

        <a data-page="viewBook-'.$key.'" 
           data-pagegroup="bookstore" 
           class="simpleLink more crossPage" 
           href="'.$link.'" 
           title="Bekijk '.$book['title'].'">Lees meer</a>

        <div class="linksBox">
            <a class="link cart" 
               href="#" 
               data-item-category="books" 
               data-item-id="'.$key.'" 
               title="Voeg \''.$book['title'].'\' toe aan je winkelmandje">
                
                <span>In winkelmandje</span>
            </a>
            <a class="link wishlist" 
               href="#" 
               data-item-category="books" 
               data-item-id="'.$key.'" 
               title="Zet \''.$book['title'].'\' op je verlanglijstje"><span>Zet op verlanglijstje</span></a>
        </div>
    </div>
    
    ';
    
    return $markup;
}

function drawBooks () {
    
    global $JSON_data;
    $markup = '';
    
    foreach($JSON_data['books'] as $key => $value) {
        $markup .= drawBook($key);
    }
    
    return $markup;
}

////////// Books details view //////////

function drawDetails ($key) {
    
    global $JSON_data;
    
    $book = $JSON_data['books'][$key];
    $title = $book['title'];
    $imgSrc = AHTR.'images/books/'.$key.'.jpg';
    
    if($book['rating']['rates'] !== 0):
        // Percentage naar sterren
        $rating = $book['rating']['avg'] / 20;
        $ratingTitle = 'Gemiddelde beoordeling: '.$rating.' van de 5 sterren';
    else:
        $ratingTitle = 'Er zijn nog geen beoordelingen voor '.$book['title'];
    endif;
    
    $subtitle = $book['subtitle'] ? $book['subtitle'] : '';
    
    $markup = drawBreadcrumb(array('bookstore'), $book['title'], false);
    $markup .= '
        <div class="leftCol">
            <img class="bookCover" src="'.$imgSrc.'" alt="De cover van het boek: '.$title.'">
            <p class="price">&euro;'.$book['price'].'</p>
            <a class="button cart" href="#">in winkelmandje</a>
            <a class="button" href="#">Zet op verlanglijstje</a>
        </div>
        
        <div class="rightCol">
            
            <h2>
                '.$title.'
                <span>'.$subtitle.'</span>
            </h2>
            
            <p class="author"><span>Auteur:</span> '.$book['author'].'</p>
            
            <div class="details">
                <div class="textBox">
                    <p>'.$book['language'].' | '.$book['binding'].' | '.$book['release']['year'].' | </p>
                </div>
                <div class="rating">
                    <img class="stars" data-rating="'.$book['rating']['avg'].'" src="'.AHTR.'images/icons/stars.png" alt="'.$ratingTitle.'" title="'.$ratingTitle.'">
                </div>
            </div>
            
            <h3>Samenvatting</h3>
            
            <p>'.$book['summary'].'</p>
            
            <h3>Beschrijving</h3>
    ';
    
    if(count($book['description'])):
        foreach($book['description'] as $paragraph):
            $markup .= '<p>'.$paragraph.'</p>';
        endforeach;
    else:
        $markup .='<p>Geen aanvullende informatie beschikbaar.</p>';
    endif;
    
    $markup .= '
        </div>
    ';
    
    return $markup;
}
?>



































