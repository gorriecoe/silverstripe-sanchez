<% if FeaturedImage %>
	<% include BannerSection Image=$FeaturedImage,Title=$PageTitle,Content='',Class='banner-section' %>
<% end_if %>
<div class="section--margin-x">
	<div class="grid-container">
		<div class="grid-x grid-margin-x grid-margin-y align-justify">
			<div class="cell medium-7 typography">
				<% if not FeaturedImage %>{$h1($Title)}<% end_if %>
				<p><strong>$Date.Format(d F Y)</strong></p>
				{$Content}
				<a href="{$Parent.Link}" class="btn btn--primary btn--margin">Back to {$Parent.MenuTitle}</a>
			</div>
			<div class="cell medium-4">
				<div class="typography">
					<h4>{$Parent.MenuTitle}</h4>
				</div>
				<ul class="secondary-nav secondary-nav--vertical">
					<% loop Parent.AllChildren.Sort(ID DESC).Limit(10) %>
					<li class="secondary-nav__item">
						<a href="{$Link}" class="secondary-nav__link secondary-nav__link--{$LinkingMode}"><span>{$MenuTitle}</span></a>
					</li>
					<% end_loop %>
				</ul>
			</div>
		</div>
	</div>
</div>
