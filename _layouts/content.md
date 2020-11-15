---

---

<!DOCTYPE html>
<html lang="id">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
		<meta property="og:url" content="{{ site.url }}{{ page.url }}">
		<meta property="og:locale" content="id_ID">
		<meta property="og:type" content="website" />
		<meta property="og:title" content="{{ site.title }} | {{ page.title }}">
		<meta name="description" content="{{ site.description | truncate: 160 }}">
		<meta property="og:description" content="{{ site.description | truncate: 160 }}">
		<meta property="og:site.name" content="{{ site.title }}">
		<meta property="og:image" content="{{ site.url }}/assets/images/home/perumahan-subang-jaya-lestari-baru-1.jpg">
		<link rel="shortcut icon" href="{{ site.base_url }}/favicon.ico">
		<link rel="stylesheet" type="text/css" href="{{ site.base_url }}/assets/css/main.css">
		<link rel="stylesheet" type="text/css" href="{{ site.base_url }}/assets/css/content.css">
		{% if page.extra_css %}
			{% for stylesheet in page.extra_css %}
				<link rel="stylesheet" type="text/css" href="{{ site.base_url }}/assets/css/{{ stylesheet }}.css">
			{% endfor %}
		{% endif %}
		<title> {{ site.title }} | {{ page.title }} </title>
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZK738RKC5P"></script>
		<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-ZK738RKC5P');
		</script>
	</head>
	<body>
		<div class="outer-container">
			<div class="container">
				{% include header.md %}
					<div class="content-top">
						<h1>{{ page.title }}</h1>
					</div>
						<div class="content">
							{{ content }}
						</div>
					</div>
			</div>
			{% include footer.md %}
		</div>
	<script type="text/javascript" src="{{ site.base_url }}/assets/js/dropdown-navbar.js"></script>
	<script type="text/javascript" src="{{ site.base_url }}/assets/js/responsive-navbar.js"></script>
	{% if page.js_file %}
		{% for js in page.js_file %}
			<script type="text/javascript" src="{{ site.base_url }}/assets/js/{{ js }}.js"></script>
		{% endfor %}
	{% endif %}
	</body>
</html>