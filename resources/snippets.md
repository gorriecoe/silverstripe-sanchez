# Snippets

## Absolute Link

### Conditions

#### Prefix or Autocomplete


absolutelink-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
AbsoluteLink${0}
```

## Add extra class

### Conditions

#### Prefix or Autocomplete


addextraclass-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
addExtraClass('${1}')${0}
```

## addComponent

### Conditions

#### Prefix or Autocomplete


addcomponent-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
addComponent(${1})${0}
```

## addFieldsToTab

### Conditions

#### Prefix or Autocomplete


addfieldstotab-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
addFieldsToTab(
	'${1:Root.Main}',
	[
		${0}
	]
);
```

## addFieldToTab

### Conditions

#### Prefix or Autocomplete


addfieldtotab-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
addFieldToTab(
	'${1:Root.Main}',
	${0},
	'${3:insertBefore}'
);
```

## AllChildren

### Conditions

#### Prefix or Autocomplete


allchildren-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
AllChildren${0}
```

## Allowed actions

### Conditions

#### Prefix or Autocomplete


allowedactions-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Defines methods that can be called directly
 * @var array
 */

```

```
private static \$allowed_actions = [
	'${1}' => ${2:true}
];${0}
```

## Allowed children

### Conditions

#### Prefix or Autocomplete


allowedchildren-ss-cms-3.0+

#### Composer


 - silverstripe/cms

#### Language


 - php

### Content

```
/**
 * Defines the allowed child page types
 * @var array
 */

```

```
private static \$allowed_children = [
	'${1}'
];${0}
```

## Base Tag

### Conditions

#### Prefix or Autocomplete


basetag-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
<% base_tag %>${0}
```

## Belongs many many relationships

### Conditions

#### Prefix or Autocomplete


belongsmanymanyrelationships-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Belongs_many_many relationship
 * @var array
 */

```

```
private static \$belongs_many_many = [
	'${1}' => '${2}',
];${0}
```

## Belongs to relationships

### Conditions

#### Prefix or Autocomplete


belongstorelationships-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Belongs_to relationship
 * @var array
 */

```

```
private static \$belongs_to = [
	'${1}' => '${2}',
];
${0}
```

## BetterButtonCustomAction

### Conditions

#### Prefix or Autocomplete


betterbuttoncustomaction-ss-betterbuttons-0.0+

#### Composer


 - unclecheese/betterbuttons

#### Language


 - php

### Content

```
BetterButtonCustomAction::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## BetterButtonNestedForm

### Conditions

#### Prefix or Autocomplete


betterbuttonnestedform-ss-betterbuttons-0.0+

#### Composer


 - unclecheese/betterbuttons

#### Language


 - php

### Content

```
BetterButtonNestedForm::create(
	'${1:name}',
	'${2:${1:title}}',
	FieldList::create(
		${3}
	)
)${0}
```

## Breadcrumbs

### Conditions

#### Prefix or Autocomplete


breadcrumbs-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
Breadcrumbs${0}
```

## Can be root

### Conditions

#### Prefix or Autocomplete


canberoot-ss-cms-3.0+

#### Composer


 - silverstripe/cms

#### Language


 - php

### Content

```
/**
 * Defines whether a page can be in the root of the site tree
 * @var boolean
 */

```

```
private static $can_be_root = ${1:false};${0}
```

## Can create permissions

### Conditions

#### Prefix or Autocomplete


cancreatepermissions-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * DataObject create permissions
 * @param Member \$member
 * @param array \$context Additional context-specific data which might
 * affect whether (or where) this object could be created.
 * @return boolean
 */

```

```
public function canCreate(\$member = null, \$context = [])
{
	return ${1};
}${0}
```

## Can create permissions

### Conditions

#### Prefix or Autocomplete


cancreatepermissions-ss-framework--4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * DataObject create permissions
 * @param Member \$member
 * @return boolean
 */

```

```
public function canCreate(\$member = null)
{
	return ${1};
}${0}
```

## Can delete permissions

### Conditions

#### Prefix or Autocomplete


candeletepermissions-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * DataObject delete permissions
 * @param Member \$member
 * @return boolean
 */

```

```
public function canDelete(\$member = null)
{
	return ${1};
}${0}
```

## Can edit permissions

### Conditions

#### Prefix or Autocomplete


caneditpermissions-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * DataObject edit permissions
 * @param Member \$member
 * @return boolean
 */

```

```
public function canEdit(\$member = null)
{
	return ${1};
}${0}
```

## Can view permissions

### Conditions

#### Prefix or Autocomplete


canviewpermissions-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * DataObject view permissions
 * @param Member \$member
 * @return boolean
 */

```

```
public function canView(\$member = null)
{
	return ${1};
}${0}
```

## Casting

### Conditions

#### Prefix or Autocomplete


casting-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Ensures that the methods are wrapped in the correct type and
 * values are safely escaped while rendering in the template.
 * @var array
 */

```

```
private static \$casting = [
	'${1}' => '${2}'
];${0}
```

## CheckboxField

### Conditions

#### Prefix or Autocomplete


checkboxfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\CheckboxField

```

```
CheckboxField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## CheckboxField

### Conditions

#### Prefix or Autocomplete


checkboxfield-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
CheckboxField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## CheckboxField readonly

### Conditions

#### Prefix or Autocomplete


checkboxfieldreadonly-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\CheckboxField_Readonly

```

```
CheckboxField_Readonly::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## CheckboxField readonly

### Conditions

#### Prefix or Autocomplete


checkboxfieldreadonly-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
CheckboxField_Readonly::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## CheckboxSetField

### Conditions

#### Prefix or Autocomplete


checkboxsetfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\CheckboxSetField

```

```
CheckboxSetField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

## CheckboxSetField

### Conditions

#### Prefix or Autocomplete


checkboxsetfield-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
CheckboxSetField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

## Children

### Conditions

#### Prefix or Autocomplete


children-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
Children${0}
```

## ChildrenOf

### Conditions

#### Prefix or Autocomplete


childrenof-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
ChildrenOf(${1:page-url})${0}
```

## Class BuildTask

### Conditions

#### Prefix or Autocomplete


classbuildtask-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Dev\BuildTask

```

```
/**
 * ${3:Description}
 * 
 * @package silverstripe
 * @subpackage ${4:mysite}
 */

```

```
class ${1} extends BuildTask
{
	/**
	 * @var bool $enabled If set to FALSE, keep it from showing in the list
	 * and from being executable through URL or CLI.
	 */
	protected $enabled = true;
	
	/**
	 * @var string $title Shown in the overview on the TaskRunner
	 * HTML or CLI interface. Should be short and concise, no HTML allowed.
	 */
	protected $title = '${2:${1}}';
	
	/**
	 * @var string $description Describe the implications the task has,
	 * and the changes it makes. Accepts HTML formatting.
	 */
	protected $description = '${3}';

	/**
	 * This method called via the TaskRunner
	 *
	 * @param SS_HTTPRequest $request
	 */
	public function run($request)
	{
		${0}
	}
}
```

## Class BuildTask

### Conditions

#### Prefix or Autocomplete


classbuildtask-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * ${3:Description}
 * 
 * @package silverstripe
 * @subpackage ${4:mysite}
 */

```

```
class ${1} extends BuildTask
{
	/**
	 * @var bool $enabled If set to FALSE, keep it from showing in the list
	 * and from being executable through URL or CLI.
	 */
	protected $enabled = true;
	
	/**
	 * @var string $title Shown in the overview on the TaskRunner
	 * HTML or CLI interface. Should be short and concise, no HTML allowed.
	 */
	protected $title = '${2:${1}}';
	
	/**
	 * @var string $description Describe the implications the task has,
	 * and the changes it makes. Accepts HTML formatting.
	 */
	protected $description = '${3}';

	/**
	 * This method called via the TaskRunner
	 *
	 * @param SS_HTTPRequest $request
	 */
	public function run($request)
	{
		${0}
	}
}
```

## Class DataObject

### Conditions

#### Prefix or Autocomplete


classdataobject-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\ORM\DataObject

```

```
/**
 * ${3:Description}
 * 
 * @package silverstripe
 * @subpackage ${4:mysite}
 */

