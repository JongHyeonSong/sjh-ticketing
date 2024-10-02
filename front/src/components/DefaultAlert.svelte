<script>
  import { writable } from "svelte/store";
  import { defaultAlert, isLoading } from "../store.js";
  import { onMount, onDestroy } from "svelte";

  let modalRef;
  $: if ($defaultAlert) {
    if ($defaultAlert.isOpen) {
      modalRef.click();
    }
  }

  // $def

  const onCancel = () => {
    defaultAlert.closeModal();
  };
</script>

<input
  bind:this={modalRef}
  type="checkbox"
  id="default_modal"
  class="modal-toggle"
/>
<div class="modal" role="dialog">
  <div class="modal-box">
    <h3 class="text-lg font-bold">{$defaultAlert.title}</h3>
    <p class="py-4">{@html $defaultAlert.message}</p>
    <div class="modal-action">
      <label for="default_modal" class="btn btn-error" on:click={onCancel}
        >{$defaultAlert.buttonTextCancel}</label
      >
      <label for="default_modal" class="btn btn-primary" on:click={onCancel}
        >{$defaultAlert.buttonTextConfirm}</label
      >
    </div>
  </div>
</div>
