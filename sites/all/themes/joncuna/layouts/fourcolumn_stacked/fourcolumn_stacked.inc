<?php

// Plugin definition
$plugin = array(
  'title' => t('Four Column stacked'),
  'category' => t('Columns: 4'),
  'icon' => 'fourcolumn_stacked.png',
  'theme' => 'fourcolumn_stacked',
  'css' => 'fourcolumn_stacked.css',
  'regions' => array(
    'top' => t('Top'),
    'left' => t('Left side'),
    'middle_left' => t('Middle left'),
    'middle_right' => t('Middle right'),
    'right' => t('Right side'),
    'bottom' => t('Bottom')
  ),
);
