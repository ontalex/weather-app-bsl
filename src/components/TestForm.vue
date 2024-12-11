<template>
  <div class="p-3">
    <form action="">
      <input
        :class="[
          'form-control',
          {
            'is-invalid': hasErrors,
          },
        ]"
        type="text"
        :placeholder="1 > 0 ? 'Занятия закончились' : 'Ещё пашем, время есть'"
        ref="inputField"
      />
    </form>

    <button class="none btn btn-primary w-100" type="button" @click="hasErrors = !hasErrors">
      Кнопка
    </button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, useTemplateRef, ref } from 'vue'

const hasErrors = ref(false)

const inputField = useTemplateRef('inputField')

// Как сделать фокус на инпут-поле

onMounted(() => {
  inputField.value?.focus()
})
</script>