```

```
class ${1} extends ${2:DataObject}
{
	${0}
}
```

## Class DataObject

### Conditions

#### Prefix or Autocomplete


classdataobject-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * ${3:Description}
 * 
 * @package silverstripe
 * @subpackage ${4:mysite}
 */

```

```
class ${1} extends ${2:DataObject}
{
	${0}
}
```

## Class Model Admin

### Conditions

#### Prefix or Autocomplete


classmodeladmin-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Admin\ModelAdmin

```

```
/**
 * ${5:Description}
 * 
 * @package silverstripe
 * @subpackage ${6:mysite}
 */

```

```
class ${1}Admin extends ModelAdmin
{
	/**
	 * Managed data objects for CMS
	 * @var array
	 */
	private static \$managed_models = [
		'${2}'
	];

	/**
	 * URL Path for CMS
	 * @var string
	 */
	private static \$url_segment = '${3}';

	/**
	 * Menu title for Left and Main CMS
	 * @var string
	 */
	private static \$menu_title = '${4}';

	${0}
}
```

## Class Model Admin

### Conditions

#### Prefix or Autocomplete


classmodeladmin-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * ${5:Description}
 * 
 * @package silverstripe
 * @subpackage ${6:mysite}
 */

```

```
class ${1}Admin extends ModelAdmin
{
	/**
	 * Managed data objects for CMS
	 * @var array
	 */
	private static \$managed_models = [
		'${2}'
	];

	/**
	 * URL Path for CMS
	 * @var string
	 */
	private static \$url_segment = '${3}';

	/**
	 * Menu title for Left and Main CMS
	 * @var string
	 */
	private static \$menu_title = '${4}';

	${0}
}
```

## Class Page

### Conditions

#### Prefix or Autocomplete


classpage-ss-cms-4.0+

#### Composer


 - silverstripe/cms

#### Language


 - php

### Content

```
use SilverStripe\CMS\Model\SiteTree

```

```
/**
 * ${3:Description}
 * 
 * @package silverstripe
 * @subpackage ${4:mysite}
 */

```

```
class $1 extends ${2:Page}
{
	${0}
}
```

## Class Page

### Conditions

#### Prefix or Autocomplete


classpage-ss-cms-3.0-4.0

#### Composer


 - silverstripe/cms

#### Language


 - php

### Content

```
/**
 * ${3:Description}
 * 
 * @package silverstripe
 * @subpackage ${4:mysite}
 */

```

```
class $1 extends ${2:Page}
{
	${0}
}
```

## Class Page Controller

### Conditions

#### Prefix or Autocomplete


classpagecontroller-ss-cms-4.0+

#### Composer


 - silverstripe/cms

#### Language


 - php

### Content

```
use SilverStripe\CMS\Controllers\ContentController

```

```
/**
 * ${3:Description}
 * 
 * @package silverstripe
 * @subpackage ${4:mysite}
 */

```

```
class ${1}Controller extends ${2:Page}Controller
{
	public function doInit()
	{
		parent::doInit();
	}
}${0}
```

## Class Page Controller

### Conditions

#### Prefix or Autocomplete


classpagecontroller-ss-cms-3.0-4.0

#### Composer


 - silverstripe/cms

#### Language


 - php

### Content

```
/**
 * ${3:Description}
 * 
 * @package silverstripe
 * @subpackage ${4:mysite}
 */

```

```
class ${1}Controller extends ${2:Page}Controller
{
	public function doInit()
	{
		parent::doInit();
	}
}${0}
```

## ClassName

### Conditions

#### Prefix or Autocomplete


classname-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
ClassName${0}
```

## Clear all sessions

### Conditions

#### Prefix or Autocomplete


sessionclearall-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Control\Session

```

```
Session::clear_all('${1}')${0}
```

## Clear all sessions

### Conditions

#### Prefix or Autocomplete


sessionclearall-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Session::clear_all('${1}')${0}
```

## Clear session value

### Conditions

#### Prefix or Autocomplete


sessionclear-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Control\Session

```

```
Session::clear('${1}')${0}
```

## Clear session value

### Conditions

#### Prefix or Autocomplete


sessionclear-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Session::clear('${1}')${0}
```

## contains Comparison

### Conditions

#### Prefix or Autocomplete


containscomparison-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
contains(${1})${0}
```

## Content

### Conditions

#### Prefix or Autocomplete


content-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
Content${0}
```

## Convert array to JSON

### Conditions

#### Prefix or Autocomplete


convertarraytojson-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Core\Convert

```

```
Convert::array2json(${1})${0}
```

## Convert array to JSON

### Conditions

#### Prefix or Autocomplete


convertarraytojson-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Convert::array2json(${1})${0}
```

## Convert HTML to plain text

### Conditions

#### Prefix or Autocomplete


converthtmltoplaintext-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Core\Convert

```

```
Convert::html2raw(${1})${0}
```

## Convert HTML to plain text

### Conditions

#### Prefix or Autocomplete


converthtmltoplaintext-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Convert::html2raw(${1})${0}
```

## Convert JSON to an array

### Conditions

#### Prefix or Autocomplete


convertjsontoanarray-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Core\Convert

```

```
Convert::json2array(${1})${0}
```

## Convert JSON to an array

### Conditions

#### Prefix or Autocomplete


convertjsontoanarray-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Convert::json2array(${1})${0}
```

## Convert JSON to an object

### Conditions

#### Prefix or Autocomplete


convertjsontoanobject-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Core\Convert

```

```
Convert::json2obj(${1})${0}
```

## Convert JSON to an object

### Conditions

#### Prefix or Autocomplete


convertjsontoanobject-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Convert::json2obj(${1})${0}
```

## Convert symbolic identifier to SQL

### Conditions

#### Prefix or Autocomplete


convertsymbolicidentifiertosql-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Core\Convert

```

```
Convert::symbol2sql(${1}, ${2:'.'})${0}
```

## Convert symbolic identifier to SQL

### Conditions

#### Prefix or Autocomplete


convertsymbolicidentifiertosql-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Convert::symbol2sql(${1}, ${2:'.'})${0}
```

## Convert to link if valid

### Conditions

#### Prefix or Autocomplete


converttolinkifvalid-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Core\Convert

```

```
Convert::linkIfMatch(${1})${0}
```

## Convert to link if valid

### Conditions

#### Prefix or Autocomplete


converttolinkifvalid-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Convert::linkIfMatch(${1})${0}
```

## Convert value to HTML attribute

### Conditions

#### Prefix or Autocomplete


convertvaluetohtmlattribute-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Core\Convert

```

```
Convert::raw2htmlatt(${1})${0}
```

## Convert value to HTML attribute

### Conditions

#### Prefix or Autocomplete


convertvaluetohtmlattribute-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Convert::raw2htmlatt(${1})${0}
```

## Convert value to HTML ID

### Conditions

#### Prefix or Autocomplete


convertvaluetohtmlid-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Core\Convert

```

```
Convert::raw2htmlid(${1})${0}
```

## Convert value to HTML ID

### Conditions

#### Prefix or Autocomplete


convertvaluetohtmlid-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Convert::raw2htmlid(${1})${0}
```

## Convert value to HTML name

### Conditions

#### Prefix or Autocomplete


convertvaluetohtmlname-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Core\Convert

```

```
Convert::raw2htmlname(${1})${0}
```

## Convert value to HTML name

### Conditions

#### Prefix or Autocomplete


convertvaluetohtmlname-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Convert::raw2htmlname(${1})${0}
```

## Convert value to javascript

### Conditions

#### Prefix or Autocomplete


convertvaluetojavascript-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Core\Convert

```

```
Convert::raw2js(${1})${0}
```

## Convert value to javascript

### Conditions

#### Prefix or Autocomplete


convertvaluetojavascript-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Convert::raw2js(${1})${0}
```

## Convert value to JSON

### Conditions

#### Prefix or Autocomplete


convertvaluetojson-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Core\Convert

```

```
Convert::raw2json(${1})${0}
```

## Convert value to JSON

### Conditions

#### Prefix or Autocomplete


convertvaluetojson-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Convert::raw2json(${1})${0}
```

## Convert value to SQL

### Conditions

#### Prefix or Autocomplete


convertvaluetosql-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Core\Convert

```

```
Convert::raw2sql(${1})${0}
```

