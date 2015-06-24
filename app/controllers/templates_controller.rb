class TemplatesController < ApplicationController
  def show
    render "/templates/#{ params[:id] }"
  end
end
