{* WhatsApp floating button injected on all pages *}
{assign var=enabled value=$oPlugin->oPluginEinstellungAssoc_arr.enabled}
{if $enabled == 'Y'}
	{assign var=phone value=$oPlugin->oPluginEinstellungAssoc_arr.whatsapp_phone}
	{assign var=msg value=$oPlugin->oPluginEinstellungAssoc_arr.default_message}
	<link rel="stylesheet" href="{$oPlugin->cFrontendPfadURL}css/whatsapp.css" />
	<script defer src="{$oPlugin->cFrontendPfadURL}js/whatsapp.js"></script>
	<div id="wa-floating-button" data-wa-phone="{$phone|escape}" data-wa-message="{$msg|escape}"></div>
{/if}
