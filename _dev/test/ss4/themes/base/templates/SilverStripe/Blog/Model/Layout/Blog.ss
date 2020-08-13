<div class="section section--padding-x bg-secondary text-reverse">
	<div class="grid-container">
		<div class="grid-x">
			<div class="cell text-{$TextAlign}">
				<h1>
					<% if $ArchiveYear %>
						<%t Blog.Archive 'Archive' %>:
						<% if $ArchiveDay %>
							$ArchiveDate.Nice
						<% else_if $ArchiveMonth %>
							$ArchiveDate.format('F, Y')
						<% else %>
							$ArchiveDate.format('Y')
						<% end_if %>
					<% else_if $CurrentTag %>
						<%t Blog.Tag 'Tag' %>: $CurrentTag.Title
					<% else_if $CurrentCategory %>
						<%t Blog.Category 'Category' %>: $CurrentCategory.Title
					<% else %>
						$Title
					<% end_if %>
				</h1>
			</div>
		</div>
	</div>
</div>
<div id="blog-list" class="section section--margin-x">
	<div class="grid-container">
		<div class="grid-x">
			<div class="cell typography text-{$TextAlign}">
				<% if PaginatedList.Exists %>
					<div class="grid-x grid-margin-x grid-margin-y">
						<% loop PaginatedList %>
							<div class="cell small-12 medium-6 large-4 blog-list__item">
								<% include PostSummary %>
							</div>
						<% end_loop %>
					</div>
				<% else %>
					<p><%t Blog.NoPosts 'There are no posts' %></p>
				<% end_if %>

				<% with $PaginatedList %>
					<% include Pagination %>
				<% end_with %>
			</div>
		</div>
	</div>
</div>
