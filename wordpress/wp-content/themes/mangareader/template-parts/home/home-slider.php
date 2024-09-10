<head class="class">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
</head>

<script type="module">
	import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

	var swiper = new Swiper(".mySwiper", {
		effect: "coverflow",
		grabCursor: true,
		loop: true,
		centeredSlides: true,
		slidesPerView: "3",
		coverflowEffect: {
			rotate: 0,
			stretch: -40,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
</script>



<!-- Slider main container -->
<div class="swiper mySwiper">
	<div class="swiper-wrapper">
		<div class="swiper-slide">
			<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
		</div>
		<div class="swiper-slide">
			<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
		</div>
		<div class="swiper-slide">
			<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
		</div>
		<div class="swiper-slide">
			<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
		</div>
		<div class="swiper-slide">
			<img src="https://swiperjs.com/demos/images/nature-5.jpg" />
		</div>
		<div class="swiper-slide">
			<img src="https://swiperjs.com/demos/images/nature-6.jpg" />
		</div>
		<div class="swiper-slide">
			<img src="https://swiperjs.com/demos/images/nature-7.jpg" />
		</div>
		<div class="swiper-slide">
			<img src="https://swiperjs.com/demos/images/nature-8.jpg" />
		</div>
	</div>
	<div class="swiper-button-prev"></div>
	<div class="swiper-button-next"></div>
</div>

<?php
$gpt = get_option('homegenre');
if ($gpt) {
	$slugseries = tsrs_get_manga_slug();
	if (!$slugseries) {
		$slugseries = 'manga';
	} ?>
	<div class="home-genres gennom<?php echo $sliderstyle; ?>">
		<span class="genre-listx">
			<?php
			$taxonomy = 'genres';
			$tax_terms = get_terms($taxonomy, 'number=8');
			foreach ($tax_terms as $tax_term) {
				echo '<a href="' . esc_attr(get_term_link($tax_term, $taxonomy)) . '" title="' . sprintf(__("View all series in %s"), $tax_term->name) . '" ' . '>' . $tax_term->name . '</a>';
			}
			?>
		</span>
		<span class="alman">
			<a
				href="<?php echo home_url(); ?>/<?php echo $slugseries; ?>"><?php echo GOV_lang::get('home_genre_label') ?></a>
		</span>
	</div>
<?php }