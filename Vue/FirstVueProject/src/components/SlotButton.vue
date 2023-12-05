<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Teams        -->
<!-- Date: 28 November 2023         -->
<!-- Desc: Generic Button with Slot -->

<template>

<button>
    <slot> </slot>
</button>

</template>

<style scoped>

    button {
        border: 0px solid white;
        border-radius: 20px;
        padding: 5px 10px;
        
        font-style: normal;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        
        color: white;
        background-color: #000000;
        transition: font-size 200ms, border-width 50ms;
    }

    button:hover {
        border-width: 1px;
        cursor: pointer;
        font-size: 0.85em;
    }
</style>