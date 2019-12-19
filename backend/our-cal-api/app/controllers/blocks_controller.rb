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
    user = User.find_or_create_by(email: user_params[:email], username: user_params[:username])
    difficulty = Difficulty.find_by(rating: params[:difficulty])
    block = user.blocks.build(block_params)
    difficulty.blocks << block

    if block.save
      render json: BlockSerializer.new(block)
    else
      render json: { error: block.errors.full_messages }
    end


  end

  def destroy
    block = Block.find(params[:id])
    if block.destroy
      render json: BlockSerializer.new(block)
    else
      render json: { error: block.errors.full_messages }
    end
  end

  private

  def block_params
    params.require(:block).permit(:name, pixels_attributes: [:color, :color_variable, :x, :y])
  end

  def user_params
    params.require(:user).permit(:email, :username)
  end
end
