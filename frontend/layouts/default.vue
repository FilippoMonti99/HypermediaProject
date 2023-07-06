<!--
    Default layout used by all the page
-->
<template>
    <div class = 'page'>
        <TheHeader />
        <slot />
        <TheFooter />
    </div>
</template>

<style>
    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #332c53;
        
    }
</style>

