
class Account < ActiveRecord::Base

  validates :user_id, :account_url, uniqueness: true

  belongs_to :users

  def generate_funding_token
    app_token = $dwolla.auths.client
    customer_url = self.account_url
    customer = app_token.post "#{customer_url}/funding-sources-token"
    puts customer
    customer.token
  end

  def generate_iav_token
    app_token = $dwolla.auths.client
    customer_url = self.account_url
    customer = app_token.post "#{customer_url}/iav-token"
    puts customer
    customer.token
  end
end