## Convert value to SQL

### Conditions

#### Prefix or Autocomplete


convertvaluetosql-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Convert::raw2sql(${1})${0}
```

## Convert value to url

### Conditions

#### Prefix or Autocomplete


convertvaluetourl-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Core\Convert

```

```
Convert::raw2url(${1})${0}
```

## Convert value to url

### Conditions

#### Prefix or Autocomplete


convertvaluetourl-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Convert::raw2url(${1})${0}
```

## Convert value to XML

### Conditions

#### Prefix or Autocomplete


convertvaluetoxml-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Core\Convert

```

```
Convert::raw2xml(${1})${0}
```

## Convert value to XML

### Conditions

#### Prefix or Autocomplete


convertvaluetoxml-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Convert::raw2xml(${1})${0}
```

## Convert value to XML attribute

### Conditions

#### Prefix or Autocomplete


convertvaluetoxmlattribute-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Core\Convert

```

```
Convert::raw2att(${1})${0}
```

## Convert value to XML attribute

### Conditions

#### Prefix or Autocomplete


convertvaluetoxmlattribute-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Convert::raw2att(${1})${0}
```

## Convert XML to an array

### Conditions

#### Prefix or Autocomplete


convertxmltoanarray-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Core\Convert

```

```
Convert::xml2array(${1}, {$2:false}, {$3:false})${0}
```

## Convert XML to an array

### Conditions

#### Prefix or Autocomplete


convertxmltoanarray-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Convert::xml2array(${1}, {$2:false}, {$3:false})${0}
```

## Convert XML to raw text

### Conditions

#### Prefix or Autocomplete


convertxmltorawtext-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Core\Convert

```

```
Convert::xml2raw(${1})${0}
```

## Convert XML to raw text

### Conditions

#### Prefix or Autocomplete


convertxmltorawtext-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Convert::xml2raw(${1})${0}
```

## Count

### Conditions

#### Prefix or Autocomplete


count-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
Count${0}
```

## Count

### Conditions

#### Prefix or Autocomplete


count-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Count()${0}
```

## Crop height image

### Conditions

#### Prefix or Autocomplete


cropheightimage-ss-framework-3.2+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
CropHeight(${1:width})${0}
```

## Crop width image

### Conditions

#### Prefix or Autocomplete


cropwidthimage-ss-framework-3.2+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
CropWidth(${1:width})${0}
```

## CurrencyField

### Conditions

#### Prefix or Autocomplete


currencyfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\CurrencyField

```

```
CurrencyField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## CurrencyField

### Conditions

#### Prefix or Autocomplete


currencyfield-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
CurrencyField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## Current Member

### Conditions

#### Prefix or Autocomplete


member-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
CurrentMember${0}
```

## Current Member

### Conditions

#### Prefix or Autocomplete


member-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Member::currentUser()${0}
```

## Current Member

### Conditions

#### Prefix or Autocomplete


member-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Security\Member

```

```
Member::currentUser()${0}
```

## Current Member ID

### Conditions

#### Prefix or Autocomplete


memberid-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
CurrentMember.ID${0}
```

## Current Member ID

### Conditions

#### Prefix or Autocomplete


memberid-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Member::currentUserID()${0}
```

## Current Member ID

### Conditions

#### Prefix or Autocomplete


memberid-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Security\Member

```

```
Member::currentUserID()${0}
```

## Current Object Scope

### Conditions

#### Prefix or Autocomplete


currentobjectscope-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
Me${0}
```

## Current SiteConfig

### Conditions

#### Prefix or Autocomplete


siteconfig-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
SiteConfig${0}
```

## Current SiteConfig

### Conditions

#### Prefix or Autocomplete


siteconfig-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\SiteConfig\SiteConfig

```

```
SiteConfig::current_site_config()${0}
```

## Current SiteConfig

### Conditions

#### Prefix or Autocomplete


siteconfig-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
SiteConfig::current_site_config()${0}
```

## DB fields

### Conditions

#### Prefix or Autocomplete


dbfields-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Database fields
 * @var array
 */

```

```
private static \$db = [
	'${1}' => '${2}',
];${0}
```

## DB indexes

### Conditions

#### Prefix or Autocomplete


dbindexes-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Database indexes
 * @var array
 */

```

```
private static \$indexes = [
	'${1}' => '${2}',
];${0}
```

## Debug dump

### Conditions

#### Prefix or Autocomplete


debugdump-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Dev\Debug

```

```
Debug::dump(${1});${0}
```

## Debug dump

### Conditions

#### Prefix or Autocomplete


debugdump-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Debug::dump(${1});${0}
```

## Debug log

### Conditions

#### Prefix or Autocomplete


debuglog-ss-framework--4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Debug::log(${1});${0}
```

## Debug message

### Conditions

#### Prefix or Autocomplete


debugmessage-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Dev\Debug

```

```
Debug::message(${1});${0}
```

## Debug message

### Conditions

#### Prefix or Autocomplete


debugmessage-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Debug::message(${1});${0}
```

## Debug show

### Conditions

#### Prefix or Autocomplete


debugshow-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Dev\Debug

```

```
Debug::show(${1});${0}
```

## Debug show

### Conditions

#### Prefix or Autocomplete


debugshow-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Debug::show(${1});${0}
```

## Default DB values

### Conditions

#### Prefix or Autocomplete


defaultdbvalues-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Add default values to database
 *  @var array
 */

```

```
private static \$defaults = [
	'${1}' => '${2}'
];${0}
```

## Default sort

### Conditions

#### Prefix or Autocomplete


defaultsort-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Default sort ordering
 * @var array
 */

```

```
private static \$default_sort = ['${1}' => '${2:ASC}'];${0}
```

## Default sort

### Conditions

#### Prefix or Autocomplete


defaultsort-ss-framework--4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Default sort ordering
 * @var string
 */

```

```
private static \$default_sort = '${1} ${2:ASC}';${0}
```

## displayIf Condition

### Conditions

#### Prefix or Autocomplete


displayifcondition-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
displayIf(${1})${0}
```

## displayUnless Condition

### Conditions

#### Prefix or Autocomplete


displayunlesscondition-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
displayUnless(${1})${0}
```

## DropdownField

### Conditions

#### Prefix or Autocomplete


dropdownfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\DropdownField

```

```
DropdownField::create(
	'${1:name}',
	'${2:${1:title}}',
	${3:datalist}
)${0}
```

## DropdownField

### Conditions

#### Prefix or Autocomplete


dropdownfield-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
DropdownField::create(
	'${1:name}',
	'${2:${1:title}}',
	${3:datalist}
)${0}
```

## Else

### Conditions

#### Prefix or Autocomplete


else-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
<% else %>
	${0}
```

## EmailField

### Conditions

#### Prefix or Autocomplete


emailfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\EmailField

```

```
EmailField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## EmailField

### Conditions

#### Prefix or Autocomplete


emailfield-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
EmailField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## Embeddable

### Conditions

#### Prefix or Autocomplete


embeddable-ss-silverstripe-embed-0.0+

#### Composer


 - gorriecoe/silverstripe-embed

#### Language


 - php

### Content

```
use gorriecoe\Embed\Extensions\Embeddable

```

```
Embeddable::class${0}
```

## EmbeddedObject - Linkable

### Conditions

#### Prefix or Autocomplete


embeddedobjectlinkable-ss-silverstripe-linkable-2.0+

#### Composer


 - sheadawson/silverstripe-linkable

#### Language


 - php

### Content

```
use Sheadawson\Linkable\Models\EmbeddedObject

```

```
EmbeddedObject::class${0}
```

## EmbeddedObjectField - Linkable

### Conditions

#### Prefix or Autocomplete


embeddedobjectfieldlinkable-ss-silverstripe-linkable-2.0+

#### Composer


 - sheadawson/silverstripe-linkable

#### Language


 - php

### Content

```
use Sheadawson\Linkable\Models\EmbeddedObject

use Sheadawson\Linkable\Forms\EmbeddedObjectField

```

```
EmbeddedObjectField::create(
	'${1:name}',
	'${2:${1:title}}',
	${3}
)${0}
```

## endsWith Comparison

### Conditions

#### Prefix or Autocomplete


