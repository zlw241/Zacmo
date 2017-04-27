

if current_user
  json.id user.id
  json.username user.username
  json.first_name user.first_name
  json.last_name user.last_name
  json.image_url asset_path(user.image.url)

  if current_user.id == user.id
    json.email user.email
    json.balance user.balance
    json.phone_num user.phone_num
    json.friendships do
      json.friends user.friends do |friend|
        json.id friend.id
        json.username friend.username
        json.friend_status current_user.friend_status friend
        json.profile_pic asset_path(friend.image.url)
      end
      json.friend_requests user.friend_requests do |requester|
        json.id requester.id
        json.username requester.username
        json.friend_status current_user.friend_status requester
        json.profile_pic asset_path(requester.image.url)
      end
      json.pending_friends user.pending_friends do |pending_friend|
        json.id pending_friend.id
        json.username pending_friend.username
        json.friend_status current_user.friend_status pending_friend
        json.profile_pic asset_path(pending_friend.image.url)
      end
    end
  else
    json.friends_with current_user.friends_with? user
    json.friend_status current_user.friend_status user
    json.friendships do
      json.friends user.friends do |friend|
        json.id friend.id
        json.username friend.username
      end
    end
  end

  json.member_since user.created_at
end
