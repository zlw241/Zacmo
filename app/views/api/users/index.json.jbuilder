

json.array! @users do |user|
  json.extract! user, :username, :first_name, :last_name, :email, :phone_num
end
