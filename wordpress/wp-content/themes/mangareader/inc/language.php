<?php defined("ABSPATH") || die("!");
function gov_language(){
	return [
		//general
		"comment_label" => "Comment",
		"recommended_series" => "Related Series",
		"wpb_get_post_views_label" => "{{count}} Views",
		"view_all_label" => "View All",
		"previous" => "Previous",
		"next" => "Next",
		"surprise_me_label" => "Surprise Me!",
		"ago" => "ago",
		//home 
		"home_hot_series_update_label" => "Popular Today",
		"home_project_release_label" => "Project Update",
		"home_blog_release_label" => "Blog",
		"home_latest_release_label" => "Latest Update",
		"mini_ch" => "Ch. ",
		//home slider
		"home_slider_trending_label" => "{{blogname}} <b>Trending</b> This Week",
		"home_slider_summary_label" => "Summary",
		"home_recommended" => "Recommendation",
		//bookmark
		"bookmark_head" => "You can save a list of manga titles here up to {{max}}. The list approves based on the latest update date. The list of manga is stored in a browser that you can use right now.",
		"bookmark_no_item" => "YOU HAVE NO BOOKMARK, NOTHING TO SHOW",
		"delete" =>  "Delete",

		//chapter single page 
		"chapter_to_chapter_list_link" => 'All chapters are in <a href="{{link}}">{{text}}</a>',
		"chapter_before_readerarea_text" => 'Read the latest manga <b> {{chapter_title}} </b> at <b> {{blogname}} </b>. Manga <b> {{manga_title}} </b> is always updated at <b> {{blogname}} </b>. Dont forget to read the other manga updates. A list of manga collections <b> {{blogname}} </b> is in the Manga List menu.',
		//chapter single page dropdown chapter selection
		"chapter_drop_down_select_chapter_label" => "Select Chapter",

		"chapter_download_label" => "Download",
		"chapter_nav_previous_label" => "Prev",
		"chapter_nav_next_label" => "Next",
		"chapter_after_readerarea_tags" => 'read manga {{chapter_title}}, comic {{chapter_title}}, read {{chapter_title}} online, {{chapter_title}} chapter, {{chapter_title}} chapter, {{chapter_title}} high quality, {{chapter_title}} manga scan',
		"chapter_after_readerarea_novel_tags" => 'read novel {{chapter_title}}, novel {{chapter_title}}, read {{chapter_title}} online, {{chapter_title}} chapter, {{chapter_title}} high quality, {{chapter_title}} light novel',
		//chapter single page, reader area 
		"chapter_readerarea_no_images" => '<center><h4>NO IMAGE YET</h4></center>',
		"chapter_readerarea_default_server_label" => "Server 1",

		//series single page
		"series_info_alt_label" => "Alternative",
		"series_info_synopsis_label" => 'Synopsis {{post_title}}',
		"series_info_genres_label" => "Genres",
		"series_info_author_label" => "Author",
		"series_info_artist_label" => "Artist",
		"series_info_posted_on_label" => "Posted On",
		"series_info_status_label" => "Status",
		"series_info_released_label" => "Released",
		"series_info_type_label" => "Type",
		"series_info_posted_by_label" => "Posted By",
		"series_info_updated_on_label" => "Updated On",
		"series_info_serialization_label" => "Serialization",
		"series_info_rating_label" => "Rating {{rating}}",
		"series_bottom_keyword_text" => '<strong>Keywords: </strong> <a href="{{link}}">read {{post_title}}</a>, <a href="{{link}}">{{post_title}} english</a>, <a href="{{link}}">{{post_title}} eng sub</a>, <a href="{{link}}">download {{post_title}} eng sub</a>, <a href="{{link}}">streaming {{post_title}}</a>',
		"series_bookmarked_by" => "Followed by {{count}} people",
		"series_keywords_text" => "read {{manga_title}}, {{manga_title}} english, {{manga_title}} eng, download {{manga_title}} eng, read {{manga_title}} online",
		"series_nsfw" => "Warning, the series titled \"{{manga_title}}\" may contain violence, blood or sexual content that is not appropriate for minors.",
		"series_gallery_label" => "Gallery {{manga_title}}",
		"series_chapter_list" => "Chapter {{manga_title}}",
		"series_read_button_label" => "Read",
		"widget_chapter_label" => "Chapter",
		"search_chapter_placeholder" => "Search Chapter. Example: 25 or 178",
		"series_chapter_number" => "Chapter",
		"series_chapter_date" => "Date",
		"series_chapter_download" => "Download",
		"series_first_chapter_label" => "First Chapter",
		"series_new_chapter_label" => "New Chapter",
		"series_chapter_search_no_result" => "No Chapter Found",

		//blog 
		"blog_meta" => "Posted by {{author}} at {{time}}",

		//advanced search series
		"filter_all_label" => "All",
		"filter_default_label" => "Default",
		"advanced_search_manga_list_label" => "Manga Lists",
		"advanced_search_filter_button_label" => "Filter",
		"advanced_search_series_title_label" => "Title",
		"advanced_search_series_year_label" => "Year",
		"advanced_search_series_status_label" => "Status",
		"advanced_search_series_status_all_label" => "All",
		"advanced_search_series_status_ongoing_label" => "Ongoing",
		"advanced_search_series_status_completed_label" => "Completed",
		"advanced_search_series_type_label" => "Type",
		"advanced_search_series_type_all_label" => "All",
		"advanced_search_series_order_by_label" => "Order by",
		"advanced_search_series_order_by_az_label" => "A-Z",
		"advanced_search_series_order_by_za_label" => "Z-A",
		"advanced_search_series_order_by_latest_update_label" => "Update",
		"advanced_search_series_order_by_latest_added_label" => "Added",
		"advanced_search_series_order_by_popular_label" => "Popular",
		"advanced_search_series_genre_label" => "Genre",
		"advanced_search_series_show_genre_label" => "Show Genre",
		"advanced_search_series_text_mode_label" => "Text Mode",
		"advanced_search_series_image_mode_label" => "Image Mode",
		"advanced_search_series_search_button_label" => "Search",
		
		//widget
		"widget_popular_weekly" => "Weekly",
		"widget_popular_monthly" => "Monthly",
		"widget_popular_alltime" => "All",

		//footer 
		"footer_az_heading" => "A-Z LIST",
		"footer_az_text" => "Searching series order by alphabet name A to Z.",
		"footer_disclaimer" => "All the comics on this website are only previews of the original comics, there may be many language errors, character names, and story lines. For the original version, please buy the comic if it's available in your city.",
		
		"search_page_title" => "Search '{{title}}'",
		"search_page_notfound" => "Not Found",
		"search_placeholder" => "Search",
		"series_info_keywords_label" => "Keywords: ",
		"select_chapter_label" => "Chapter",
		"home_genre_label" => "All Manga",
		"thumbnail_color_label" => "Color",
		"darkmode_label" => "Dark?",
		"related_blog_label" => "Recommendations",
		"reading_mode_full_label" => "Full Page",
		"reading_mode_single_label" => "Single Page",
		"reading_nav_next_label" => "Next",
		"reading_nav_prev_label" => "Prev",
		"readerarea_tags_label" => "Tags:",
		"thumbnail_novel_label" => "Novel",
		"seriestu_first_chapter_label" => "First:",
		"seriestu_new_chapter_label" => "Latest:",
		
		//2.1.1
		"warning_enter_label" => "Enter",
		"warning_exit_label" => "Exit",
		"widget_genre_title_view_label" => "View all series in",
		"series_info_additional_label" => "Additional Content",
		'series_history_title' => "Latest Reading",
		'series_history_prefixAgo' => "",
		'series_history_prefixFromNow' => "",
		'series_history_suffixAgo' => "ago",
		'series_history_suffixFromNow' => "from now",
		'series_history_seconds' => "less than a minute",
		'series_history_minute' => "about a minute",
		'series_history_minutes' => "{{num}} minutes",
		'series_history_hour' => "about an hour",
		'series_history_hours' => "about {{num}} hours",
		'series_history_day' => "a day",
		'series_history_days' => "{{num}} days",
		'series_history_month' => "about a month",
		'series_history_months' => "{{num}} months",
		'series_history_year' => "about a year",
		'series_history_years' => "{{num}} years",
		
		//2.1.2
		'bookmark_disabled' => "BOOKMARK FEATURE IS DISABLED",
		
		//2.1.4
		"series_nsfw_warning" => "Content Warning",
		"slider_score" => "Score",
		"slider_start_reading" => "Start Reading",
		"view_all_bottom_label" => "View All {{title}}",
		
		//2.1.5
		"series_info_views_label" => "Views",
		
		//2.1.6
		"front_homepage_label" => "Go to Homepage",
		"views_thousand_label" => "K",
		"views_million_label" => "M",
		"views_billion_label" => "B",
		"views_trillion_label" => "T",
		"views_quadrillion_label" => "Q",

		//2.1.7
		"series_archive_page_no_result" => "-- No Post Found --",
	];
};