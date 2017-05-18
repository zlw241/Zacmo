class CreateTokenData < ActiveRecord::Migration
  def change
    create_table :token_data do |t|
      t.string :encrypted_access_token
      t.string :encrypted_access_token_iv
      t.string :encrypted_refresh_token
      t.string :encrypted_refresh_token_iv
      t.integer :expires
      t.string :scope
      t.string :account_id

      t.timestamps null: false
    end
  end
end
