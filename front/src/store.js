import { writable } from "svelte/store";
export const count = writable(10);

export const isLoading = writable(false);

export const defaultAlert = (() => {
  const defaultValue = {
    isOpen: false,
    title: "알림 제목",
    message: "알림 메시지",
    buttonTextConfirm: "확인",
    buttonTextCancel: "취소",
    onConfirm: () => {
      //   console.log("onClick");
    },

    onCancel: () => {
      //   console.log("onCancel");
    },
  };

  const { subscribe, set, update } = writable(defaultValue);

  return {
    subscribe,
    closeModal: () => {
      defaultValue.onCancel();
      update((v) => {
        return { ...v, isOpen: false };
      });
    },
    openModal: ({
      title = defaultValue.title,
      message = defaultValue.message,
      buttonTextConfirm = defaultValue.buttonTextConfirm,
      buttonTextCancel = defaultValue.buttonTextCancel,
      onConfirm = defaultValue.onConfirm,
      onCancel = defaultValue.onCancel,
    }) => {
      update((v) => ({
        isOpen: true,
        title,
        message,
        buttonTextConfirm,
        buttonTextCancel,
        onConfirm,
        onCancel,
      }));
    },
  };
})();
