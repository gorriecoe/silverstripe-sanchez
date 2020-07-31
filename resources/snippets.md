# Snippets

## Absolute Link

### Conditions

#### Prefix or Autocomplete


absolutelink-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
AbsoluteLink${0}
```

#### Use items



## Add extra class

### Conditions

#### Prefix or Autocomplete


addextraclass-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
addExtraClass('${1}')${0}
```

#### Use items



## addComponent

### Conditions

#### Prefix or Autocomplete


addcomponent-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
addComponent(${1})${0}
```

#### Use items



## addFieldsToTab

### Conditions

#### Prefix or Autocomplete


addfieldstotab-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
addFieldsToTab(
	'${1:Root.Main}',
	[
		${0}
	]
);
```

#### Use items



## addFieldToTab

### Conditions

#### Prefix or Autocomplete


addfieldtotab-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
addFieldToTab(
	'${1:Root.Main}',
	${0},
	'${3:insertBefore}'
);
```

#### Use items



## AllChildren

### Conditions

#### Prefix or Autocomplete


allchildren-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
AllChildren${0}
```

#### Use items



## Allowed actions

### Conditions

#### Prefix or Autocomplete


allowedactions-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Allowed children

### Conditions

#### Prefix or Autocomplete


allowedchildren-ss-cms-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Base Tag

### Conditions

#### Prefix or Autocomplete


basetag-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
<% base_tag %>${0}
```

#### Use items



## Belongs many many relationships

### Conditions

#### Prefix or Autocomplete


belongsmanymanyrelationships-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Belongs to relationships

### Conditions

#### Prefix or Autocomplete


belongstorelationships-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## BetterButtonCustomAction

### Conditions

#### Prefix or Autocomplete


betterbuttoncustomaction-ss-betterbuttons-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
BetterButtonCustomAction::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items



## BetterButtonNestedForm

### Conditions

#### Prefix or Autocomplete


betterbuttonnestedform-ss-betterbuttons-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
BetterButtonNestedForm::create(
	'${1:name}',
	'${2:${1:title}}',
	FieldList::create(
		${3}
	)
)${0}
```

#### Use items



## Breadcrumbs

### Conditions

#### Prefix or Autocomplete


breadcrumbs-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
Breadcrumbs${0}
```

#### Use items



## Can be root

### Conditions

#### Prefix or Autocomplete


canberoot-ss-cms-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```
/**
 * Defines whether a page can be in the root of the site tree
 * @var boolean
 */

```

```
private static $can_be_root = ${1:false};${0}
```

#### Use items



## Can create permissions

### Conditions

#### Prefix or Autocomplete


cancreatepermissions-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Can create permissions

### Conditions

#### Prefix or Autocomplete


cancreatepermissions-ss-framework--4.0

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Can delete permissions

### Conditions

#### Prefix or Autocomplete


candeletepermissions-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Can edit permissions

### Conditions

#### Prefix or Autocomplete


caneditpermissions-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Can view permissions

### Conditions

#### Prefix or Autocomplete


canviewpermissions-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Casting

### Conditions

#### Prefix or Autocomplete


casting-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## CheckboxField

### Conditions

#### Prefix or Autocomplete


checkboxfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
CheckboxField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - SilverStripe\Forms\CheckboxField

## CheckboxField

### Conditions

#### Prefix or Autocomplete


checkboxfield-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
CheckboxField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items



## CheckboxField readonly

### Conditions

#### Prefix or Autocomplete


checkboxfieldreadonly-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
CheckboxField_Readonly::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - SilverStripe\Forms\CheckboxField_Readonly

## CheckboxField readonly

### Conditions

#### Prefix or Autocomplete


checkboxfieldreadonly-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
CheckboxField_Readonly::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items



## CheckboxSetField

### Conditions

#### Prefix or Autocomplete


checkboxsetfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
CheckboxSetField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

#### Use items


 - SilverStripe\Forms\CheckboxSetField

## CheckboxSetField

### Conditions

#### Prefix or Autocomplete


checkboxsetfield-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
CheckboxSetField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

#### Use items



## Children

### Conditions

#### Prefix or Autocomplete


children-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
Children${0}
```

#### Use items



## ChildrenOf

### Conditions

#### Prefix or Autocomplete


childrenof-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
ChildrenOf(${1:page-url})${0}
```

#### Use items



## Class BuildTask

### Conditions

#### Prefix or Autocomplete


classbuildtask-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items


 - SilverStripe\Dev\BuildTask

## Class BuildTask

### Conditions

#### Prefix or Autocomplete


classbuildtask-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Class DataObject

### Conditions

#### Prefix or Autocomplete


classdataobject-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items


 - SilverStripe\ORM\DataObject

## Class DataObject

### Conditions

#### Prefix or Autocomplete


classdataobject-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Class Model Admin

### Conditions

#### Prefix or Autocomplete


classmodeladmin-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items


 - SilverStripe\Admin\ModelAdmin

## Class Model Admin

### Conditions

#### Prefix or Autocomplete


classmodeladmin-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Class Page

### Conditions

#### Prefix or Autocomplete


classpage-ss-cms-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items


 - SilverStripe\CMS\Model\SiteTree

## Class Page

### Conditions

#### Prefix or Autocomplete


classpage-ss-cms-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Class Page Controller

### Conditions

#### Prefix or Autocomplete


classpagecontroller-ss-cms-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items


 - SilverStripe\CMS\Controllers\ContentController

## Class Page Controller

### Conditions

#### Prefix or Autocomplete


classpagecontroller-ss-cms-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## ClassName

### Conditions

#### Prefix or Autocomplete


classname-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
ClassName${0}
```

#### Use items



## Clear all sessions

### Conditions

#### Prefix or Autocomplete


sessionclearall-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Session::clear_all('${1}')${0}
```

#### Use items


 - SilverStripe\Control\Session

## Clear all sessions

### Conditions

#### Prefix or Autocomplete


sessionclearall-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Session::clear_all('${1}')${0}
```

#### Use items



## Clear session value

### Conditions

#### Prefix or Autocomplete


sessionclear-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Session::clear('${1}')${0}
```

#### Use items


 - SilverStripe\Control\Session

## Clear session value

### Conditions

#### Prefix or Autocomplete


sessionclear-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Session::clear('${1}')${0}
```

#### Use items



## contains Comparison

### Conditions

#### Prefix or Autocomplete


containscomparison-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
contains(${1})${0}
```

#### Use items



## Content

### Conditions

#### Prefix or Autocomplete


content-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
Content${0}
```

#### Use items



## Convert array to JSON

### Conditions

#### Prefix or Autocomplete


convertarraytojson-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::array2json(${1})${0}
```

#### Use items


 - SilverStripe\Core\Convert

## Convert array to JSON

### Conditions

#### Prefix or Autocomplete


convertarraytojson-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::array2json(${1})${0}
```

#### Use items



## Convert HTML to plain text

### Conditions

#### Prefix or Autocomplete


converthtmltoplaintext-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::html2raw(${1})${0}
```

#### Use items


 - SilverStripe\Core\Convert

## Convert HTML to plain text

### Conditions

#### Prefix or Autocomplete


converthtmltoplaintext-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::html2raw(${1})${0}
```

