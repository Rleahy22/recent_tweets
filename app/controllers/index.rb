get '/' do

	erb :index
end

post '/user' do
	@user = User.verify(params)
	unless @user.nil?
		session[:auth] = @user.id
		redirect "user/#{@user.id}"
	else
		redirect '/login'
	end
end

get '/signup' do

	erb :signup
end

post '/create_user' do
	@user = User.create(params[:user])
	session[:auth] = @user.id
	redirect "/user/#{user.id}"
end

get '/user/:id' do
	redirect '/' unless session[:auth] == params[:id].to_i
	@user = User.find(session[:auth])

	erb :user
end

get '/logout' do
	session[:auth] = nil
	redirect '/'
end

get '/:username' do
  @user = TwitterUser.find_or_create_by_handle(params[:username])
  if @user.tweets.empty? || @user.tweets_stale?
    # User#fetch_tweets! should make an API call
    # and populate the tweets table
    #
    # Future requests should read from the tweets table 
    # instead of making an API call
    @user.fetch_tweets!
  end

  @tweets = @user.tweets.limit(10)
  erb :tweets
end
