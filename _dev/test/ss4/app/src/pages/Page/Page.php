<?php

use SilverStripe\Core\ClassInfo;
use SilverStripe\Security\Permission;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\Security\PermissionProvider;

class Page extends SiteTree implements PermissionProvider
{
    /**
     * Return a map of permission codes to add to the dropdown shown in the Security section of the CMS
     * @return array
     */
    public function providePermissions()
    {
        $permissions = array();
        foreach (ClassInfo::subclassesFor('Page') as $key => $value) {
            $classNameUpper = strtoupper($key);
            $name = singleton($key)->i18n_singular_name();

            $permissions[$classNameUpper . 'CREATE'] = array(
                'name' => 'Create any \'' . $name . '\'',
                'category' => 'SiteTree \'' . $name . '\' permissions'
            );
            $permissions[$classNameUpper . 'EDIT'] = array(
                'name' => 'Edit any \'' . $name . '\'',
                'category' => 'SiteTree \'' . $name . '\' permissions'
            );
            $permissions[$classNameUpper . 'DELETE'] = array(
                'name' => 'Delete any \'' . $name . '\'',
                'category' => 'SiteTree \'' . $name . '\' permissions'
            );
        }
        return $permissions;
    }

    /**
     * DataObject edit permissions
     * @param Member $member
     * @return boolean
     */
    public function canEdit($member = null)
    {
        return Permission::check(strtoupper($this->ClassName) . 'EDIT', 'any', $member);
    }

    /**
     * DataObject delete permissions
     * @param Member $member
     * @return boolean
     */
    public function canDelete($member = null)
    {
        return Permission::check(strtoupper($this->ClassName) . 'EDIT', 'any', $member);
    }

    /**
     * DataObject create permissions
     * @param Member $member
     * @param array $context Additional context-specific data which might
     * affect whether (or where) this object could be created.
     * @return boolean
     */
    public function canCreate($member = null, $context = [])
    {
        return Permission::check(strtoupper($this->ClassName) . 'EDIT', 'any', $member);
    }
}
