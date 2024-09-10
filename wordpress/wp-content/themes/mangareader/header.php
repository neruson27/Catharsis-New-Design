<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RDNTJV0JX3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RDNTJV0JX3');
</script>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width" />
	<?php $metac = get_option('themecolor'); if($metac==''){$metac='#3367d6';} ?>
	<meta name="theme-color" content="<?php echo $metac; ?>">
	<meta name="msapplication-navbutton-color" content="<?php echo $metac; ?>">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="<?php echo $metac; ?>">
<?php wp_head(); ?>
</head>
<body class="<?php echo get_option('defaulttheme'); ?><?php if(is_singular('post')){ echo ' black'; } ?>" itemscope="itemscope" itemtype="http://schema.org/WebPage"><?php tsia_after_body(); ?>

<div class="mainholder<?php if(get_option('tsrtl')=='1'){echo ' rtl';}?>">
<?php 
	$headerstyle = get_option('styleheader'); if($headerstyle==''){ $headerstyle = '1'; }
	get_template_part('template-parts/header/style',$headerstyle);
?>

<?php if(is_home() && ! get_query_var( 'themesia-mangalist' )){ get_template_part('template-parts/home/home','slider'); } ?>

<div id="content"<?php if(is_singular('post')){ echo ' class="readercontent"'; } else if(is_singular('manga')){ if(get_option('styleseries')=='3'){ $servar = 'mangatere';} else { $servar = 'mangastyle';} echo ' class="manga-info '.$servar.'"'; } ?>>
	
<?php if(!is_front_page() || is_home()) { if(!is_singular('manga')){ $kln = get_option('toprec'); if($kln) { ?><div class="blox mlb kln"><?php echo $kln; ?></div><br/><?php } } } ?>

<?php echo do_shortcode('[smartslider3 slider="1"]');?>	
	
<div class="wrapper" style="margin-top: 3rem;">
