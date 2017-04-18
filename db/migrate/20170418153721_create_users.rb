class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :phone_num, null: false
      t.float :balance, null: false, default: 0
      t.string :session_token

      t.timestamps null: false
    end

    add_index :users, :username
    add_index :users, :email
    add_index :users, :phone_num
  end
end
