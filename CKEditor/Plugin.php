<?php
/**
 * CKEditor 5 for Typecho
 *
 * @package CKEditor
 * @author l2dy
 * @version 0.0.1
 */
class CKEditor_Plugin implements Typecho_Plugin_Interface
{
    const TEMPLATES_PATH = __DIR__ . DIRECTORY_SEPARATOR . 'templates';

    public static function activate() {
        Typecho_Plugin::factory('admin/write-post.php')->richEditor = array('CKEditor_Plugin', 'render');
        Typecho_Plugin::factory('admin/write-page.php')->richEditor = array('CKEditor_Plugin', 'render');
    }

    public static function deactivate() {}

    public static function config(Typecho_Widget_Helper_Form $form) {}

    public static function personalConfig(Typecho_Widget_Helper_Form $form) {}

    public static function render() {
        include_once self::TEMPLATES_PATH . DIRECTORY_SEPARATOR . 'main.php';
    }
}
