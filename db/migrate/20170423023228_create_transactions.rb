class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.integer :user_id, null: false
      t.integer :recipient_id, null: false
      t.text :memo, null: false
      t.float :amount, null: false
      t.string :visibility, null: false, default: "public"
      t.boolean :archived, null: false, default: false

      t.timestamps null: false
    end
  end
end
