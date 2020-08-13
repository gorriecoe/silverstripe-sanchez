<% if Categories %>
	<ul class="aside__menu menu vertical">
		<% loop Categories %>
			<li>
				<a href="{$Link}" class="wow wow-fade-in">
					{$Title}
				</a>
			</li>
		<% end_loop %>
	</ul>
<% end_if %>
