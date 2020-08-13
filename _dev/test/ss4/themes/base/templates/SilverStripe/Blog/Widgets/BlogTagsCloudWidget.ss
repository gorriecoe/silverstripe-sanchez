<% if Tags %>
	<ul class="blogTagCloud">
		<% loop Tags %>
			<li>
				<a href="$Link" class="wow wow-fade-in">
					<span class="text tagCount{$NormalizedTag}">
						{$TagName}
					</span>
				</a>
			</li>
		<% end_loop %>
	</ul>
<% end_if %>
