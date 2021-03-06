# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170525060526) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string   "user_id",     null: false
    t.string   "account_url", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "accounts", ["user_id"], name: "index_accounts_on_user_id", unique: true, using: :btree

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id",        null: false
    t.integer  "transaction_id", null: false
    t.text     "body",           null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "comments", ["transaction_id"], name: "index_comments_on_transaction_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "friendships", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "friend_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "status"
  end

  add_index "friendships", ["user_id", "friend_id"], name: "index_friendships_on_user_id_and_friend_id", unique: true, using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "transaction_id", null: false
    t.integer  "user_id",        null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "likes", ["transaction_id", "user_id"], name: "index_likes_on_transaction_id_and_user_id", unique: true, using: :btree

  create_table "token_data", force: :cascade do |t|
    t.string   "encrypted_access_token"
    t.string   "encrypted_access_token_iv"
    t.string   "encrypted_refresh_token"
    t.string   "encrypted_refresh_token_iv"
    t.integer  "expires"
    t.string   "scope"
    t.string   "account_id"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  create_table "transactions", force: :cascade do |t|
    t.integer  "user_id",                         null: false
    t.integer  "recipient_id",                    null: false
    t.text     "memo",                            null: false
    t.float    "amount",                          null: false
    t.string   "visibility",   default: "public", null: false
    t.boolean  "archived",     default: false,    null: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

  add_index "transactions", ["recipient_id"], name: "index_transactions_on_recipient_id", using: :btree
  add_index "transactions", ["user_id"], name: "index_transactions_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                         null: false
    t.string   "password_digest",                  null: false
    t.string   "email",                            null: false
    t.string   "first_name",                       null: false
    t.string   "last_name",                        null: false
    t.string   "phone_num",                        null: false
    t.float    "balance",            default: 0.0, null: false
    t.string   "session_token"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["phone_num"], name: "index_users_on_phone_num", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
