<script setup lang="ts">
import { useModal } from 'vue-final-modal'
import MyModal from './MyModal.vue'

const { open } = useModal({
    component: MyModal,
    attrs: {
        title: 'Hello World!',
    },
    slots: {
        default: '<p>The content of the modal</p>',
        footer: '<p>The footer of the modal</p>',
    },
})
</script>

<template>
    <button @click="() => open()">
        Open Modal
    </button>
</template>
