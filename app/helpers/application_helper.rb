module ApplicationHelper
  def pjax?
    request.headers['X-PJAX']
  end
end
