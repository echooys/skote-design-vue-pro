export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'ok',
  }),
  actions: {
    changeName(name: string) {
      this.name = name;
    },
  },
});
