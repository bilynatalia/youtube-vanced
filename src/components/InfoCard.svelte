<script>
    export let title = '';
    export let borderColor = 'var(--accent-blue)';
</script>

<div class="info-card" style="border-left-color: {borderColor};">
    {#if title}
        <h3>{title}</h3>
    {/if}
    <p class="content-text">
        <slot />
    </p>
</div>
