

User.destroy_all
Comment.destroy_all
Like.destroy_all
Transaction.destroy_all
Friendship.destroy_all

User.create!([
  {username: "coates", password: "password", email: "michael.coates111@gmail.com", first_name: "Michael", last_name: "Coates", phone_num: "555-777-3333"},
  {username: "gimli", password: "password", email: "gimli111@lotr.me", first_name: "Gimli", last_name: "Son of Gloin", phone_num: "343-839-2233"},
  {username: "zlw241", password: "password", email: "zach.l.ward6111@gmail.com", first_name: "Zach", last_name: "Ward", phone_num: "703-309-2314"},
  {username: "merry", password: "password", email: "merry111@lotr.me", first_name: "Merry", last_name: "Brandybuck", phone_num: "676-666-6666"},
  {username: "pauliewax", password: "password", email: "paulwax111@gmail.com", first_name: "Paul", last_name: "Wax", phone_num: "338-484-2821"},
  {username: "gollum", password: "password", email: "smeagol111@lotr.com", first_name: "Smeagol", last_name: "Precious", phone_num: "+1-000-000-0000"},
  {username: "gandalf", password: "password", email: "gandalf111@lotr.me", first_name: "Gandalf", last_name: "The White", phone_num: "123-456-7890"},
  {username: "sauron", password: "password", email: "sauron111@lotr.me", first_name: "Sauron", last_name: "The Necromancer", phone_num: "666-666-6666"},
  {username: "frodo", password: "password", email: "frodo111@lotr.me", first_name: "Frodo", last_name: "Baggins", phone_num: "000-000-0000"},
  {username: "saruman", password: "password", email: "saruman111@lotr.com", first_name: "Saruman", last_name: "The White", phone_num: "457-345-2234"},
  {username: "borimir", password: "password", email: "111@lotr.me", first_name: "Borimir", last_name: "Son of Denathor", phone_num: "993-234-5609"},
  {username: "sam", password: "password", email: "sam111@lotr.me", first_name: "Samwise", last_name: "Gamgee", phone_num: "555-555-5556"},
  {username: "royce", password: "password", email: "royce.kim111@gmail.com", first_name: "Royce", last_name: "Kim", phone_num: "593-293-2930"},
  {username: "legolas", password: "password", email: "legolas111@lotr.me", first_name: "Legolas", last_name: "Son of Thranduil", phone_num: "999-345-3298"},
  {username: "pippin", password: "password", email: "pippin111@lotr.me", first_name: "Peregrin", last_name: "Took", phone_num: "676-669-6666"},
  {username: "adumbward", password: "password", email: "adam.ward111@gmail.com", first_name: "adam", last_name: "ward", phone_num: "703-309-8598"},
  {username: "ayellapragada", password: "password", email: "ayellapragada111@gmail.com", first_name: "Akshith", last_name: "Yellapragada", phone_num: "713-992-8285"},
  {username: "jon", password: "password", email: "jon.lin111@gmail.com", first_name: "Jon", last_name: "Lin", phone_num: "703-333-3333"},
  {username: "guest", password: "password", email: "guest111@guest.com", first_name: "Guest", last_name: "Guessed", phone_num: "123-123-1234"},
  {username: "aragorn", password: "password", email: "aragorn111@lotr.me", first_name: "Aragorn", last_name: "Son of Arathorn", phone_num: "888-453-8989"}
]);

User.all.each { |u| u.avatar_from_url(u.username) }
