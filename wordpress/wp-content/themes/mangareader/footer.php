</div>
</div>
<div id="footer">
	<footer id="colophon" class="site-footer" itemscope="itemscope" itemtype="http://schema.org/WPFooter"
		role="contentinfo">
		<?php $footermenu = wp_nav_menu(array('theme_location' => 'footer', 'fallback_cb' => '', 'echo' => '0'));
		if ($footermenu) {
			echo '<div class="footermenu">' . $footermenu . '</div>';
		} ?>
		<div class="footercopyright">
			<h1>Descarga nuestra app</h1>
			<div class="appdownload">
				<img src="/wp-content/themes/mangareader/assets/images/playstore.png" />
				<img src="/wp-content/themes/mangareader/assets/images/appstore.png" />
			</div>
			<div class="copyright">
				<div class="txt">
					<p><?php echo GOV_lang::get('footer_disclaimer'); ?></p>
				</div>
			</div>
			<div class="disclaimers">
				<a href="https://catharsisworld.com/politica-de-privacidad
">• Politica de privacidad</a>
				<a href="https://catharsisworld.com/terminos-y-condiciones
">• Terminos y Condiciones</a>
				<a href="https://catharsisworld.com/descargo-de-responsabilidad">• Descargo de responsabilidad</a>
				<a href="https://catharsisworld.com/politica-de-cookies">• Politica de cookies</a>
				<a href="https://catharsisworld.com/acuerdo-de-licencia-de-usuario-final">• Acuerdo de licencia de
					usuario final</a>
				<a href="https://catharsisworld.com/contactanos">• Contactanos!</a>
				<br />
				<a href="/" style="">Made With ❤️ by NeruDev</a>
			</div>
		</div>
	</footer>
</div>
</div>
<?php wp_footer(); ?>
</body>

</html>