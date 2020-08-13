<?php

use SilverStripe\View\Requirements;
use SilverStripe\Control\Director;
use SilverStripe\CMS\Controllers\ContentController;

class PageController extends ContentController
{
    public function doInit()
    {
        parent::doInit();
        Requirements::themedCSS('app');
        Requirements::themedJavascript('manifest');
        Requirements::themedJavascript('vendor');
        Requirements::themedJavascript('app');
        Requirements::set_force_js_to_bottom(true);
    }

    public function IsLive()
    {
        return Director::isLive();
    }
}
