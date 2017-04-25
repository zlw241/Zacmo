class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :transaction_id, null: false
      t.text :body, null: false

      t.timestamps null: false
    end

    add_index :comments, :user_id
    add_index :comments, :transaction_id
    
  end
end