#### Use items



## Convert JSON to an array

### Conditions

#### Prefix or Autocomplete


convertjsontoanarray-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::json2array(${1})${0}
```

#### Use items


 - SilverStripe\Core\Convert

## Convert JSON to an array

### Conditions

#### Prefix or Autocomplete


convertjsontoanarray-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::json2array(${1})${0}
```

#### Use items



## Convert JSON to an object

### Conditions

#### Prefix or Autocomplete


convertjsontoanobject-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::json2obj(${1})${0}
```

#### Use items


 - SilverStripe\Core\Convert

## Convert JSON to an object

### Conditions

#### Prefix or Autocomplete


convertjsontoanobject-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::json2obj(${1})${0}
```

#### Use items



## Convert symbolic identifier to SQL

### Conditions

#### Prefix or Autocomplete


convertsymbolicidentifiertosql-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::symbol2sql(${1}, ${2:'.'})${0}
```

#### Use items


 - SilverStripe\Core\Convert

## Convert symbolic identifier to SQL

### Conditions

#### Prefix or Autocomplete


convertsymbolicidentifiertosql-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::symbol2sql(${1}, ${2:'.'})${0}
```

#### Use items



## Convert to link if valid

### Conditions

#### Prefix or Autocomplete


converttolinkifvalid-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::linkIfMatch(${1})${0}
```

#### Use items


 - SilverStripe\Core\Convert

## Convert to link if valid

### Conditions

#### Prefix or Autocomplete


converttolinkifvalid-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::linkIfMatch(${1})${0}
```

#### Use items



## Convert value to HTML attribute

### Conditions

#### Prefix or Autocomplete


convertvaluetohtmlattribute-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2htmlatt(${1})${0}
```

#### Use items


 - SilverStripe\Core\Convert

## Convert value to HTML attribute

### Conditions

#### Prefix or Autocomplete


convertvaluetohtmlattribute-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2htmlatt(${1})${0}
```

#### Use items



## Convert value to HTML ID

### Conditions

#### Prefix or Autocomplete


convertvaluetohtmlid-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2htmlid(${1})${0}
```

#### Use items


 - SilverStripe\Core\Convert

## Convert value to HTML ID

### Conditions

#### Prefix or Autocomplete


convertvaluetohtmlid-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2htmlid(${1})${0}
```

#### Use items



## Convert value to HTML name

### Conditions

#### Prefix or Autocomplete


convertvaluetohtmlname-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2htmlname(${1})${0}
```

#### Use items


 - SilverStripe\Core\Convert

## Convert value to HTML name

### Conditions

#### Prefix or Autocomplete


convertvaluetohtmlname-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2htmlname(${1})${0}
```

#### Use items



## Convert value to javascript

### Conditions

#### Prefix or Autocomplete


convertvaluetojavascript-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2js(${1})${0}
```

#### Use items


 - SilverStripe\Core\Convert

## Convert value to javascript

### Conditions

#### Prefix or Autocomplete


convertvaluetojavascript-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2js(${1})${0}
```

#### Use items



## Convert value to JSON

### Conditions

#### Prefix or Autocomplete


convertvaluetojson-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2json(${1})${0}
```

#### Use items


 - SilverStripe\Core\Convert

## Convert value to JSON

### Conditions

#### Prefix or Autocomplete


convertvaluetojson-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2json(${1})${0}
```

#### Use items



## Convert value to SQL

### Conditions

#### Prefix or Autocomplete


convertvaluetosql-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2sql(${1})${0}
```

#### Use items


 - SilverStripe\Core\Convert

## Convert value to SQL

### Conditions

#### Prefix or Autocomplete


convertvaluetosql-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2sql(${1})${0}
```

#### Use items



## Convert value to url

### Conditions

#### Prefix or Autocomplete


convertvaluetourl-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2url(${1})${0}
```

#### Use items


 - SilverStripe\Core\Convert

## Convert value to url

### Conditions

#### Prefix or Autocomplete


convertvaluetourl-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2url(${1})${0}
```

#### Use items



## Convert value to XML

### Conditions

#### Prefix or Autocomplete


convertvaluetoxml-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2xml(${1})${0}
```

#### Use items


 - SilverStripe\Core\Convert

## Convert value to XML

### Conditions

#### Prefix or Autocomplete


convertvaluetoxml-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2xml(${1})${0}
```

#### Use items



## Convert value to XML attribute

### Conditions

#### Prefix or Autocomplete


convertvaluetoxmlattribute-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2att(${1})${0}
```

#### Use items


 - SilverStripe\Core\Convert

## Convert value to XML attribute

### Conditions

#### Prefix or Autocomplete


convertvaluetoxmlattribute-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::raw2att(${1})${0}
```

#### Use items



## Convert XML to an array

### Conditions

#### Prefix or Autocomplete


convertxmltoanarray-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::xml2array(${1}, {$2:false}, {$3:false})${0}
```

#### Use items


 - SilverStripe\Core\Convert

## Convert XML to an array

### Conditions

#### Prefix or Autocomplete


convertxmltoanarray-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::xml2array(${1}, {$2:false}, {$3:false})${0}
```

#### Use items



## Convert XML to raw text

### Conditions

#### Prefix or Autocomplete


convertxmltorawtext-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::xml2raw(${1})${0}
```

#### Use items


 - SilverStripe\Core\Convert

## Convert XML to raw text

### Conditions

#### Prefix or Autocomplete


convertxmltorawtext-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Convert::xml2raw(${1})${0}
```

#### Use items



## Count

### Conditions

#### Prefix or Autocomplete


count-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
Count${0}
```

#### Use items



## Count

### Conditions

#### Prefix or Autocomplete


count-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Count()${0}
```

#### Use items



## Crop height image

### Conditions

#### Prefix or Autocomplete


cropheightimage-ss-framework-3.2+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
CropHeight(${1:width})${0}
```

#### Use items



## Crop width image

### Conditions

#### Prefix or Autocomplete


cropwidthimage-ss-framework-3.2+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
CropWidth(${1:width})${0}
```

#### Use items



## CurrencyField

### Conditions

#### Prefix or Autocomplete


currencyfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
CurrencyField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - SilverStripe\Forms\CurrencyField

## CurrencyField

### Conditions

#### Prefix or Autocomplete


currencyfield-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
CurrencyField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items



## Current Member

### Conditions

#### Prefix or Autocomplete


member-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
CurrentMember${0}
```

#### Use items



## Current Member

### Conditions

#### Prefix or Autocomplete


member-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Member::currentUser()${0}
```

#### Use items



## Current Member

### Conditions

#### Prefix or Autocomplete


member-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Member::currentUser()${0}
```

#### Use items


 - SilverStripe\Security\Member

## Current Member ID

### Conditions

#### Prefix or Autocomplete


memberid-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
CurrentMember.ID${0}
```

#### Use items



## Current Member ID

### Conditions

#### Prefix or Autocomplete


memberid-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Member::currentUserID()${0}
```

#### Use items



## Current Member ID

### Conditions

#### Prefix or Autocomplete


memberid-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Member::currentUserID()${0}
```

