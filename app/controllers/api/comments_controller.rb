class Api::CommentsController < ApplicationController

  def create
    @transaction = Transaction.find(params[:transaction_id])
    @transaction.comments.new({ user_id: current_user.id, body: comment_params[:body]})
    # @comment = Comment.new(comment_params)
    if @transaction.save

      render "api/transactions/show"
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  def comment_params
    params.require(:comment).permit(:body)
  end
end
