<div class="header">
	<div class="navbar" id="topnav">
		<div class="topnav-wrapper">
			<a href="{{ site.base_url }}/"><img src="{{ site.base_url }}/assets/images/subang-jaya-lestari-baru.png" alt="home" class="img-header" width="443.91" height="5vh"></a>
			<a href="javascript:void(0);" class="icon" onclick="rNavbar(); aMenu(this)">
				<div class="bar1"></div>
				<div class="bar2"></div>
				<div class="bar3"></div>
			</a>
		</div>
		<div class="dropdown" onclick="myDropDown(this)">
			<a href="javascript:void(0);" class="li">
				<div>About</div>
				<div class="triangle-down" id="triangle"></div>
			</a>
			<div class="dropdown-content">
				{% for navbar in site.navbar %}
					{% if navbar.path contains '/about/' %}
						<a href="{{ site.base_url }}{{ navbar.url }}">{{ navbar.title }}</a>
					{% endif %}
				{% endfor %}
			</div>
		</div>
		<div class="dropdown" onclick="myDropDown(this)">
			<a href="javascript:void(0);" class="li">
				<div>Residential</div>
				<div class="triangle-down" id="triangle"></div>
			</a>
			<div class="dropdown-content">
				{% for navbar in site.navbar %}
					{% if navbar.path contains '/residential/' %}
						<a href="{{ site.base_url }}{{ navbar.url }}">{{ navbar.title }}</a>
					{% endif %}
				{% endfor %}
			</div>
		</div>
		{% for navbar in site.navbar %}
			{% unless navbar.path contains '/about/' or navbar.path contains '/residential/' %}
				<div class="li">
					<a href="{{ site.base_url }}{{ navbar.url }}">{{ navbar.title }}</a>
				</div>
			{% endunless %}
		{% endfor %}
	</div>
</div>