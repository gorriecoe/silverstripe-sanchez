<div class="blog-list__summary">
	<% if FeaturedImage %>
	<a href="$Link" aria-label="$Title">
		<img class="blog-list__image" data-interchange="[$FeaturedImage.FocusFill(600,540).Link, small], [$FeaturedImage.FocusFill(1000,680).Link, large]" />
	</a>
	<% end_if %>
	<a href="$Link" aria-label="$Title">
		<h2><% if $MenuTitle %>$MenuTitle<% else %>$Title<% end_if %></h2>
	</a>
	<p><strong>$Date.Format(d F Y)</strong></p>
	<p>
		<% if $Summary %>
			$Summary
		<% else %>
			<p>$Excerpt</p>
		<% end_if %>
	</p>
	<a class="btn btn--primary" href="$Link" aria-label="Read now">Read now</a>
</div>
