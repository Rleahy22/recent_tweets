class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.string :text
      t.datetime :posted_at
      t.belongs_to :twitter_user
      t.timestamps
    end
  end
end
