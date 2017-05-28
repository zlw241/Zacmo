
class Account < ActiveRecord::Base

  validates :user_id, :account_url, uniqueness: true

  belongs_to :users

  def get_root
    app_token = $dwolla.auths.client
    app_token.get "/"
  end

  def get_links
    app_token = $dwolla.auths.client
    customer_url = self.account_url
    customer = app_token.get "#{customer_url}"
    customer["_links"]
  end

  def get_status
    app_token = $dwolla.auths.client
    customer_url = self.account_url
    p customer_url
    customer = app_token.get "#{customer_url}"
    customer["status"]
  end

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
      if f.type == "bank"
        funds_source = {name: f.bankName, nickname: f.name, type: f.type, status: f.status}
        funding_sources_info << funds_source
      end
    end
    funding_sources_info
  end

  def funding_sources_url
    app_token = $dwolla.auths.client
    customer_url = self.account_url
    funding_sources = app_token.get "#{customer_url}/funding-sources"
    funding_sources._embedded['funding-sources'][0]._links["self"].href
  end


end
