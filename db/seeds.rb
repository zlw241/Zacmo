

User.destroy_all
Comment.destroy_all
Like.destroy_all
Transaction.destroy_all
Friendship.destroy_all

User.create!([
  {username: "coates", password: "password", email: "michael.coates@gmail.com", first_name: "Michael", last_name: "Coates", phone_num: "555-777-3333", balance: 315.0},
  {username: "gimli", password: "password", email: "gimli@lotr.me", first_name: "Gimli", last_name: "Son of Gloin", phone_num: "343-839-2233", balance: 0.0},
  {username: "zlw241", password: "password", email: "zach.l.ward6@gmail.com", first_name: "Zach", last_name: "Ward", phone_num: "703-309-2314", balance: 2339.0},
  {username: "merry", password: "password", email: "merry@lotr.me", first_name: "Merry", last_name: "Brandybuck", phone_num: "676-666-6666", balance: 56.0},
  {username: "pauliewax", password: "password", email: "paulwax@gmail.com", first_name: "Paul", last_name: "Wax", phone_num: "338-484-2821", balance: 0.0},
  {username: "gollum", password: "password", email: "smeagol@lotr.com", first_name: "Smeagol", last_name: "Precious", phone_num: "+1-000-000-0000", balance: 1056.0},
  {username: "gandalf", password: "password", email: "gandalf@lotr.me", first_name: "Gandalf", last_name: "The White", phone_num: "123-456-7890", balance: 345.0},
  {username: "sauron", password: "password", email: "sauron@lotr.me", first_name: "Sauron", last_name: "The Necromancer", phone_num: "666-666-6666", balance: 150.0},
  {username: "frodo", password: "password", email: "frodo@lotr.me", first_name: "Frodo", last_name: "Baggins", phone_num: "000-000-0000", balance: 900.0},
  {username: "saruman", password: "password", email: "saruman@lotr.com", first_name: "Saruman", last_name: "The White", phone_num: "457-345-2234", balance: 0.0},
  {username: "borimir", password: "password", email: "@lotr.me", first_name: "Borimir", last_name: "Son of Denathor", phone_num: "993-234-5609", balance: 0.0},
  {username: "sam", password: "password", email: "sam@lotr.me", first_name: "Samwise", last_name: "Gamgee", phone_num: "555-555-5556", balance: 0.0},
  {username: "royce", password: "password", email: "royce.kim@gmail.com", first_name: "Royce", last_name: "Kim", phone_num: "593-293-2930", balance: 0.0},
  {username: "legolas", password: "password", email: "legolas@lotr.me", first_name: "Legolas", last_name: "Son of Thranduil", phone_num: "999-345-3298", balance: 1081.0},
  {username: "pippin", password: "password", email: "pippin@lotr.me", first_name: "Peregrin", last_name: "Took", phone_num: "676-669-6666", balance: 0.0},
  {username: "adumbward", password: "password", email: "adam.ward@gmail.com", first_name: "adam", last_name: "ward", phone_num: "703-309-8598", balance: 5.0},
  {username: "ayellapragada", password: "password", email: "ayellapragada@gmail.com", first_name: "Akshith", last_name: "Yellapragada", phone_num: "713-992-8285", balance: -40000.0},
  {username: "jon", password: "password", email: "jon.lin@gmail.com", first_name: "Jon", last_name: "Lin", phone_num: "703-333-3333", balance: 80.0},
  {username: "guest", password: "password", email: "guest@guest.com", first_name: "Guest", last_name: "Guessed", phone_num: "123-123-1234", balance: 19.0},
  {username: "givememoney", password: "password", email: "thefirstavatar@butt.com", first_name: "Brandon", last_name: "The Last Airbender", phone_num: "224-512-7532", balance: 40000.0},
  {username: "aragorn", password: "password", email: "aragorn@lotr.me", first_name: "Aragorn", last_name: "Son of Arathorn", phone_num: "888-453-8989", balance: 99.0},
])
