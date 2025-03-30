<?php
/**
 * Template Name: React App Page
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?php bloginfo('name'); ?> - React App</title>

  <!-- 引入构建后的 React CSS -->
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/index-DJDiLjRm.css" crossorigin>

  <!-- WordPress 插件兼容性 -->
  <?php wp_head(); ?>
</head>
<body>
  <!-- React 挂载点 -->
  <div id="root"></div>

  <!-- 引入构建后的 React JS -->
  <script type="module" src="<?php echo get_template_directory_uri(); ?>/assets/js/index-DP14Djbd.js" crossorigin></script>

  <?php wp_footer(); ?>
</body>
</html>