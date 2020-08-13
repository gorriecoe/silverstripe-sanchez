<p class="blog-post-meta">
	<% if Categories.exists %>
		<%t SilverStripe\\Blog\\Model\\Blog.PostedIn "Posted in" %>
		<% loop Categories %>
			<a href="{$Link}">
				{$Title}
			</a>
			<% if not Last %>, <% else %>;<% end_if %>
		<% end_loop %>
	<% end_if %>

	<% if $Tags.exists %>
		<%t SilverStripe\\Blog\\Model\\Blog.Tagged "Tagged" %>
		<% loop $Tags %>
			<a href="{$Link}">
				{$Title}
			</a>
			<% if not Last %>, <% else %>;<% end_if %>
		<% end_loop %>
	<% end_if %>

	<% if Comments.exists %>
		<a href="{$Link}#comments-holder">
			<%t SilverStripe\\Blog\\Model\\Blog.Comments "Comments" %>
			{$Comments.count}
		</a>;
	<% end_if %>

	<%t SilverStripe\\Blog\\Model\\Blog.Posted "Posted" %>
	<a href="$MonthlyArchiveLink">
		{$PublishDate.ago}
	</a>,&nbsp;

	<% if $MinutesToRead < 1 %>
		<%t SilverStripe\\Blog\\Model\\Blog.LessThanAMinuteToRead "Less than a minute to read" %>
	<% else %>
		{$MinutesToRead} <%t SilverStripe\\Blog\\Model\\Blog.MinutesToRead "Minutes to read" %>
	<% end_if %>
</p>
