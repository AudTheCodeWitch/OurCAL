class BlocksController < ApplicationController

  def index
    blocks = Block.all
    render json: BlockSerializer.new(blocks)
  end

  def show
    block = Block.find_by(id: params[:id])
    if block
      render json: BlockSerializer.new(block)
    else
      render json: { message: 'No blockTemplate found with that id' }
    end
  end

  def create
    block = Block.new
    user = User.find_or_create_by(user_params)

  end

  def destroy

  end

  private

  def block_params
    params.require(:block).permit(:name, pixels_attributes: [:color, :color_variable, :x, :y])
  end

  def user_params
    params.require(:user).permit(:email, :username)
  end
end
