# class TokenData < ActiveRecord::Base
#   DESIRED_FRESHNESS = 1.minute
#   SECRET_KEY = ENV["secret_key_base"]
#
#   attr_encrypted :access_token, key: SECRET_KEY
#   attr_encrypted :refresh_token, key: SECRET_KEY
#
#   # look in the token_data table for the most recent token matching the given criteria
#   # if one does not exist throw an `ActiveRecord::RecordNotFound` error
#   # if one does exist convert the `TokenData` to a fresh `DwollaV2::Token` (see `#to_fresh_token`)
#   def self.fresh_token_by! criteria
#     where(criteria)
#       .order(created_at: :desc)
#       .first!
#       .to_fresh_token
#   end
#
#   def to_fresh_token
#     if expired?
#       # if the token data is expired either refresh the token (account token) or get a new token (app token)
#       account_id? ? $dwolla.auths.refresh(self) : $dwolla.auths.client
#     else
#       # if the token is not expired just convert it to a DwollaV2::Token
#       $dwolla.tokens.new(self)
#     end
#   end
#
#   private
#
#   def expired?
#     created_at < Time.now.utc - expires_in.seconds + DESIRED_FRESHNESS
#   end
#
# end
