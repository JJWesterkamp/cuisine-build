<?php

$mapsJSON = file_get_contents(TO_ROOT.'json/imagemaps.json');
$maps = json_decode($mapsJSON, true);

function print_JS_imageMap_Object($mapsJSON) {
    return "
        <script>
            var imageMapsJSON = '$mapsJSON',
                imageMaps = JSON.parse(imageMapsJSON);
                
                console.log('%c Finished parsing image map JSON data: ', 'background: #55bbda; color: #202e33');
                console.log(imageMaps);
        </script>
    ";
}
?>