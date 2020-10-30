---

---
{% seo title=false %}
<!DOCTYPE html>
<html lang="id">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="{{ site.description }}">
		<meta lang="id">
		<link rel="shortcut icon" href="{{ site.base-url }}/favicon.ico">
		<link rel="stylesheet" type="text/css" href="{{ site.base_url }}/assets/css/main.css">
		<link rel="stylesheet" type="text/css" href="{{ site.base_url }}/assets/css/content.css">
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