endswithcomparison-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
endsWith(${1})${0}
```

## Escape XML

### Conditions

#### Prefix or Autocomplete


escapexml-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
EscapeXML${0}
```

## Escape XML

### Conditions

#### Prefix or Autocomplete


escapexml-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
EscapeXML()${0}
```

## Extensions

### Conditions

#### Prefix or Autocomplete


extensions-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Defines extension names and parameters to be applied
 *  to this object upon construction.
 *  @var array
 */

```

```
private static \$extensions = [
	'${1}',
];${0}
```

## Fill image

### Conditions

#### Prefix or Autocomplete


fillimage-ss-framework-3.2+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
Fill(${1:width},${2:${1:height}})${0}
```

## Fill image

### Conditions

#### Prefix or Autocomplete


fillimage-ss-framework--3.0

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
CroppedImage(${1:width},${2:${1:height}})${0}
```

## Fill max image

### Conditions

#### Prefix or Autocomplete


fillmaximage-ss-framework-3.2+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
FillMax(${1:width},${2:${1:height}})${0}
```

## First Paragraph

### Conditions

#### Prefix or Autocomplete


firstparagraph-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
FirstParagraph${0}
```

## First Paragraph

### Conditions

#### Prefix or Autocomplete


firstparagraph-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
FirstParagraph()${0}
```

## Fit image

### Conditions

#### Prefix or Autocomplete


fitimage-ss-framework-3.2+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
Fit(${1:width},${2:${1:height}})${0}
```

## Fit Max Image

### Conditions

#### Prefix or Autocomplete


fitmaximage-ss-framework-3.2+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
FitMax(${1:width},${2:${1:height}})${0}
```

## Focus Crop Height Image

### Conditions

#### Prefix or Autocomplete


focuscropheightimage-ss-focuspoint-2.0+

#### Composer


 - jonom/focuspoint

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
FocusCropHeight(${1:width})${0}
```

## Focus Crop Width Image

### Conditions

#### Prefix or Autocomplete


focuscropwidthimage-ss-focuspoint-2.0+

#### Composer


 - jonom/focuspoint

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
FocusCropWidth(${1:width})${0}
```

## Focus Fill Image

### Conditions

#### Prefix or Autocomplete


focusfillimage-ss-focuspoint-0.0+

#### Composer


 - jonom/focuspoint

#### Language


 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

```
FocusFill(${1:width},${2:${1:height}})${0}
```

## Focus Fill Image

### Conditions

#### Prefix or Autocomplete


focusfillimage-ss-focuspoint-0.0+

#### Composer


 - jonom/focuspoint

#### Language


 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

```
CroppedFocusedImage(${1:width},${2:${1:height}})${0}
```

## Focus Fill Max Image

### Conditions

#### Prefix or Autocomplete


focusfillmaximage-ss-focuspoint-2.0+

#### Composer


 - jonom/focuspoint

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
FocusFillMax(${1:width},${2:${1:height}})${0}
```

## Form

### Conditions

#### Prefix or Autocomplete


form-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
Form${0}
```

## Form

### Conditions

#### Prefix or Autocomplete


form-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
Form::create(
	${0}
)
```

## Get all sessions

### Conditions

#### Prefix or Autocomplete


sessiongetall-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Control\Session

```

```
Session::get_all('${1}')${0}
```

## Get all sessions

### Conditions

#### Prefix or Autocomplete


sessiongetall-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Session::get_all('${1}')${0}
```

## Get base folder

### Conditions

#### Prefix or Autocomplete


basefolder-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Control\Director

```

```
Director::baseFolder()${0}
```

## Get base folder

### Conditions

#### Prefix or Autocomplete


basefolder-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Director::baseFolder()${0}
```

## Get session value

### Conditions

#### Prefix or Autocomplete


sessionget-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Control\Session

```

```
Session::get('${1}')${0}
```

## Get session value

### Conditions

#### Prefix or Autocomplete


sessionget-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Session::get('${1}')${0}
```

## Get the absolute root URL

### Conditions

#### Prefix or Autocomplete


absolutebaseurl-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
AbsoluteBaseURL${0}
```

## Get the absolute root URL

### Conditions

#### Prefix or Autocomplete


absolutebaseurl-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Control\Director

```

```
Director::absoluteBaseURL()${0}
```

## Get the absolute root URL

### Conditions

#### Prefix or Autocomplete


absolutebaseurl-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Director::absoluteBaseURL()${0}
```

## Get the root URL

### Conditions

#### Prefix or Autocomplete


baseurl-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
BaseURL${0}
```

## Get the root URL

### Conditions

#### Prefix or Autocomplete


baseurl-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Control\Director

```

```
Director::baseURL()${0}
```

## Get the root URL

### Conditions

#### Prefix or Autocomplete


baseurl-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Director::baseURL()${0}
```

## getBetterButtonsActions

### Conditions

#### Prefix or Autocomplete


getbetterbuttonsactions-ss-betterbuttons-0.0+

#### Composer


 - unclecheese/betterbuttons

#### Language


 - php

### Content

```
/**
 * Create better button custom actions
 * @return FieldList
 */

```

```
public function getBetterButtonsActions()
{
	\$fields = parent::getBetterButtonsActions();
	\$fields->${0}
	return \$fields;
}
```

## getCMSFields

### Conditions

#### Prefix or Autocomplete


getcmsfields-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * CMS Fields
 * @return FieldList
 */

```

```
public function getCMSFields()
{
	\$fields = parent::getCMSFields();
	\$fields->${0}
	return \$fields;
}
```

## getCMSFields scafoldless

### Conditions

#### Prefix or Autocomplete


getcmsfieldsscafoldless-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\FieldList

use SilverStripe\Forms\Tab

use SilverStripe\Forms\TabSet

```

```
/**
 * CMS Fields
 * @return FieldList
 */

```

```
public function getCMSFields()
{
	\$fields = FieldList::create();
	\$fields->push(
		TabSet::create(
			'Root',
			Tab::create('Main')
		)
	);
	\$fields->${0}
	\$this->extend('updateCMSFields', \$fields);
	return \$fields;
}
```

## getEditForm

### Conditions

#### Prefix or Autocomplete


geteditform-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * @param Int \$id
 * @param FieldList \$fields
 * @return Form
 */

```

```
public function getEditForm(\$id = null, \$fields = null)
{
	\$form = parent::getEditForm(\$id, \$fields);
	${0}
	return \$form;
}
```

## getLumberjackTitle

### Conditions

#### Prefix or Autocomplete


getlumberjacktitle-ss-lumberjack-0.0+

#### Composer


 - silverstripe/lumberjack

#### Language


 - php

### Content

```
/**
 * Define the title for the cms lumberjack gridfield.
 * @return string
 */

```

```
/public function getLumberjackTitle()
{
	return '${1}';
}${0}
```

## getSettingsFields

### Conditions

#### Prefix or Autocomplete


getsettingsfields-ss-cms-3.0+

#### Composer


 - silverstripe/cms

#### Language


 - php

### Content

```
/**
 * Settings Tab Fields
 * @return FieldList
 */

```

```
public function getSettingsFields()
{
	\$fields = parent::getSettingsFields();
	\$fields->${0}
	\$this->extend('updateSettingsFields', \$fields);
	return \$fields;
}
```

## GridField

### Conditions

#### Prefix or Autocomplete


gridfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\GridField\GridField

```

```
GridField::create(
	'${1:name}',
	'${2:${1:title}}',
	\$this->${1}(),
	${4}
)${0}
```

## GridField

### Conditions

#### Prefix or Autocomplete


gridfield-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
GridField::create(
	'${1:name}',
	'${2:${1:title}}',
	\$this->${1}(),
	${4}
)${0}
```

## GridFieldAddExistingSearchButton

### Conditions

#### Prefix or Autocomplete


gridfieldaddexistingsearchbutton-ss-gridfieldextensions-0.0+

#### Composer


 - symbiote/gridfieldextensions

#### Language


 - php

### Content

```
new GridFieldAddExistingSearchButton()${0}
```

## GridFieldAddNewInlineButton

### Conditions

#### Prefix or Autocomplete


gridfieldaddnewinlinebutton-ss-gridfieldextensions-0.0+

#### Composer


 - symbiote/gridfieldextensions

#### Language


 - php

### Content

```
new GridFieldAddNewInlineButton()${0}
```

## GridFieldAddNewMultiClass

### Conditions

#### Prefix or Autocomplete


gridfieldaddnewmulticlass-ss-gridfieldextensions-0.0+

#### Composer


 - symbiote/gridfieldextensions

#### Language


 - php

### Content

```
new GridFieldAddNewMultiClass())${0}
```

## GridFieldButtonRow

### Conditions

#### Prefix or Autocomplete


gridfieldbuttonrow-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\GridField\GridFieldButtonRow

```

