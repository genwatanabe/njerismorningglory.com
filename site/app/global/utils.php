<?php

function is_debug() {
  if (stripos($_SERVER['REQUEST_URI'],'/_debug') !== false) {
    return true;
  } else {
    return false;
  }
}

?>