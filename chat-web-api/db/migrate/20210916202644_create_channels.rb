class CreateChannels < ActiveRecord::Migration[6.1]
  def change
    create_table :channels do |t|
      t.string :name
      t.boolean :active
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end