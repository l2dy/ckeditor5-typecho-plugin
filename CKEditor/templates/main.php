<?php if(!defined('__TYPECHO_ADMIN__')) exit; ?>
<?php
$pluginUrl = Typecho_COMMON::url('CKEditor', Helper::options()->pluginUrl);
?>
<script src="<?php echo $pluginUrl . '/ckeditor/ckeditor.js'; ?>"></script>
<script src="<?php echo $pluginUrl . '/templates/ck_init.js'; ?>"></script>
