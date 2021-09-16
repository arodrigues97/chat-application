class CreateChannelJoineds < ActiveRecord::Migration[6.1]
  def change
    create_table :channel_joineds do |t|
      t.references :channel, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