#### Use items


 - SilverStripe\Security\Member

## Current Object Scope

### Conditions

#### Prefix or Autocomplete


currentobjectscope-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
Me${0}
```

#### Use items



## Current SiteConfig

### Conditions

#### Prefix or Autocomplete


siteconfig-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
SiteConfig${0}
```

#### Use items



## Current SiteConfig

### Conditions

#### Prefix or Autocomplete


siteconfig-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
SiteConfig::current_site_config()${0}
```

#### Use items


 - SilverStripe\SiteConfig\SiteConfig

## Current SiteConfig

### Conditions

#### Prefix or Autocomplete


siteconfig-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
SiteConfig::current_site_config()${0}
```

#### Use items



## DB fields

### Conditions

#### Prefix or Autocomplete


dbfields-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## DB indexes

### Conditions

#### Prefix or Autocomplete


dbindexes-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Debug dump

### Conditions

#### Prefix or Autocomplete


debugdump-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Debug::dump(${1});${0}
```

#### Use items


 - SilverStripe\Dev\Debug

## Debug dump

### Conditions

#### Prefix or Autocomplete


debugdump-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Debug::dump(${1});${0}
```

#### Use items



## Debug log

### Conditions

#### Prefix or Autocomplete


debuglog-ss-framework--4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Debug::log(${1});${0}
```

#### Use items



## Debug message

### Conditions

#### Prefix or Autocomplete


debugmessage-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Debug::message(${1});${0}
```

#### Use items


 - SilverStripe\Dev\Debug

## Debug message

### Conditions

#### Prefix or Autocomplete


debugmessage-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Debug::message(${1});${0}
```

#### Use items



## Debug show

### Conditions

#### Prefix or Autocomplete


debugshow-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Debug::show(${1});${0}
```

#### Use items


 - SilverStripe\Dev\Debug

## Debug show

### Conditions

#### Prefix or Autocomplete


debugshow-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Debug::show(${1});${0}
```

#### Use items



## Default DB values

### Conditions

#### Prefix or Autocomplete


defaultdbvalues-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Default sort

### Conditions

#### Prefix or Autocomplete


defaultsort-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```
/**
 * Default sort ordering
 * @var array
 */

```

```
private static \$default_sort = ['${1}' => '${2:ASC}'];${0}
```

#### Use items



## Default sort

### Conditions

#### Prefix or Autocomplete


defaultsort-ss-framework--4.0

#### Composer



#### Language


 - php

### Content

#### Body

```
/**
 * Default sort ordering
 * @var string
 */

```

```
private static \$default_sort = '${1} ${2:ASC}';${0}
```

#### Use items



## displayIf Condition

### Conditions

#### Prefix or Autocomplete


displayifcondition-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
displayIf(${1})${0}
```

#### Use items



## displayUnless Condition

### Conditions

#### Prefix or Autocomplete


displayunlesscondition-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
displayUnless(${1})${0}
```

#### Use items



## DropdownField

### Conditions

#### Prefix or Autocomplete


dropdownfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
DropdownField::create(
	'${1:name}',
	'${2:${1:title}}',
	${3:datalist}
)${0}
```

#### Use items


 - SilverStripe\Forms\DropdownField

## DropdownField

### Conditions

#### Prefix or Autocomplete


dropdownfield-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
DropdownField::create(
	'${1:name}',
	'${2:${1:title}}',
	${3:datalist}
)${0}
```

#### Use items



## Else

### Conditions

#### Prefix or Autocomplete


else-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
<% else %>
	${0}
```

#### Use items



## EmailField

### Conditions

#### Prefix or Autocomplete


emailfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
EmailField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - SilverStripe\Forms\EmailField

## EmailField

### Conditions

#### Prefix or Autocomplete


emailfield-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
EmailField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items



## Embeddable

### Conditions

#### Prefix or Autocomplete


embeddable-ss-silverstripe-embed-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Embeddable::class${0}
```

#### Use items


 - gorriecoe\Embed\Extensions\Embeddable

## EmbeddedObject - Linkable

### Conditions

#### Prefix or Autocomplete


embeddedobjectlinkable-ss-silverstripe-linkable-2.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
EmbeddedObject::class${0}
```

#### Use items


 - Sheadawson\Linkable\Models\EmbeddedObject

## EmbeddedObjectField - Linkable

### Conditions

#### Prefix or Autocomplete


embeddedobjectfieldlinkable-ss-silverstripe-linkable-2.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
EmbeddedObjectField::create(
	'${1:name}',
	'${2:${1:title}}',
	${3}
)${0}
```

#### Use items


 - Sheadawson\Linkable\Models\EmbeddedObject
 - Sheadawson\Linkable\Forms\EmbeddedObjectField

## endsWith Comparison

### Conditions

#### Prefix or Autocomplete


endswithcomparison-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
endsWith(${1})${0}
```

#### Use items



## Escape XML

### Conditions

#### Prefix or Autocomplete


escapexml-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
EscapeXML${0}
```

#### Use items



## Escape XML

### Conditions

#### Prefix or Autocomplete


escapexml-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
EscapeXML()${0}
```

#### Use items



## Extensions

### Conditions

#### Prefix or Autocomplete


extensions-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Fill image

### Conditions

#### Prefix or Autocomplete


fillimage-ss-framework-3.2+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
Fill(${1:width},${2:${1:height}})${0}
```

#### Use items



## Fill image

### Conditions

#### Prefix or Autocomplete


fillimage-ss-framework--3.0

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
CroppedImage(${1:width},${2:${1:height}})${0}
```

#### Use items



## Fill max image

### Conditions

#### Prefix or Autocomplete


fillmaximage-ss-framework-3.2+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
FillMax(${1:width},${2:${1:height}})${0}
```

#### Use items



## First Paragraph

### Conditions

#### Prefix or Autocomplete


firstparagraph-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
FirstParagraph${0}
```

#### Use items



## First Paragraph

### Conditions

#### Prefix or Autocomplete


firstparagraph-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
FirstParagraph()${0}
```

#### Use items



## Fit image

### Conditions

#### Prefix or Autocomplete


fitimage-ss-framework-3.2+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
Fit(${1:width},${2:${1:height}})${0}
```

#### Use items



## Fit Max Image

### Conditions

#### Prefix or Autocomplete


fitmaximage-ss-framework-3.2+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
FitMax(${1:width},${2:${1:height}})${0}
```

#### Use items



## Focus Crop Height Image

### Conditions

#### Prefix or Autocomplete


focuscropheightimage-ss-focuspoint-2.0+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
FocusCropHeight(${1:width})${0}
```

#### Use items



## Focus Crop Width Image

### Conditions

#### Prefix or Autocomplete


focuscropwidthimage-ss-focuspoint-2.0+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
FocusCropWidth(${1:width})${0}
```

#### Use items



## Focus Fill Image

### Conditions

#### Prefix or Autocomplete


focusfillimage-ss-focuspoint-0.0+

#### Composer



#### Language


 - php
 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
FocusFill(${1:width},${2:${1:height}})${0}
```

