class BlocksController < ApplicationController

  def index
    blocks = Block.all
    render json: blocks, include: [:pixels]
  end

  def show
    block = Block.find_by(id: params[:id])
    if block
      render json: block, include: [:user, :difficulty, :pixels]
    else
      render json: { message: 'No block found with that id' }
    end
  end

  def create
    block = Block.new
    user = User.find_or_create_by(user_params)

  end

  def destroy

  end

end
