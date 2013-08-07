class ApplicationController < ActionController::Base
  protect_from_forgery
  
  before_filter :hide_layout, :except => 'page4'
  
  private

  def hide_layout
    render :layout => false if pjax?
  end

  def pjax?
    request.headers['X-PJAX']
  end

end
