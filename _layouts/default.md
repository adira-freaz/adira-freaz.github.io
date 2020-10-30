---

---

<!DOCTYPE html>
<html lang="id">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta property="og:locale" content="id_ID">
		<meta property="og:type" content="website" />
		<meta property="og:title" content="{{ site.title }} | {{ page.title }}">
		<meta name="description" content="{{ site.description | truncate: 160 }}">
		<meta property="og:description" content="{{ site.description }}">
		<meta property="og:site.name" content="{{ site.title }}">
		<meta property="og:image" content="{{ site.url }}/assets/images/home/perumahan-subang-jaya-lestari-baru-1.jpg">
		<link rel="shortcut icon" href="{{ site.base_url }}/favicon.ico">
		<link rel="stylesheet" type="text/css" href="{{ site.base_url }}/assets/css/main.css">
		{% if page.extra_css %}
			{% for stylesheet in page.extra_css %}
				<link rel="stylesheet" type="text/css" href="{{ site.base_url }}/assets/css/{{ stylesheet }}.css">
			{% endfor %}
		{% endif %}
		<title> {{ site.title }} | {{ page.title }} </title>
	</head>
	<body>
		<div class="outer-container">
			<div class="container">
				{% include header.md %}
					{{ content }}
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