```
new GridFieldButtonRow('before')${0}
```

## GridFieldButtonRow

### Conditions

#### Prefix or Autocomplete


gridfieldbuttonrow-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
new GridFieldButtonRow('before')${0}
```

## GridFieldConfig_Base

### Conditions

#### Prefix or Autocomplete


gridfieldconfig_base-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\GridField\GridFieldConfig_Base

```

```
GridFieldConfig_Base::create(${1})${0}
```

## GridFieldConfig_Base

### Conditions

#### Prefix or Autocomplete


gridfieldconfig_base-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
GridFieldConfig_Base::create(${1})${0}
```

## GridFieldConfig_RecordEditor

### Conditions

#### Prefix or Autocomplete


gridfieldconfig_recordeditor-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor

```

```
GridFieldConfig_RecordEditor::create(${1})${0}
```

## GridFieldConfig_RecordEditor

### Conditions

#### Prefix or Autocomplete


gridfieldconfig_recordeditor-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
GridFieldConfig_RecordEditor::create(${1})${0}
```

## GridFieldConfig_RecordViewer

### Conditions

#### Prefix or Autocomplete


gridfieldconfig_recordviewer-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\GridField\GridFieldConfig_RecordViewer

```

```
GridFieldConfig_RecordViewer::create(${1})${0}
```

## GridFieldConfig_RecordViewer

### Conditions

#### Prefix or Autocomplete


gridfieldconfig_recordviewer-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
GridFieldConfig_RecordViewer::create(${1})${0}
```

## GridFieldConfig_RelationEditor

### Conditions

#### Prefix or Autocomplete


gridfieldconfig_relationeditor-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\GridField\GridFieldConfig_RelationEditor

```

```
GridFieldConfig_RelationEditor::create(${1})${0}
```

## GridFieldConfig_RelationEditor

### Conditions

#### Prefix or Autocomplete


gridfieldconfig_relationeditor-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
GridFieldConfig_RelationEditor::create(${1})${0}
```

## GridFieldDeleteAction

### Conditions

#### Prefix or Autocomplete


gridfielddeleteaction-ss-gridfieldextensions-0.0+

#### Composer


 - symbiote/gridfieldextensions

#### Language


 - php

### Content

```
new GridFieldDeleteAction()${0}
```

## GridFieldEditableColumns

### Conditions

#### Prefix or Autocomplete


gridfieldeditablecolumns-ss-gridfieldextensions-0.0+

#### Composer


 - symbiote/gridfieldextensions

#### Language


 - php

### Content

```
new GridFieldEditableColumns()${0}
```

## GridFieldOrderableRows

### Conditions

#### Prefix or Autocomplete


gridfieldorderablerows-ss-gridfieldextensions-0.0+

#### Composer


 - symbiote/gridfieldextensions

#### Language


 - php

### Content

```
new GridFieldOrderableRows(${1:'Sort'})${0}
```

## GridFieldSortableRows - sortablegridfield

### Conditions

#### Prefix or Autocomplete


gridfieldsortablerowssortablegridfield-ss-sortablegridfield-0.0+

#### Composer


 - undefinedoffset/sortablegridfield

#### Language


 - php

### Content

```
new GridFieldSortableRows(${1:'Sort'})${0}
```

## GridFieldTitleHeader

### Conditions

#### Prefix or Autocomplete


gridfieldtitleheader-ss-gridfieldextensions-0.0+

#### Composer


 - symbiote/gridfieldextensions

#### Language


 - php

### Content

```
new GridFieldTitleHeader()${0}
```

## GridFieldToolbarHeader

### Conditions

#### Prefix or Autocomplete


gridfieldtoolbarheader-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\GridField\GridFieldToolbarHeader

```

```
new GridFieldToolbarHeader()${0}
```

## GroupedDropdownField

### Conditions

#### Prefix or Autocomplete


groupeddropdownfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\GroupedDropdownField

```

```
GroupedDropdownField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

## GroupedDropdownField

### Conditions

#### Prefix or Autocomplete


groupeddropdownfield-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
GroupedDropdownField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

## Has many relationships

### Conditions

#### Prefix or Autocomplete


hasmanyrelationships-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Has_many relationship
 * @var array
 */

```

```
private static \$has_many = [
	'${1}' => '${2}',
];${0}
```

## Has one relationships

### Conditions

#### Prefix or Autocomplete


hasonerelationships-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Has_one relationship
 * @var array
 */

```

```
private static \$has_one = [
	'${1}' => '${2}',
];${0}
```

## hasCheckedAtLeast Comparison

### Conditions

#### Prefix or Autocomplete


hascheckedatleastcomparison-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
hasCheckedAtLeast(${1})${0}
```

## hasCheckedLessThan Comparison

### Conditions

#### Prefix or Autocomplete


hascheckedlessthancomparison-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
hasCheckedLessThan(${1})${0}
```

## hasCheckedOption Comparison

### Conditions

#### Prefix or Autocomplete


hascheckedoptioncomparison-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
hasCheckedOption(${1})${0}
```

## HeaderField

### Conditions

#### Prefix or Autocomplete


headerfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\HeaderField

```

```
HeaderField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## HiddenField

### Conditions

#### Prefix or Autocomplete


hiddenfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\HiddenField

```

```
HiddenField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## HiddenField

### Conditions

#### Prefix or Autocomplete


hiddenfield-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
HiddenField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## Hide ancestor

### Conditions

#### Prefix or Autocomplete


hideancestor-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * If you extend a class, and don't want to be able to select
 * the old class in the cms, set this to the old class name.
 * @var string
 */

```

```
private static \$hide_ancestor = '${1:PageType}';${0}
```

## hideIf Condition

### Conditions

#### Prefix or Autocomplete


hideifcondition-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
hideIf(${1})${0}
```

## hideUnless Condition

### Conditions

#### Prefix or Autocomplete


hideunlesscondition-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
hideUnless(${1})${0}
```

## HTMLEditorField

### Conditions

#### Prefix or Autocomplete


htmleditorfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\HTMLEditor\HtmlEditorField

```

```
HtmlEditorField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## If

### Conditions

#### Prefix or Autocomplete


if-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
<% if ${1} %>
	${2}
<% end_if %>${0}
```

## If else

### Conditions

#### Prefix or Autocomplete


ifelse-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
<% if ${1} %>
	${2}
<% else %>
	${3}
<% end_if %>${0}
```

## If Loop

### Conditions

#### Prefix or Autocomplete


ifloop-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
<% if ${1} %>
	<% loop ${1} %>
		${2}
	<% end_loop %>
<% end_if %>${0}
```

## If not

### Conditions

#### Prefix or Autocomplete


ifnot-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
<% if not ${1} %>
	${2}
<% end_if %>${0}
```

## if With

### Conditions

#### Prefix or Autocomplete


ifwith-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
<% if ${1} %>
	<% with ${1} %>
		${2}
	<% end_with %>
<% end_if %>${0}
```

## Image

### Conditions

#### Prefix or Autocomplete


image-ss-assets-1.0+

#### Composer


 - silverstripe/assets

#### Language


 - php

### Content

```
use SilverStripe\Assets\Image

```

```
Image::class${0}
```

## Include

### Conditions

#### Prefix or Autocomplete


include-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
<% include ${1} %>${0}
```

## inSection Linking Mode

### Conditions

#### Prefix or Autocomplete


insectionlinkingmode-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
inSection(${1:page-url})${0}
```

## isBetween Comparison

### Conditions

#### Prefix or Autocomplete


isbetweencomparison-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
isBetween(${1})${0}
```

## isChecked Comparison

### Conditions

#### Prefix or Autocomplete


