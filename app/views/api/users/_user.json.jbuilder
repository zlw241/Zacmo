

if current_user
  json.id user.id
  json.username user.username
  json.first_name user.first_name
  json.last_name user.last_name

  if current_user.id == user.id
    json.email user.email
    json.balance user.balance
    json.phone_num user.phone_num
    json.friendships do
      json.friends user.friends do |friend|
        json.id friend.id
        json.username friend.username
      end
      json.friend_requests user.friend_requests do |requester|
        json.id requester.id
        json.username requester.username
      end
      json.pending_friends user.pending_friends do |pending_friend|
        json.id pending_friend.id
        json.username pending_friend.username
      end
    end
  else
    json.friends_with current_user.friends_with? user
  end

  json.friendships do
    json.friends user.friends do |friend|
      json.id friend.id
      json.username friend.username
    end
  end
end