#### Use items



## Focus Fill Image

### Conditions

#### Prefix or Autocomplete


focusfillimage-ss-focuspoint-0.0+

#### Composer



#### Language


 - php
 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
CroppedFocusedImage(${1:width},${2:${1:height}})${0}
```

#### Use items



## Focus Fill Max Image

### Conditions

#### Prefix or Autocomplete


focusfillmaximage-ss-focuspoint-2.0+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
FocusFillMax(${1:width},${2:${1:height}})${0}
```

#### Use items



## Form

### Conditions

#### Prefix or Autocomplete


form-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
Form${0}
```

#### Use items



## Form

### Conditions

#### Prefix or Autocomplete


form-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
Form::create(
	${0}
)
```

#### Use items



## Get all sessions

### Conditions

#### Prefix or Autocomplete


sessiongetall-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Session::get_all('${1}')${0}
```

#### Use items


 - SilverStripe\Control\Session

## Get all sessions

### Conditions

#### Prefix or Autocomplete


sessiongetall-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Session::get_all('${1}')${0}
```

#### Use items



## Get base folder

### Conditions

#### Prefix or Autocomplete


basefolder-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Director::baseFolder()${0}
```

#### Use items


 - SilverStripe\Control\Director

## Get base folder

### Conditions

#### Prefix or Autocomplete


basefolder-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Director::baseFolder()${0}
```

#### Use items



## Get session value

### Conditions

#### Prefix or Autocomplete


sessionget-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Session::get('${1}')${0}
```

#### Use items


 - SilverStripe\Control\Session

## Get session value

### Conditions

#### Prefix or Autocomplete


sessionget-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Session::get('${1}')${0}
```

#### Use items



## Get the absolute root URL

### Conditions

#### Prefix or Autocomplete


absolutebaseurl-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
AbsoluteBaseURL${0}
```

#### Use items



## Get the absolute root URL

### Conditions

#### Prefix or Autocomplete


absolutebaseurl-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Director::absoluteBaseURL()${0}
```

#### Use items


 - SilverStripe\Control\Director

## Get the absolute root URL

### Conditions

#### Prefix or Autocomplete


absolutebaseurl-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Director::absoluteBaseURL()${0}
```

#### Use items



## Get the root URL

### Conditions

#### Prefix or Autocomplete


baseurl-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
BaseURL${0}
```

#### Use items



## Get the root URL

### Conditions

#### Prefix or Autocomplete


baseurl-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Director::baseURL()${0}
```

#### Use items


 - SilverStripe\Control\Director

## Get the root URL

### Conditions

#### Prefix or Autocomplete


baseurl-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Director::baseURL()${0}
```

#### Use items



## getBetterButtonsActions

### Conditions

#### Prefix or Autocomplete


getbetterbuttonsactions-ss-betterbuttons-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## getCMSFields

### Conditions

#### Prefix or Autocomplete


getcmsfields-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## getCMSFields scafoldless

### Conditions

#### Prefix or Autocomplete


getcmsfieldsscafoldless-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items


 - SilverStripe\Forms\FieldList
 - SilverStripe\Forms\Tab
 - SilverStripe\Forms\TabSet

## getEditForm

### Conditions

#### Prefix or Autocomplete


geteditform-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## getLumberjackTitle

### Conditions

#### Prefix or Autocomplete


getlumberjacktitle-ss-lumberjack-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## getSettingsFields

### Conditions

#### Prefix or Autocomplete


getsettingsfields-ss-cms-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## GridField

### Conditions

#### Prefix or Autocomplete


gridfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
GridField::create(
	'${1:name}',
	'${2:${1:title}}',
	\$this->${1}(),
	${4}
)${0}
```

#### Use items


 - SilverStripe\Forms\GridField\GridField

## GridField

### Conditions

#### Prefix or Autocomplete


gridfield-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
GridField::create(
	'${1:name}',
	'${2:${1:title}}',
	\$this->${1}(),
	${4}
)${0}
```

#### Use items



## GridFieldAddExistingSearchButton

### Conditions

#### Prefix or Autocomplete


gridfieldaddexistingsearchbutton-ss-gridfieldextensions-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
new GridFieldAddExistingSearchButton()${0}
```

#### Use items



## GridFieldAddNewInlineButton

### Conditions

#### Prefix or Autocomplete


gridfieldaddnewinlinebutton-ss-gridfieldextensions-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
new GridFieldAddNewInlineButton()${0}
```

#### Use items



## GridFieldAddNewMultiClass

### Conditions

#### Prefix or Autocomplete


gridfieldaddnewmulticlass-ss-gridfieldextensions-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
new GridFieldAddNewMultiClass())${0}
```

#### Use items



## GridFieldButtonRow

### Conditions

#### Prefix or Autocomplete


gridfieldbuttonrow-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
new GridFieldButtonRow('before')${0}
```

#### Use items


 - SilverStripe\Forms\GridField\GridFieldButtonRow

## GridFieldButtonRow

### Conditions

#### Prefix or Autocomplete


gridfieldbuttonrow-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
new GridFieldButtonRow('before')${0}
```

#### Use items



## GridFieldConfig_Base

### Conditions

#### Prefix or Autocomplete


gridfieldconfig_base-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
GridFieldConfig_Base::create(${1})${0}
```

#### Use items


 - SilverStripe\Forms\GridField\GridFieldConfig_Base

## GridFieldConfig_Base

### Conditions

#### Prefix or Autocomplete


gridfieldconfig_base-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
GridFieldConfig_Base::create(${1})${0}
```

#### Use items



## GridFieldConfig_RecordEditor

### Conditions

#### Prefix or Autocomplete


gridfieldconfig_recordeditor-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
GridFieldConfig_RecordEditor::create(${1})${0}
```

#### Use items


 - SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor

## GridFieldConfig_RecordEditor

### Conditions

#### Prefix or Autocomplete


gridfieldconfig_recordeditor-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
GridFieldConfig_RecordEditor::create(${1})${0}
```

#### Use items



## GridFieldConfig_RecordViewer

### Conditions

#### Prefix or Autocomplete


gridfieldconfig_recordviewer-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
GridFieldConfig_RecordViewer::create(${1})${0}
```

#### Use items


 - SilverStripe\Forms\GridField\GridFieldConfig_RecordViewer

## GridFieldConfig_RecordViewer

### Conditions

#### Prefix or Autocomplete


gridfieldconfig_recordviewer-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
GridFieldConfig_RecordViewer::create(${1})${0}
```

#### Use items



## GridFieldConfig_RelationEditor

### Conditions

#### Prefix or Autocomplete


gridfieldconfig_relationeditor-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
GridFieldConfig_RelationEditor::create(${1})${0}
```

#### Use items


 - SilverStripe\Forms\GridField\GridFieldConfig_RelationEditor

## GridFieldConfig_RelationEditor

### Conditions

#### Prefix or Autocomplete


gridfieldconfig_relationeditor-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
GridFieldConfig_RelationEditor::create(${1})${0}
```

#### Use items



## GridFieldDeleteAction

### Conditions

#### Prefix or Autocomplete


gridfielddeleteaction-ss-gridfieldextensions-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
new GridFieldDeleteAction()${0}
```

