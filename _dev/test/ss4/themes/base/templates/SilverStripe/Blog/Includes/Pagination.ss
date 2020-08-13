<%-- NOTE: Before including this, you will need to wrap the include in a with block  --%>

<% if MoreThanOnePage %>
	<nav aria-label="Pagination">
		<ul class="pagination">
			<% if NotFirstPage %>
				<li class="pagination-previous">
					<a href="{$PrevLink}" aria-label="Previous page">Previous <span class="show-for-sr">page</span></a>
				</li>
			<% else %>
				<li class="pagination-previous disabled">
					Previous <span class="show-for-sr">page</span>
				</li>
			<% end_if %>

			<% loop PaginationSummary(4) %>
				<% if CurrentBool %>
					<li class="current">
						<span class="show-for-sr">You're on page</span> {$PageNum}
					</li>
				<% else %>
					<% if $Link %>
						<li>
							<a href="{$Link}" aria-label="Page {$PageNum}">{$PageNum}</a>
						</li>
					<% else %>
						<li class="ellipsis" aria-hidden="true"></li>
					<% end_if %>
				<% end_if %>
			<% end_loop %>

			<% if NotLastPage %>
				<li class="pagination-next">
					<a href="{$NextLink}" aria-label="Next page">Next <span class="show-for-sr">page</span></a>
				</li>
			<% else %>
				<li class="pagination-next disabled">
					Next <span class="show-for-sr">page</span>
				</li>
			<% end_if %>
		</ul>
	</nav>
<% end_if %>
