class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :transaction_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :likes, [:transaction_id, :user_id], unique: true
  end
end