#### Use items



## GridFieldEditableColumns

### Conditions

#### Prefix or Autocomplete


gridfieldeditablecolumns-ss-gridfieldextensions-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
new GridFieldEditableColumns()${0}
```

#### Use items



## GridFieldOrderableRows

### Conditions

#### Prefix or Autocomplete


gridfieldorderablerows-ss-gridfieldextensions-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
new GridFieldOrderableRows(${1:'Sort'})${0}
```

#### Use items



## GridFieldSortableRows - sortablegridfield

### Conditions

#### Prefix or Autocomplete


gridfieldsortablerowssortablegridfield-ss-sortablegridfield-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
new GridFieldSortableRows(${1:'Sort'})${0}
```

#### Use items



## GridFieldTitleHeader

### Conditions

#### Prefix or Autocomplete


gridfieldtitleheader-ss-gridfieldextensions-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
new GridFieldTitleHeader()${0}
```

#### Use items



## GridFieldToolbarHeader

### Conditions

#### Prefix or Autocomplete


gridfieldtoolbarheader-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
new GridFieldToolbarHeader()${0}
```

#### Use items


 - SilverStripe\Forms\GridField\GridFieldToolbarHeader

## GroupedDropdownField

### Conditions

#### Prefix or Autocomplete


groupeddropdownfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
GroupedDropdownField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

#### Use items


 - SilverStripe\Forms\GroupedDropdownField

## GroupedDropdownField

### Conditions

#### Prefix or Autocomplete


groupeddropdownfield-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
GroupedDropdownField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

#### Use items



## Has many relationships

### Conditions

#### Prefix or Autocomplete


hasmanyrelationships-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Has one relationships

### Conditions

#### Prefix or Autocomplete


hasonerelationships-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## hasCheckedAtLeast Comparison

### Conditions

#### Prefix or Autocomplete


hascheckedatleastcomparison-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
hasCheckedAtLeast(${1})${0}
```

#### Use items



## hasCheckedLessThan Comparison

### Conditions

#### Prefix or Autocomplete


hascheckedlessthancomparison-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
hasCheckedLessThan(${1})${0}
```

#### Use items



## hasCheckedOption Comparison

### Conditions

#### Prefix or Autocomplete


hascheckedoptioncomparison-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
hasCheckedOption(${1})${0}
```

#### Use items



## HeaderField

### Conditions

#### Prefix or Autocomplete


headerfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
HeaderField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - SilverStripe\Forms\HeaderField

## HiddenField

### Conditions

#### Prefix or Autocomplete


hiddenfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
HiddenField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - SilverStripe\Forms\HiddenField

## HiddenField

### Conditions

#### Prefix or Autocomplete


hiddenfield-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
HiddenField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items



## Hide ancestor

### Conditions

#### Prefix or Autocomplete


hideancestor-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## hideIf Condition

### Conditions

#### Prefix or Autocomplete


hideifcondition-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
hideIf(${1})${0}
```

#### Use items



## hideUnless Condition

### Conditions

#### Prefix or Autocomplete


hideunlesscondition-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
hideUnless(${1})${0}
```

#### Use items



## HTMLEditorField

### Conditions

#### Prefix or Autocomplete


htmleditorfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
HtmlEditorField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - SilverStripe\Forms\HTMLEditor\HtmlEditorField

## If

### Conditions

#### Prefix or Autocomplete


if-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
<% if ${1} %>
	${2}
<% end_if %>${0}
```

#### Use items



## If else

### Conditions

#### Prefix or Autocomplete


ifelse-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
<% if ${1} %>
	${2}
<% else %>
	${3}
<% end_if %>${0}
```

#### Use items



## If Loop

### Conditions

#### Prefix or Autocomplete


ifloop-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
<% if ${1} %>
	<% loop ${1} %>
		${2}
	<% end_loop %>
<% end_if %>${0}
```

#### Use items



## If not

### Conditions

#### Prefix or Autocomplete


ifnot-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
<% if not ${1} %>
	${2}
<% end_if %>${0}
```

#### Use items



## if With

### Conditions

#### Prefix or Autocomplete


ifwith-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
<% if ${1} %>
	<% with ${1} %>
		${2}
	<% end_with %>
<% end_if %>${0}
```

#### Use items



## Image

### Conditions

#### Prefix or Autocomplete


image-ss-assets-1.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Image::class${0}
```

#### Use items


 - SilverStripe\Assets\Image

## Include

### Conditions

#### Prefix or Autocomplete


include-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
<% include ${1} %>${0}
```

#### Use items



## inSection Linking Mode

### Conditions

#### Prefix or Autocomplete


insectionlinkingmode-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
inSection(${1:page-url})${0}
```

#### Use items



## isBetween Comparison

### Conditions

#### Prefix or Autocomplete


isbetweencomparison-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
isBetween(${1})${0}
```

#### Use items



## isChecked Comparison

### Conditions

#### Prefix or Autocomplete


ischeckedcomparison-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
isChecked()${0}
```

#### Use items



## isCurrent Linking Mode

### Conditions

#### Prefix or Autocomplete


iscurrentlinkingmode-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
isCurrent${0}
```

#### Use items



## isEmpty Comparison

### Conditions

#### Prefix or Autocomplete


isemptycomparison-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
isEmpty(${1})${0}
```

#### Use items



## isEqualTo Comparison

### Conditions

#### Prefix or Autocomplete


isequaltocomparison-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
isEqualTo(${1})${0}
```

#### Use items



## isGreaterThan Comparison

### Conditions

#### Prefix or Autocomplete


isgreaterthancomparison-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
isGreaterThan(${1})${0}
```

#### Use items



## isLessThan Comparison

### Conditions

#### Prefix or Autocomplete


islessthancomparison-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
isLessThan(${1})${0}
```

#### Use items



## isNotChecked Comparison

### Conditions

#### Prefix or Autocomplete


isnotcheckedcomparison-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
isNotChecked()${0}
```

#### Use items



## isNotEmpty Comparison

### Conditions

#### Prefix or Autocomplete


isnotemptycomparison-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
isNotEmpty(${1})${0}
```

#### Use items



## isNotEqualTo Comparison

### Conditions

#### Prefix or Autocomplete


isnotequaltocomparison-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
isNotEqualTo(${1})${0}
```

#### Use items



## isSection Linking Mode

### Conditions

#### Prefix or Autocomplete


issectionlinkingmode-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
isSection${0}
```

#### Use items



## LabelField

### Conditions

#### Prefix or Autocomplete


labelfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
LabelField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - SilverStripe\Forms\LabelField

## LabelField

### Conditions

#### Prefix or Autocomplete


labelfield-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
LabelField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items



## Level

### Conditions

#### Prefix or Autocomplete


level-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
Level(${1:1})${0}
```

#### Use items



## Limit Characters

### Conditions

#### Prefix or Autocomplete


limitcharacters-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
LimitCharacters(${1:20},${2:'...'})${0}
```

#### Use items



## Limit Word Count

### Conditions

#### Prefix or Autocomplete


limitwordcount-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
LimitWordCount(${1:26},${2:'...'})${0}
```