ischeckedcomparison-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
isChecked()${0}
```

## isCurrent Linking Mode

### Conditions

#### Prefix or Autocomplete


iscurrentlinkingmode-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
isCurrent${0}
```

## isEmpty Comparison

### Conditions

#### Prefix or Autocomplete


isemptycomparison-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
isEmpty(${1})${0}
```

## isEqualTo Comparison

### Conditions

#### Prefix or Autocomplete


isequaltocomparison-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
isEqualTo(${1})${0}
```

## isGreaterThan Comparison

### Conditions

#### Prefix or Autocomplete


isgreaterthancomparison-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
isGreaterThan(${1})${0}
```

## isLessThan Comparison

### Conditions

#### Prefix or Autocomplete


islessthancomparison-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
isLessThan(${1})${0}
```

## isNotChecked Comparison

### Conditions

#### Prefix or Autocomplete


isnotcheckedcomparison-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
isNotChecked()${0}
```

## isNotEmpty Comparison

### Conditions

#### Prefix or Autocomplete


isnotemptycomparison-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
isNotEmpty(${1})${0}
```

## isNotEqualTo Comparison

### Conditions

#### Prefix or Autocomplete


isnotequaltocomparison-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
isNotEqualTo(${1})${0}
```

## isSection Linking Mode

### Conditions

#### Prefix or Autocomplete


issectionlinkingmode-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
isSection${0}
```

## LabelField

### Conditions

#### Prefix or Autocomplete


labelfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\LabelField

```

```
LabelField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## LabelField

### Conditions

#### Prefix or Autocomplete


labelfield-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
LabelField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## Level

### Conditions

#### Prefix or Autocomplete


level-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
Level(${1:1})${0}
```

## Limit Characters

### Conditions

#### Prefix or Autocomplete


limitcharacters-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
LimitCharacters(${1:20},${2:'...'})${0}
```

## Limit Word Count

### Conditions

#### Prefix or Autocomplete


limitwordcount-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
LimitWordCount(${1:26},${2:'...'})${0}
```

## Link - Linkable

### Conditions

#### Prefix or Autocomplete


linklinkable-ss-silverstripe-linkable-2.0+

#### Composer


 - sheadawson/silverstripe-linkable

#### Language


 - php

### Content

```
use Sheadawson\Linkable\Models

```

```
Link::class${0}
```

## Link - silverstripe-link

### Conditions

#### Prefix or Autocomplete


linksilverstripelink-ss-silverstripe-link-0.0+

#### Composer


 - gorriecoe/silverstripe-link

#### Language


 - php

### Content

```
use gorriecoe\Link\Models\Link

```

```
Link::class${0}
```

## LinkField - Linkable

### Conditions

#### Prefix or Autocomplete


linkfieldlinkable-ss-silverstripe-linkable-2.0+

#### Composer


 - sheadawson/silverstripe-linkable

#### Language


 - php

### Content

```
use Sheadawson\Linkable\Models

use Sheadawson\Linkable\Forms\LinkField

```

```
LinkField::create(
	'${1:name}ID',
	'${2:${1:title}}'
)${0}
```

## LinkField - silverstripe-link

### Conditions

#### Prefix or Autocomplete


linkfieldsilverstripelink-ss-silverstripe-linkfield-0.0+

#### Composer


 - gorriecoe/silverstripe-linkfield

#### Language


 - php

### Content

```
use gorriecoe\Link\Models\Link

use gorriecoe\LinkField\LinkField

```

```
LinkField::create(
	'${1:name}',
	'${2:${1:title}}',
	${3:$this}
)${0}
```

## ListboxField

### Conditions

#### Prefix or Autocomplete


listboxfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\ListboxField

```

```
ListboxField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

## ListboxField

### Conditions

#### Prefix or Autocomplete


listboxfield-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
ListboxField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

## LookupField

### Conditions

#### Prefix or Autocomplete


lookupfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\LookupField

```

```
LookupField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

## LookupField

### Conditions

#### Prefix or Autocomplete


lookupfield-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
LookupField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

## Loop

### Conditions

#### Prefix or Autocomplete


loop-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
<% loop ${1} %>
	${2}
<% end_loop %>${0}
```

## Main translator function

### Conditions

#### Prefix or Autocomplete


_t-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
_t(
	__CLASS__ . '.${1/([a-zA-Z]*)([^a-zA-Z]*)/\U$1/}',
	'${2:${1}}'
)${0}
```

## Main translator function

### Conditions

#### Prefix or Autocomplete


_t-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
<%t ${1/([a-zA-Z.]*)([^a-zA-Z.]*)/\U$1/} '${2:${1}}' %>${0}
```

## Many many extraFields

### Conditions

#### Prefix or Autocomplete


manymanyextrafields-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Defines Database fields for the Many_many bridging table
 *  @var array
 */

```

```
private static \$many_many_extraFields = [
	'${1}' => [
		'${2:Sort}' => '${3:Int}'
	]
];${0}
```

## Many many relationships

### Conditions

#### Prefix or Autocomplete


manymanyrelationships-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Many_many relationship
 * @var array
 */

```

```
private static \$many_many = [
	'${1}' => '${2}',
];${0}
```

## Menu

### Conditions

#### Prefix or Autocomplete


menu-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
Menu(${1:page-url})${0}
```

## Menu icon

### Conditions

#### Prefix or Autocomplete


menuicon-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Menu icon for Left and Main CMS
 *  @var string
 */

```

```
private static \$menu_icon = '${1}';${0}
```

## Menu title

### Conditions

#### Prefix or Autocomplete


menutitle-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Menu title for Left and Main CMS
 *  @var string
 */

```

```
private static \$menu_title = '${1}';${0}
```

## Menu Title

### Conditions

#### Prefix or Autocomplete


menutitle-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
MenuTitle${0}
```

## MetaTags

### Conditions

#### Prefix or Autocomplete


metatags-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
MetaTags${0}
```

## No HTML

### Conditions

#### Prefix or Autocomplete


nohtml-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
NoHTML${0}
```

## No HTML

### Conditions

#### Prefix or Autocomplete


nohtml-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
NoHTML()${0}
```

## NullableField

### Conditions

#### Prefix or Autocomplete


nullablefield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\NullableField

```

```
NullableField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## NullableField

### Conditions

#### Prefix or Autocomplete


nullablefield-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
NullableField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## NumericField

### Conditions

#### Prefix or Autocomplete


numericfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\NumericField

```

```
NumericField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## NumericField

### Conditions

#### Prefix or Autocomplete


numericfield-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
NumericField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## NumericField readonly

### Conditions

#### Prefix or Autocomplete


numericfieldreadonly-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\NumericField_Readonly

```

```
NumericField_Readonly::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## NumericField readonly

### Conditions

#### Prefix or Autocomplete


numericfieldreadonly-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
NumericField_Readonly::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## onAfterDelete event handler

### Conditions

#### Prefix or Autocomplete


onafterdeleteeventhandler-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Event handler called after deleting from the database.
 * 
 * @uses DataExtension->onAfterDelete()
 */

```

```
public function onAfterDelete()
{
	parent::onAfterDelete();
	${0}
}
```

## onAfterWrite event handler

### Conditions

#### Prefix or Autocomplete


onafterwriteeventhandler-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Event handler called after writing to the database.
 * 
 * @uses DataExtension->onAfterWrite()
 */

```

```
public function onAfterWrite()
{
	parent::onAfterWrite();
	${0}
}
```

## onBeforeDelete event handler

### Conditions

#### Prefix or Autocomplete


onbeforedeleteeventhandler-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Event handler called before deleting from the database.
 * 
 * @uses DataExtension->onBeforeDelete()
 */

```

```
public function onBeforeDelete()
{
	parent::onBeforeDelete();
	${0}
}
```

## onBeforeWrite event handler

### Conditions

#### Prefix or Autocomplete


onbeforewriteeventhandler-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Event handler called before writing to the database.
 * 
 * @uses DataExtension->onAfterWrite()
 */

```

```
public function onBeforeWrite()
{
	parent::onBeforeWrite();
	${0}
}
```

## OptionsetField

### Conditions

#### Prefix or Autocomplete


optionsetfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\OptionsetField

```

