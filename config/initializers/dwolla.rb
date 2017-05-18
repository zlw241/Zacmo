

$dwolla = DwollaV2::Client.new(key: ENV["dwolla_api_key"], secret: ENV["dwolla_secret"]) do |config|
  config.environment = :sandbox

  config.on_grant do |token|
    TokenData.create! token
  end

end

# create an application token if one doesn't already exist
begin
  TokenData.fresh_token_by! account_id: nil
rescue ActiveRecord::RecordNotFound => e
  $dwolla.auths.client
end

# create an account token if one doesn't already exist
begin
  TokenData.fresh_token_by! account_id: ENV["dwolla_account_id"]
rescue ActiveRecord::RecordNotFound => e
  TokenData.create! account_id: ENV["dwolla_account_id"],
                    refresh_token: ENV["dwolla_account_refresh_token"],
                    expires: -1
end
