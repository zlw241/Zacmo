# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all!

users = User.create([
    {
      username: "legolas_suckz",
      email: "gimli@lotr.me",
      first_name: "Gimli",
      last_name: "Son of Gloin",
      phone_num: "343-839-2233",
      password: "ilovemyaxe"
    },
    {
      username: "real_kool_guy",
      email: "legolas@lotr.me",
      first_name: "Legolas",
      last_name: "Son of Thranduil",
      phone_num: "999-345-3298",
      password: "ilovemybow"
    },
    {
      username: "sav3_m3_sam",
      email: "frodo@lotr.me",
      first_name: "Frodo",
      last_name: "Baggins",
      phone_num: "000-000-0000",
      password: "sauronsuckz"
    },
    {
      username: "king_of_gondor_swagx1000",
      email: "aragorn@lotr.me",
      first_name: "Aragorn",
      last_name: "Son of Arathorn",
      phone_num: "888-453-8989",
      password: "ilovearwen"
    },
    {
      username: "YOU__SHALLNOT__PASS",
      email: "gandalf@lotr.me",
      first_name: "Gandalf",
      last_name: "The White",
      phone_num: "123-456-7890",
      password: "runyoufools"
    },
    {
      username: "i_saved_middle_earth",
      email: "sam@lotr.me",
      first_name: "Samwise",
      last_name: "Gamgee",
      phone_num: "555-555-5556",
      password: "fucksmeagol"
    },
    {
      username: "im_dead",
      email: "@lotr.me",
      first_name: "Borimir",
      last_name: "Son of Denathor",
      phone_num: "993-234-5609",
      password: "somanyarrows"
    },
    {
      username: "yall_want_sum_ringz?",
      email: "sauron@lotr.me",
      first_name: "Sauron",
      last_name: "The Necromancer",
      phone_num: "666-666-6666",
      password: "oneringtorulethemall"
    },
    {
      username: "guest",
      email: "guest@guest.com",
      first_name: "guest",
      last_name: "guessed",
      phone_num: "123-123-1234",
      password: "password"
    }
])