```
OptionsetField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

## OptionsetField

### Conditions

#### Prefix or Autocomplete


optionsetfield-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
OptionsetField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

## Pad image

### Conditions

#### Prefix or Autocomplete


padimage-ss-framework-3.2+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
Pad(${1:width},${2:${1:height}},${3:#fff})${0}
```

## Pad image

### Conditions

#### Prefix or Autocomplete


padimage-ss-framework--3.2

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
PaddedImage(${1:width},${2:${1:height}},${3:#fff})${0}
```

## Page

### Conditions

#### Prefix or Autocomplete


page-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
Page(${1:page-url})${0}
```

## Permission check

### Conditions

#### Prefix or Autocomplete


permissioncheck-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Security\Permission

```

```
Permission::check(${1:string|array}, ${2:'any'}, ${3:$member})${0}
```

## Permission check

### Conditions

#### Prefix or Autocomplete


permissioncheck-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Permission::check(${1:string|array}, ${2:'any'}, ${3:$member})${0}
```

## Plural name

### Conditions

#### Prefix or Autocomplete


pluralname-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Plural name for CMS
 *  @var string
 */

```

```
private static \$plural_name = '${1}';${0}
```

## providePermissions

### Conditions

#### Prefix or Autocomplete


providepermissions-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Security\PermissionProvider

```

```
/**
 * Return a map of permission codes to add to the dropdown shown
 * in the Security section of the CMS.
 * @return array
 */

```

```
public function providePermissions()
{
	return [
		'${1:PERMISSION}' => '${2:Title}'
	];
}${0}
```

## providePermissions

### Conditions

#### Prefix or Autocomplete


providepermissions-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Return a map of permission codes to add to the dropdown shown
 * in the Security section of the CMS.
 * @return array
 */

```

```
public function providePermissions()
{
	return [
		'${1:PERMISSION}' => '${2:Title}'
	];
}${0}
```

## ReadonlyField

### Conditions

#### Prefix or Autocomplete


readonlyfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\ReadonlyField

```

```
ReadonlyField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## ReadonlyField

### Conditions

#### Prefix or Autocomplete


readonlyfield-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
ReadonlyField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## Redirect

### Conditions

#### Prefix or Autocomplete


redirect-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Control\Director

```

```
Director::redirect(${1})${0}
```

## Redirect

### Conditions

#### Prefix or Autocomplete


redirect-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Director::redirect(${1})${0}
```

## Relationship ownership

### Conditions

#### Prefix or Autocomplete


owns-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Relationship version ownership
 * @var array
 */

```

```
private static \$owns = [
	'${1}'
];${0}
```

## Relative Link

### Conditions

#### Prefix or Autocomplete


relativelink-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
Link${0}
```

## Remove extra class

### Conditions

#### Prefix or Autocomplete


removeextraclass-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
removeExtraClass('${1}')${0}
```

## removeByName

### Conditions

#### Prefix or Autocomplete


removebyname-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
removeByName([
	'${0}'
]);
```

## removeComponentsByType

### Conditions

#### Prefix or Autocomplete


removecomponentsbytype-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
removeComponentsByType(${1})${0}
```

## Require CSS

### Conditions

#### Prefix or Autocomplete


requirecss-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
<% require css('${1}') %>${0}
```

## Require CSS

### Conditions

#### Prefix or Autocomplete


requirecss-ss-framework--4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Requirements::css('${1}');${0}
```

## Require CSS

### Conditions

#### Prefix or Autocomplete


requirecss-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\View\Requirements

```

```
Requirements::css('${1}');${0}
```

## Require Javascript

### Conditions

#### Prefix or Autocomplete


requirejavascript-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
<% require javascript('${1}') %>${0}
```

## Require Javascript

### Conditions

#### Prefix or Autocomplete


requirejavascript-ss-framework--4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Requirements::javascript('${1}');${0}
```

## Require Javascript

### Conditions

#### Prefix or Autocomplete


requirejavascript-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\View\Requirements

```

```
Requirements::javascript('${1}');${0}
```

## Require themed CSS

### Conditions

#### Prefix or Autocomplete


requirethemedcss-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
<% require themedCSS('${1}') %>${0}
```

## Require themed CSS

### Conditions

#### Prefix or Autocomplete


requirethemedcss-ss-framework--4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Requirements::themedCSS('${1}');${0}
```

## Require themed CSS

### Conditions

#### Prefix or Autocomplete


requirethemedcss-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\View\Requirements

```

```
Requirements::themedCSS('${1}');${0}
```

## Require themed javascript

### Conditions

#### Prefix or Autocomplete


requirethemedjavascript-ss-framework-3.5+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
<% require themedJavascript('${1}') %>${0}
```

## Require themed javascript

### Conditions

#### Prefix or Autocomplete


requirethemedjavascript-ss-framework-3.5-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Requirements::themedJavascript('${1}');${0}
```

## Require themed javascript

### Conditions

#### Prefix or Autocomplete


requirethemedjavascript-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\View\Requirements

```

```
Requirements::themedJavascript('${1}');${0}
```

## Required

### Conditions

#### Prefix or Autocomplete


required-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Required()${0}
```

## Requirement block

### Conditions

#### Prefix or Autocomplete


requirementblock-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\View\Requirements

```

```
Requirements::block('${1}');${0}
```

## Scale Height Image

### Conditions

#### Prefix or Autocomplete


scaleheightimage-ss-framework--3.2

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
SetHeight(${1:height})${0}
```

## Scale Height Image

### Conditions

#### Prefix or Autocomplete


scaleheightimage-ss-framework-3.2+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
ScaleHeight(${1:height})${0}
```

## Scale Max Height Image

### Conditions

#### Prefix or Autocomplete


scalemaxheightimage-ss-framework-3.2+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
ScaleMaxHeight(${1:height})${0}
```

## Scale Max Width Image

### Conditions

#### Prefix or Autocomplete


scalemaxwidthimage-ss-framework-3.2+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
ScaleMaxWidth(${1:width})${0}
```

## Scale Width Image

### Conditions

#### Prefix or Autocomplete


scalewidthimage-ss-framework--3.2

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
SetWidth(${1:width})${0}
```

## Scale Width Image

### Conditions

#### Prefix or Autocomplete


scalewidthimage-ss-framework-3.2+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
ScaleWidth(${1:width})${0}
```

## Searchable fields

### Conditions

#### Prefix or Autocomplete


searchablefields-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Defines a default list of filters for the search context
 * @var array
 */

```

```
private static \$searchable_fields = [
	'${1}' => '${2}'
];${0}
```

## SegmentField

### Conditions

#### Prefix or Autocomplete


segmentfield-ss-segment-field-2.0+

#### Composer


 - silverstripe/segment-field
 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\SegmentField

```

```
SegmentField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## SegmentField

### Conditions

#### Prefix or Autocomplete


segmentfield-ss-segment-field--2.0

#### Composer


 - silverstripe/segment-field

#### Language


 - php

### Content

```
SegmentField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## Set allowed extensions

### Conditions

#### Prefix or Autocomplete


setallowedextensions-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
setAllowedExtensions(array(${1}))${0}
```

## Set allowed file categories

### Conditions

#### Prefix or Autocomplete


setallowedfilecategories-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
setAllowedFileCategories(array(${1}))${0}
```

## Set allowed max file number

### Conditions

#### Prefix or Autocomplete


setallowedmaxfilenumber-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
setAllowedMaxFileNumber(${1:null})${0}
```

## Set can attach existing

### Conditions

#### Prefix or Autocomplete


setcanattachexisting-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
setCanAttachExisting(${1:true})${0}
```

## Set can upload

### Conditions

#### Prefix or Autocomplete


setcanupload-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
setCanUpload(${1:true})${0}
```

## Set description

### Conditions

#### Prefix or Autocomplete


setdescription-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
setDescription('${1}')${0}
```

## Set folder name

### Conditions

#### Prefix or Autocomplete


setfoldername-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
setFolderName('${1}')${0}
```

## Set Ratio Size Image

### Conditions

#### Prefix or Autocomplete


setratiosizeimage-ss-framework-3.2+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
SetRatioSize(${1:width},${2:${1:height}})${0}
```

## Set session value

### Conditions

#### Prefix or Autocomplete


sessionset-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Control\Session

```

```
Session::set('${1}', ${2})${0}
```

## Set session value

### Conditions

#### Prefix or Autocomplete


sessionset-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
Session::set('${1}', ${2})${0}
```

## Set Size Image

### Conditions

#### Prefix or Autocomplete


setsizeimage-ss-framework-3.2+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
SetSize(${1:width},${2:${1:height}})${0}
```

## setAttribute

### Conditions

#### Prefix or Autocomplete


setattribute-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
setAttribute('${1}', '${2}')${0}
```

## setColumns

### Conditions

#### Prefix or Autocomplete


setcolumns-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
setColumns(${1})${0}
```

## setEmptyString

### Conditions

#### Prefix or Autocomplete


setemptystring-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
setEmptyString('${1}')${0}
```

## setLeftTitle

### Conditions

#### Prefix or Autocomplete


setlefttitle-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
setLeftTitle('${1}')${0}
```

## setName

### Conditions

#### Prefix or Autocomplete


setname-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
setName('${1}')${0}
```

## setRightTitle

### Conditions

#### Prefix or Autocomplete


setrighttitle-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
setRightTitle('${1}')${0}
```

## setRows

### Conditions

#### Prefix or Autocomplete


setrows-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
setRows(${1})${0}
```

## setTitle

### Conditions

#### Prefix or Autocomplete


settitle-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
setTitle('${1}')${0}
```

## setValue

### Conditions

#### Prefix or Autocomplete


setvalue-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
setValue(${1})${0}
```

## Show in sitetree

### Conditions

#### Prefix or Autocomplete


showinsitetree-ss-lumberjack-0.0+

#### Composer


 - silverstripe/lumberjack

#### Language


 - php

### Content

```
/**
 * Defines whether a page is displayed within the site tree
 * @var boolean
 */

```

```
private static $show_in_sitetree = ${1:false};${0}
```

## Singular name

### Conditions

#### Prefix or Autocomplete


singularname-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Singular name for CMS
 *  @var string
 */

```

```
private static \$singular_name = '${1}';${0}
```

## SortableUploadField - sortablefile

### Conditions

#### Prefix or Autocomplete


sortableuploadfieldsortablefile-ss-sortablefile-0.0+

#### Composer


 - bummzack/sortablefile

#### Language


 - php

### Content

```
use Bummzack\SortableFile\Forms\SortableUploadField

```

```
SortableUploadField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## SortableUploadField - sortablefile

### Conditions

#### Prefix or Autocomplete


sortableuploadfieldsortablefile-ss-sortablefile-0.0+

#### Composer


 - bummzack/sortablefile

#### Language


 - php

### Content

```
SortableUploadField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## SS_Log

### Conditions

#### Prefix or Autocomplete


ss_log-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use Psr\Log\LoggerInterface

use SilverStripe\Core\Injector\Injector

```

```
Injector::inst()->get(LoggerInterface::class)->${2:error}('${1}');${0}
```

## SS_Log

### Conditions

#### Prefix or Autocomplete


ss_log-ss-framework--4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
SS_Log::log('${1}', ${2:SS_Log::ERR});${0}
```

## startsWith Comparison

### Conditions

#### Prefix or Autocomplete


startswithcomparison-ss-display-logic-0.0+

#### Composer


 - unclecheese/display-logic

#### Language


 - php

### Content

```
startsWith(${1})${0}
```

## StringTagField

### Conditions

#### Prefix or Autocomplete


stringtagfield-ss-tagfield-0.0+

#### Composer


 - silverstripe/tagfield

#### Language


 - php

### Content

```
StringTagField::create(
	'${1:name}',
	'${2:${1:title}}',
	${3:[]},
	explode(',', \$this->${1:name})
)${0}
```

## Summary fields

### Conditions

#### Prefix or Autocomplete


summaryfields-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Defines summary fields commonly used in table columns
 * as a quick overview of the data for this dataobject
 * @var array
 */

```

```
private static \$summary_fields = [
	'${1}' => '${2}'
];${0}
```

## Table name

### Conditions

#### Prefix or Autocomplete


tablename-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Defines the database table name
 *  @var string
 */

```

```
private static \$table_name = '${1}';${0}
```

## TagField

### Conditions

#### Prefix or Autocomplete


tagfield-ss-tagfield-0.0+

#### Composer


 - silverstripe/tagfield

#### Language


 - php

### Content

```
TagField::create(
	'${1:name}',
	'${2:${1:title}}',
	${3:null},
	${4}
)${0}
```

## TextareaField

### Conditions

#### Prefix or Autocomplete


textareafield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\TextareaField

```

```
TextareaField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## TextareaField

### Conditions

#### Prefix or Autocomplete


textareafield-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
TextareaField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## TextField

### Conditions

#### Prefix or Autocomplete


textfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\TextField

```

```
TextField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## TextField

### Conditions

#### Prefix or Autocomplete


textfield-ss-framework-3.0-4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
TextField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## Theme directory

### Conditions

#### Prefix or Autocomplete


themedirectory-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
ThemeDir${0}
```

## Theme directory

### Conditions

#### Prefix or Autocomplete


themedirectory-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
$this->ThemeDir()${0}
```

## Title

### Conditions

#### Prefix or Autocomplete


title-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
Title${0}
```

## Top Level Scope

### Conditions

#### Prefix or Autocomplete


toplevelscope-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
Top${0}
```

## Translatable db fields

### Conditions

#### Prefix or Autocomplete


translatabledbfields-ss-silverstripe-fluent-0.0+

#### Composer


 - tractorcow/silverstripe-fluent

#### Language


 - php

### Content

```
/**
 * Defines db fields that are translatable.
 * @var array
 */

```

```
private static \$translate = [
	'${1}',
];${0}
```

## Traverse Up Scope

### Conditions

#### Prefix or Autocomplete


traverseupscope-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
Up${0}
```

## TreeDropdownField

### Conditions

#### Prefix or Autocomplete


treedropdownfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\TreeDropdownField

use SilverStripe\CMS\Model\SiteTree

```

```
TreeDropdownField::create(
	'${1:name}ID',
	'${2:${1:title}}',
	${3:SiteTree::class}
)${0}
```

## TreeDropdownField

### Conditions

#### Prefix or Autocomplete


treedropdownfield-ss-framework--4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
TreeDropdownField::create(
	'${1:name}ID',
	'${2:${1:title}}',
	'${3:SiteTree}'
)${0}
```

## TreeDropdownField readonly

### Conditions

#### Prefix or Autocomplete


treedropdownfieldreadonly-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\TreeDropdownField_Readonly

use SilverStripe\CMS\Model\SiteTree

```

```
TreeDropdownField_Readonly::create(
	'${1:name}ID',
	'${2:${1:title}}',
	${3:SiteTree::class}
)${0}
```

## TreeDropdownField readonly

### Conditions

#### Prefix or Autocomplete


treedropdownfieldreadonly-ss-framework--4.0

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
TreeDropdownField_Readonly::create(
	'${1:name}ID',
	'${2:${1:title}}',
	'${3:SiteTree}'
)${0}
```

## updateCMSFields

### Conditions

#### Prefix or Autocomplete


updatecmsfields-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\Forms\FieldList

```

```
/**
 * Update Fields
 * @return FieldList
 */

```

```
public function updateCMSFields(FieldList \$fields)
{
	\$owner = $this->owner;
	\$fields->${0}
	return \$fields;
}
```

## UploadField

### Conditions

#### Prefix or Autocomplete


uploadfield-ss-framework-4.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
use SilverStripe\AssetAdmin\Forms\UploadField

```

```
UploadField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

## URL handlers

### Conditions

#### Prefix or Autocomplete


urlhandlers-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - php

### Content

```
/**
 * Defines URL patterns.
 * @var array
 */

```

```
private static \$url_handlers = [
	'${1}' => '${2}'
];${0}
```

## URLSegment

### Conditions

#### Prefix or Autocomplete


urlsegment-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - php
 - silverstripe
 - SilverStripe

### Content

```
URLSegment${0}
```

## With

### Conditions

#### Prefix or Autocomplete


with-ss-framework-3.0+

#### Composer


 - silverstripe/framework

#### Language


 - ss
 - silverstripe
 - SilverStripe

### Content

```
<% with ${1} %>
	${2}
<% end_with %>${0}
```
