
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

  def get_funding_sources
    app_token = $dwolla.auths.client
    customer_url = self.account_url
    funding_sources = app_token.get "#{customer_url}/funding-sources"
    funding_sources_info = []
    funding_sources._embedded['funding-sources'].each do |f|
      funds_source = {name: f.name, type: f.type, status: f.status, name: f.bankName, nickname: f.name}
      funding_sources_info << funds_source
    end
    funding_sources_info
  end
end
