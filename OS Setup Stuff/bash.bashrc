# EDITING THIS DOC
alias editalias="subl ~/.bashrc"
alias savealias=". ~/.bashrc"

# SYSTEM
alias d1="cd ../"
alias d2="cd ../../"
alias d3="cd ../../../"
alias d4="cd ../../../../"
alias d5="cd ../../../../../"
mkd () {
   mkdir -p $1
   cd $1 
}

get () {
  sudo apt-get install $1
}

# FIREBASE COMMANDS
alias fb-dep="firebase deploy --only hosting"
alias fb-dep-funcs="firebase deploy --only functions"

# NPM SHORT CUTS
alias npm-i="npm install --save"
alias npm-id="npm install --save-dev"

# REDIS
alias redis="redis-server"
alias redis-stop="/etc/init.d/redis-server stop"

# TASKWARRIOR
alias t-list="task list" 
t-add () {
  if [ -z '$2']; then 
    task add $1 project:$2
else 
  task add $1
fi
}

# Chrome
alias chrome="google-chrome"
alias youtube="google-chrome https://www.youtube.com"
alias google="google-chrome https://google.co.uk"
localhost (){
  google-chrome http://localhost:$1
}
