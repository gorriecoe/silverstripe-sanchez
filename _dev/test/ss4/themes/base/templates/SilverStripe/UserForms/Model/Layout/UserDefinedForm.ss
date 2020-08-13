<% if Content %>
	<div class="section {$Class} {$DisplayClasses} light-grey">
		<% if Title %>
			<div class="title-container">
				<div class="title-container__left"></div>
				<div class="title-container__middle grid-container">
					{$PageTitle.setPrefix('title-container').setClass('title')}
					<div class="curve blue show-for-xlarge"></div>
				</div>
			</div>
		<% end_if %>
		<div class="body-container">
			<div class="grid-container">
				<div class="grid-x">
					<div class="cell large-9 wow wow-fade-in">
						{$Breadcrumbs}
						{$div($Content).setClass('content')}
					</div>
				</div>
			</div>
		</div>
	</div>
<% else %>
	<div class="section title-section blue small-spacing">
		<div class="grid-container">
			<div class="grid-x">
				<div class="cell wow wow-fade-in">
					{$PageTitle.setPrefix('title-section').setClass('title')}
				</div>
			</div>
		</div>
	</div>
<% end_if %>
<div class="section small-spacing">
	<div class="grid-container">
		<div class="grid-x grid-margin-x align-justify">
			<% if SecondaryContent %>
				<div class="cell medium-5">
					<div class="section__content">
						{$SecondaryContent}
					</div>
				</div>
			<% end_if %>
			<div class="cell medium-6">
				{$Form}
			</div>
		</div>
	</div>
</div>
{$Area}
