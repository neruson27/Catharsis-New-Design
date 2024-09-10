<?php 
defined("ABSPATH") || die("!") ;
get_header(); ?>

<?php $images = rwmb_meta( 'ero_cover','type=image&size=full' ); ?>
		<div class="bigcover">
				<?php
				if ( !empty( $images ) ) {
					foreach ( $images as $image ) { ?>
						<div class="bigbanner" style="background-image: url('<?php echo esc_url( $image['url'] ); ?>');"></div>
					<?php }
				} else { ?>
						<div class="bigbanner img-blur" style="background-image: url('<?php echo get_the_post_thumbnail_url(); ?>');"></div>
				<?php }
				?>
		</div>


<?php 
	$seriesstyle = get_option('styleseries'); if($seriesstyle==''){ $seriesstyle = '1'; }
	get_template_part('template-parts/series/style',$seriesstyle);
?>

<script>
<?php wp_reset_query(); ?>
ts_dynamic_ajax_view(<?php echo get_the_ID(); ?>)
.then(function(resp){
	if ( ! resp) return;
	if ("views" in resp === false) return;
	var view_count_element = jQuery('.ts-views-count');
	if (view_count_element.length) view_count_element.html(resp.views);
});
</script>
<?php get_footer(); ?>