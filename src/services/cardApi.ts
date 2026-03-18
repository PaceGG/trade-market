const card = {
  async getCards() {
    return [
      {
        id: "123",
        author: "pace",
        price: 100,
      },
    ];
  },

  async getCard(id: string) {
    return {
      id: "123",
      author: "pace",
      price: 100,
    };
  },
};
