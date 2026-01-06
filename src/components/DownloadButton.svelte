<script>
    export let href = '#';
    export let label = 'Download';
    export let sublabel = '';
    export let variant = 'dark'; // 'primary' or 'dark'
</script>

{#if variant === 'primary'}
    <a {href} class="button-primary">
        <span style="display:flex; align-items:center; gap:8px;">
            {label}
            <svg class="icon-download" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
        </span>
    </a>
{:else}
    <a {href} class="button-dark">
        <div class="button-dark-content">
            <span>{label}</span>
            <svg class="icon-download" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
        </div>
        {#if sublabel}
            <span class="text-muted">{sublabel}</span>
        {/if}
    </a>
{/if}
