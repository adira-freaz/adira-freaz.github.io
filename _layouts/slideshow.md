---

---
{% seo title=false %}
<!DOCTYPE html>
<html lang="id">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="{{ site.description }}">
		<link rel="stylesheet" type="text/css" href="{{ site.base_url }}/assets/css/main.css">
		{% if page.extra_css %}
			{% for stylesheet in page.extra_css %}
				<link rel="stylesheet" type="text/css" href="{{ site.base_url }}/assets/css/{{ stylesheet }}.css">
			{% endfor %}
		{% endif %}
		<title> {{ site.title }} - {{ page.title }} </title>
	</head>
	<body>
		<div class="outer-container">
			<div class="container">
				{% include header.md %}
				{{ content }}
			</div>
			{% include footer.md %}
		</div>
	{% if page.js_file %}
		{% for js in page.js_file %}
			<script type="text/javascript" src="{{ site.base_url }}/assets/js/{{ js }}.js"></script>
			<script type="text/javascript" src="{{ site.base_url }}/assets/js/responsive-navbar.js"></script>
		{% endfor %}
	{% endif %}
	<script type="text/javascript" src="{{ site.base_url }}/assets/js/dropdown-navbar.js"></script>
	</body>
</html>