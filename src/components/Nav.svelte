<script>
    export let currentPath = '/';
    
    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/faq', label: 'FAQ' },
        { href: '/help', label: 'Help' },
        { href: '/changelogs', label: 'Changelogs' },
        { href: '/archive', label: 'Archive' }
    ];
</script>

<nav>
    <a href="/" class="nav-logo">
        <img src="https://z-cdn-media.chatglm.cn/files/9f4b7762-ff85-415c-a278-8a616914d4df.png?auth_key=1867683445-e151a0e2b9cb4026a88d17cc569744a5-0-73870e74fdfd32b50269b86c10c14b7e" alt="Vanced Logo" class="nav-logo-img">
        Vanced Official
    </a>
    <div class="nav-links">
        {#each navItems as item}
            <a href={item.href} class:active={currentPath === item.href}>{item.label}</a>
        {/each}
    </div>
</nav>