#### Use items



## Link - Linkable

### Conditions

#### Prefix or Autocomplete


linklinkable-ss-silverstripe-linkable-2.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Link::class${0}
```

#### Use items


 - Sheadawson\Linkable\Models

## Link - silverstripe-link

### Conditions

#### Prefix or Autocomplete


linksilverstripelink-ss-silverstripe-link-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Link::class${0}
```

#### Use items


 - gorriecoe\Link\Models\Link

## LinkField - Linkable

### Conditions

#### Prefix or Autocomplete


linkfieldlinkable-ss-silverstripe-linkable-2.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
LinkField::create(
	'${1:name}ID',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - Sheadawson\Linkable\Models
 - Sheadawson\Linkable\Forms\LinkField

## LinkField - silverstripe-link

### Conditions

#### Prefix or Autocomplete


linkfieldsilverstripelink-ss-silverstripe-linkfield-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
LinkField::create(
	'${1:name}',
	'${2:${1:title}}',
	${3:$this}
)${0}
```

#### Use items


 - gorriecoe\Link\Models\Link
 - gorriecoe\LinkField\LinkField

## ListboxField

### Conditions

#### Prefix or Autocomplete


listboxfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
ListboxField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

#### Use items


 - SilverStripe\Forms\ListboxField

## ListboxField

### Conditions

#### Prefix or Autocomplete


listboxfield-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
ListboxField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

#### Use items



## LookupField

### Conditions

#### Prefix or Autocomplete


lookupfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
LookupField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

#### Use items


 - SilverStripe\Forms\LookupField

## LookupField

### Conditions

#### Prefix or Autocomplete


lookupfield-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
LookupField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

#### Use items



## Loop

### Conditions

#### Prefix or Autocomplete


loop-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
<% loop ${1} %>
	${2}
<% end_loop %>${0}
```

#### Use items



## Main translator function

### Conditions

#### Prefix or Autocomplete


_t-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
_t(
	__CLASS__ . '.${1/([a-zA-Z]*)([^a-zA-Z]*)/\U$1/}',
	'${2:${1}}'
)${0}
```

#### Use items



## Main translator function

### Conditions

#### Prefix or Autocomplete


_t-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
<%t ${1/([a-zA-Z.]*)([^a-zA-Z.]*)/\U$1/} '${2:${1}}' %>${0}
```

#### Use items



## Many many extraFields

### Conditions

#### Prefix or Autocomplete


manymanyextrafields-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Many many relationships

### Conditions

#### Prefix or Autocomplete


manymanyrelationships-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Menu

### Conditions

#### Prefix or Autocomplete


menu-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
Menu(${1:page-url})${0}
```

#### Use items



## Menu icon

### Conditions

#### Prefix or Autocomplete


menuicon-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```
/**
 * Menu icon for Left and Main CMS
 *  @var string
 */

```

```
private static \$menu_icon = '${1}';${0}
```

#### Use items



## Menu title

### Conditions

#### Prefix or Autocomplete


menutitle-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```
/**
 * Menu title for Left and Main CMS
 *  @var string
 */

```

```
private static \$menu_title = '${1}';${0}
```

#### Use items



## Menu Title

### Conditions

#### Prefix or Autocomplete


menutitle-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
MenuTitle${0}
```

#### Use items



## MetaTags

### Conditions

#### Prefix or Autocomplete


metatags-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
MetaTags${0}
```

#### Use items



## No HTML

### Conditions

#### Prefix or Autocomplete


nohtml-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
NoHTML${0}
```

#### Use items



## No HTML

### Conditions

#### Prefix or Autocomplete


nohtml-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
NoHTML()${0}
```

#### Use items



## NullableField

### Conditions

#### Prefix or Autocomplete


nullablefield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
NullableField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - SilverStripe\Forms\NullableField

## NullableField

### Conditions

#### Prefix or Autocomplete


nullablefield-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
NullableField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items



## NumericField

### Conditions

#### Prefix or Autocomplete


numericfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
NumericField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - SilverStripe\Forms\NumericField

## NumericField

### Conditions

#### Prefix or Autocomplete


numericfield-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
NumericField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items



## NumericField readonly

### Conditions

#### Prefix or Autocomplete


numericfieldreadonly-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
NumericField_Readonly::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - SilverStripe\Forms\NumericField_Readonly

## NumericField readonly

### Conditions

#### Prefix or Autocomplete


numericfieldreadonly-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
NumericField_Readonly::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items



## onAfterDelete event handler

### Conditions

#### Prefix or Autocomplete


onafterdeleteeventhandler-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## onAfterWrite event handler

### Conditions

#### Prefix or Autocomplete


onafterwriteeventhandler-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## onBeforeDelete event handler

### Conditions

#### Prefix or Autocomplete


onbeforedeleteeventhandler-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## onBeforeWrite event handler

### Conditions

#### Prefix or Autocomplete


onbeforewriteeventhandler-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## OptionsetField

### Conditions

#### Prefix or Autocomplete


optionsetfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
OptionsetField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

#### Use items


 - SilverStripe\Forms\OptionsetField

## OptionsetField

### Conditions

#### Prefix or Autocomplete


optionsetfield-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
OptionsetField::create(
	'${1:name}',
	'${2:${1:title}}',
	'${3:datalist}'
)${0}
```

#### Use items



## Pad image

### Conditions

#### Prefix or Autocomplete


padimage-ss-framework-3.2+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
Pad(${1:width},${2:${1:height}},${3:#fff})${0}
```

#### Use items



## Pad image

### Conditions

#### Prefix or Autocomplete


padimage-ss-framework--3.2

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
PaddedImage(${1:width},${2:${1:height}},${3:#fff})${0}
```

#### Use items



## Page

### Conditions

#### Prefix or Autocomplete


page-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
Page(${1:page-url})${0}
```

#### Use items



## Permission check

### Conditions

#### Prefix or Autocomplete


permissioncheck-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Permission::check(${1:string|array}, ${2:'any'}, ${3:$member})${0}
```

#### Use items


 - SilverStripe\Security\Permission

## Permission check

### Conditions

#### Prefix or Autocomplete


permissioncheck-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Permission::check(${1:string|array}, ${2:'any'}, ${3:$member})${0}
```

#### Use items



## Plural name

### Conditions

#### Prefix or Autocomplete


pluralname-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```
/**
 * Plural name for CMS
 *  @var string
 */

```

```
private static \$plural_name = '${1}';${0}
```

#### Use items



## providePermissions

### Conditions

#### Prefix or Autocomplete


providepermissions-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items


 - SilverStripe\Security\PermissionProvider

## providePermissions

### Conditions

#### Prefix or Autocomplete


providepermissions-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## ReadonlyField

### Conditions

#### Prefix or Autocomplete


readonlyfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
ReadonlyField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - SilverStripe\Forms\ReadonlyField

## ReadonlyField

### Conditions

#### Prefix or Autocomplete


readonlyfield-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
ReadonlyField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items



## Redirect

### Conditions

#### Prefix or Autocomplete


redirect-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Director::redirect(${1})${0}
```

#### Use items


 - SilverStripe\Control\Director

## Redirect

### Conditions

#### Prefix or Autocomplete


redirect-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Director::redirect(${1})${0}
```

#### Use items



## Relationship ownership

### Conditions

#### Prefix or Autocomplete


owns-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```
/**
 * Relationship version ownership
 * @var array
 */

```

```
/**
 
/
private static \$owns = [
	'${1}'
];${0}
```

#### Use items



## Relative Link

### Conditions

#### Prefix or Autocomplete


relativelink-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
Link${0}
```

#### Use items



## Remove extra class

### Conditions

#### Prefix or Autocomplete


removeextraclass-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
removeExtraClass('${1}')${0}
```

#### Use items



## removeByName

### Conditions

#### Prefix or Autocomplete


removebyname-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
removeByName([
	'${0}'
]);
```

#### Use items



## removeComponentsByType

### Conditions

#### Prefix or Autocomplete


removecomponentsbytype-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
removeComponentsByType(${1})${0}
```

#### Use items



## Require CSS

### Conditions

#### Prefix or Autocomplete


requirecss-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
<% require css('${1}') %>${0}
```

#### Use items



## Require CSS

### Conditions

#### Prefix or Autocomplete


requirecss-ss-framework--4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Requirements::css('${1}');${0}
```

#### Use items



## Require CSS

### Conditions

#### Prefix or Autocomplete


requirecss-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Requirements::css('${1}');${0}
```

#### Use items


 - SilverStripe\View\Requirements

## Require Javascript

### Conditions

#### Prefix or Autocomplete


requirejavascript-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
<% require javascript('${1}') %>${0}
```

#### Use items



## Require Javascript

### Conditions

#### Prefix or Autocomplete


requirejavascript-ss-framework--4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Requirements::javascript('${1}');${0}
```

#### Use items



## Require Javascript

### Conditions

#### Prefix or Autocomplete


requirejavascript-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Requirements::javascript('${1}');${0}
```

#### Use items


 - SilverStripe\View\Requirements

## Require themed CSS

### Conditions

#### Prefix or Autocomplete


requirethemedcss-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
<% require themedCSS('${1}') %>${0}
```

#### Use items



## Require themed CSS

### Conditions

#### Prefix or Autocomplete


requirethemedcss-ss-framework--4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Requirements::themedCSS('${1}');${0}
```

#### Use items



## Require themed CSS

### Conditions

#### Prefix or Autocomplete


requirethemedcss-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Requirements::themedCSS('${1}');${0}
```

#### Use items


 - SilverStripe\View\Requirements

## Require themed javascript

### Conditions

#### Prefix or Autocomplete


requirethemedjavascript-ss-framework-3.5+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
<% require themedJavascript('${1}') %>${0}
```

#### Use items



## Require themed javascript

### Conditions

#### Prefix or Autocomplete


requirethemedjavascript-ss-framework-3.5-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Requirements::themedJavascript('${1}');${0}
```

#### Use items



## Require themed javascript

### Conditions

#### Prefix or Autocomplete


requirethemedjavascript-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Requirements::themedJavascript('${1}');${0}
```

#### Use items


 - SilverStripe\View\Requirements

## Required

### Conditions

#### Prefix or Autocomplete


required-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Required()${0}
```

#### Use items



## Requirement block

### Conditions

#### Prefix or Autocomplete


requirementblock-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Requirements::block('${1}');${0}
```

#### Use items


 - SilverStripe\View\Requirements

## Scale Height Image

### Conditions

#### Prefix or Autocomplete


scaleheightimage-ss-framework--3.2

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
SetHeight(${1:height})${0}
```

#### Use items



## Scale Height Image

### Conditions

#### Prefix or Autocomplete


scaleheightimage-ss-framework-3.2+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
ScaleHeight(${1:height})${0}
```

#### Use items



## Scale Max Height Image

### Conditions

#### Prefix or Autocomplete


scalemaxheightimage-ss-framework-3.2+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
ScaleMaxHeight(${1:height})${0}
```

#### Use items



## Scale Max Width Image

### Conditions

#### Prefix or Autocomplete


scalemaxwidthimage-ss-framework-3.2+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
ScaleMaxWidth(${1:width})${0}
```

#### Use items



## Scale Width Image

### Conditions

#### Prefix or Autocomplete


scalewidthimage-ss-framework--3.2

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
SetWidth(${1:width})${0}
```

#### Use items



## Scale Width Image

### Conditions

#### Prefix or Autocomplete


scalewidthimage-ss-framework-3.2+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
ScaleWidth(${1:width})${0}
```

#### Use items



## Searchable fields

### Conditions

#### Prefix or Autocomplete


searchablefields-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## SegmentField

### Conditions

#### Prefix or Autocomplete


segmentfield-ss-segment-field-2.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
SegmentField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - SilverStripe\Forms\SegmentField

## SegmentField

### Conditions

#### Prefix or Autocomplete


segmentfield-ss-segment-field--2.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
SegmentField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items



## Set allowed extensions

### Conditions

#### Prefix or Autocomplete


setallowedextensions-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
setAllowedExtensions(array(${1}))${0}
```

#### Use items



## Set allowed file categories

### Conditions

#### Prefix or Autocomplete


setallowedfilecategories-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
setAllowedFileCategories(array(${1}))${0}
```

#### Use items



## Set allowed max file number

### Conditions

#### Prefix or Autocomplete


setallowedmaxfilenumber-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
setAllowedMaxFileNumber(${1:null})${0}
```

#### Use items



## Set can attach existing

### Conditions

#### Prefix or Autocomplete


setcanattachexisting-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
setCanAttachExisting(${1:true})${0}
```

#### Use items



## Set can upload

### Conditions

#### Prefix or Autocomplete


setcanupload-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
setCanUpload(${1:true})${0}
```

#### Use items



## Set description

### Conditions

#### Prefix or Autocomplete


setdescription-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
setDescription('${1}')${0}
```

#### Use items



## Set folder name

### Conditions

#### Prefix or Autocomplete


setfoldername-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
setFolderName('${1}')${0}
```

#### Use items



## Set Ratio Size Image

### Conditions

#### Prefix or Autocomplete


setratiosizeimage-ss-framework-3.2+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
SetRatioSize(${1:width},${2:${1:height}})${0}
```

#### Use items



## Set session value

### Conditions

#### Prefix or Autocomplete


sessionset-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Session::set('${1}', ${2})${0}
```

#### Use items


 - SilverStripe\Control\Session

## Set session value

### Conditions

#### Prefix or Autocomplete


sessionset-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Session::set('${1}', ${2})${0}
```

#### Use items



## Set Size Image

### Conditions

#### Prefix or Autocomplete


setsizeimage-ss-framework-3.2+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
SetSize(${1:width},${2:${1:height}})${0}
```

#### Use items



## setAttribute

### Conditions

#### Prefix or Autocomplete


setattribute-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
setAttribute('${1}', '${2}')${0}
```

#### Use items



## setColumns

### Conditions

#### Prefix or Autocomplete


setcolumns-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
setColumns(${1})${0}
```

#### Use items



## setEmptyString

### Conditions

#### Prefix or Autocomplete


setemptystring-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
setEmptyString('${1}')${0}
```

#### Use items



## setLeftTitle

### Conditions

#### Prefix or Autocomplete


setlefttitle-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
setLeftTitle('${1}')${0}
```

#### Use items



## setName

### Conditions

#### Prefix or Autocomplete


setname-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
setName('${1}')${0}
```

#### Use items



## setRightTitle

### Conditions

#### Prefix or Autocomplete


setrighttitle-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
setRightTitle('${1}')${0}
```

#### Use items



## setRows

### Conditions

#### Prefix or Autocomplete


setrows-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
setRows(${1})${0}
```

#### Use items



## setTitle

### Conditions

#### Prefix or Autocomplete


settitle-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
setTitle('${1}')${0}
```

#### Use items



## setValue

### Conditions

#### Prefix or Autocomplete


setvalue-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
setValue(${1})${0}
```

#### Use items



## Show in sitetree

### Conditions

#### Prefix or Autocomplete


showinsitetree-ss-lumberjack-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```
/**
 * Defines whether a page is displayed within the site tree
 * @var boolean
 */

```

```
private static $show_in_sitetree = ${1:false};${0}
```

#### Use items



## Singular name

### Conditions

#### Prefix or Autocomplete


singularname-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```
/**
 * Singular name for CMS
 *  @var string
 */

```

```
private static \$singular_name = '${1}';${0}
```

#### Use items



## SortableUploadField - sortablefile

### Conditions

#### Prefix or Autocomplete


sortableuploadfieldsortablefile-ss-sortablefile-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
SortableUploadField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - Bummzack\SortableFile\Forms\SortableUploadField

## SortableUploadField - sortablefile

### Conditions

#### Prefix or Autocomplete


sortableuploadfieldsortablefile-ss-sortablefile-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
SortableUploadField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items



## SS_Log

### Conditions

#### Prefix or Autocomplete


ss_log-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
Injector::inst()->get(LoggerInterface::class)->${2:error}('${1}');${0}
```

#### Use items


 - Psr\Log\LoggerInterface
 - SilverStripe\Core\Injector\Injector

## SS_Log

### Conditions

#### Prefix or Autocomplete


ss_log-ss-framework--4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
SS_Log::log('${1}', ${2:SS_Log::ERR});${0}
```

#### Use items



## startsWith Comparison

### Conditions

#### Prefix or Autocomplete


startswithcomparison-ss-display-logic-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
startsWith(${1})${0}
```

#### Use items



## StringTagField

### Conditions

#### Prefix or Autocomplete


stringtagfield-ss-tagfield-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
StringTagField::create(
	'${1:name}',
	'${2:${1:title}}',
	${3:[]},
	explode(',', \$this->${1:name})
)${0}
```

#### Use items



## Summary fields

### Conditions

#### Prefix or Autocomplete


summaryfields-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Table name

### Conditions

#### Prefix or Autocomplete


tablename-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```
/**
 * Defines the database table name
 *  @var string
 */

```

```
private static \$table_name = '${1}';${0}
```

#### Use items



## TagField

### Conditions

#### Prefix or Autocomplete


tagfield-ss-tagfield-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
TagField::create(
	'${1:name}',
	'${2:${1:title}}',
	${3:null},
	${4}
)${0}
```

#### Use items



## TextareaField

### Conditions

#### Prefix or Autocomplete


textareafield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
TextareaField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - SilverStripe\Forms\TextareaField

## TextareaField

### Conditions

#### Prefix or Autocomplete


textareafield-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
TextareaField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items



## TextField

### Conditions

#### Prefix or Autocomplete


textfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
TextField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - SilverStripe\Forms\TextField

## TextField

### Conditions

#### Prefix or Autocomplete


textfield-ss-framework-3.0-4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
TextField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items



## Theme directory

### Conditions

#### Prefix or Autocomplete


themedirectory-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
ThemeDir${0}
```

#### Use items



## Theme directory

### Conditions

#### Prefix or Autocomplete


themedirectory-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
$this->ThemeDir()${0}
```

#### Use items



## Title

### Conditions

#### Prefix or Autocomplete


title-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
Title${0}
```

#### Use items



## Top Level Scope

### Conditions

#### Prefix or Autocomplete


toplevelscope-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
Top${0}
```

#### Use items



## Translatable db fields

### Conditions

#### Prefix or Autocomplete


translatabledbfields-ss-silverstripe-fluent-0.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## Traverse Up Scope

### Conditions

#### Prefix or Autocomplete


traverseupscope-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
Up${0}
```

#### Use items



## TreeDropdownField

### Conditions

#### Prefix or Autocomplete


treedropdownfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
TreeDropdownField::create(
	'${1:name}ID',
	'${2:${1:title}}',
	${3:SiteTree::class}
)${0}
```

#### Use items


 - SilverStripe\Forms\TreeDropdownField
 - SilverStripe\CMS\Model\SiteTree

## TreeDropdownField

### Conditions

#### Prefix or Autocomplete


treedropdownfield-ss-framework--4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
TreeDropdownField::create(
	'${1:name}ID',
	'${2:${1:title}}',
	'${3:SiteTree}'
)${0}
```

#### Use items



## TreeDropdownField readonly

### Conditions

#### Prefix or Autocomplete


treedropdownfieldreadonly-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
TreeDropdownField_Readonly::create(
	'${1:name}ID',
	'${2:${1:title}}',
	${3:SiteTree::class}
)${0}
```

#### Use items


 - SilverStripe\Forms\TreeDropdownField_Readonly
 - SilverStripe\CMS\Model\SiteTree

## TreeDropdownField readonly

### Conditions

#### Prefix or Autocomplete


treedropdownfieldreadonly-ss-framework--4.0

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
TreeDropdownField_Readonly::create(
	'${1:name}ID',
	'${2:${1:title}}',
	'${3:SiteTree}'
)${0}
```

#### Use items



## updateCMSFields

### Conditions

#### Prefix or Autocomplete


updatecmsfields-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items


 - SilverStripe\Forms\FieldList

## UploadField

### Conditions

#### Prefix or Autocomplete


uploadfield-ss-framework-4.0+

#### Composer



#### Language


 - php

### Content

#### Body

```

```

```
UploadField::create(
	'${1:name}',
	'${2:${1:title}}'
)${0}
```

#### Use items


 - SilverStripe\AssetAdmin\Forms\UploadField

## URL handlers

### Conditions

#### Prefix or Autocomplete


urlhandlers-ss-framework-3.0+

#### Composer



#### Language


 - php

### Content

#### Body

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

#### Use items



## URLSegment

### Conditions

#### Prefix or Autocomplete


urlsegment-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - php
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
URLSegment${0}
```

#### Use items



## With

### Conditions

#### Prefix or Autocomplete


with-ss-framework-3.0+

#### Composer



#### Language


 - ss
 - ss
 - silverstripe
 - SilverStripe

### Content

#### Body

```

```

```
<% with ${1} %>
	${2}
<% end_with %>${0}
```

#### Use items


