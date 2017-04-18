

{
  session: {
    currentUser: {
      id: 1,
      username: "username"
    },
    errors: []
  },

  forms: {
    signUp: {
      errors: ["phone number can't be blank"]
    },
    logIn: {
      errors: []
    },
    newTransaction: {
      errors: ["you must specify an amount"]
    },
    mainSearch: {
      errors: []
    },
    search: {
      errors: []
    }
  },

  userAccount: {
    id: 1,
    firstName: "joe",
    lastName: "shmoe",
    username: "joeshmoe",
    email: "joe.shmoe@gmail.com",
    profilePic: "/images/joeshmoe.jpg",
    phoneNum: "703-309-2314",
    balance: 3.00,
    friends: {
      6: {
        id: 6,
        username: "sallycats",
        firstName: "Sally",
        lastName: "Cats"
      },
      7: {
        id: 7,
        username: "daisydukes"
        firstName: "Daisy",
        lastName: "Dukes"
      }
    }
  },

  paymentMethods: {
    banks: {
      I dont know
    },
    cards: {
      Please help
    }
  },

  transactions: {
    1: {
      userId: 1,
      userUsername: "realcoolguy",
      recipientId: 2,
      recipientUsername: "notascoolguy"
      amount: 10.0,
      memo: "For ice-cream",
      type: "payment",
      comments: [
        {
          user_id: 9,
          body: "I like ice-cream too",
          date: "March 11"
        }
      ],
      likes: {
        3: {
          user_id: 3,
          username: "billybob"
        }
        4: {
          user_id: 4,
          username: "bobbilly"
        }
      }
    }  
  }
}
