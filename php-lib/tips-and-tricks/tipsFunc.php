<?php

$tips = $JSON_data['tips-and-tricks'];

function drawParagraphs($pars) {
    
    $markup = '';
    
    foreach($pars as $key => $value) {
        $markup .= "<h3>$key</h3>";
        
        foreach($pars[$key] as $text) {
            $markup .="<p>$text</p>";
        }
    }
    
    return $markup;
}

function drawArticle($title, $art) {
    $markup = '
    
        <div class="cardContent">
            
            <div class="pad">
                <h2>
                    <span>'.$art['intro']['title'].'</span>
                    '.$title.'
                </h2>
                
                <p>'.$art['intro']['text'].'</p>
    ';
    
    $sections = $art['sections'];
    
    foreach($sections as $section) {
        $markup .= '<h3>'.$section['heading'].'</h3>';
        
        foreach($section['paragraphs'] as $par)
            $markup .= '<p>'.$par.'</p>';
    }
    
    $markup .= '
        
            </div>
        </div>
    ';
    
    return $markup;
    
}
?>