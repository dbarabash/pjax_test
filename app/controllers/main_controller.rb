class MainController < ApplicationController
  @@page4count = 0

  def page1
  end

  def page2
  end

  def page3
  end

  def page4
    @@page4count += 1
    @count = @@page4count
    p @count
    if @count < 5
      render :status => 302, :layout => false if pjax?
    else
      @@page4count = 0
      render :layout => false if pjax?
    end
  end
end
