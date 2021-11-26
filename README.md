# Automated-Screen-Capture (ASC)
Inspired from EyeWitness here I have used selenium and nodeJS for screen capturing the URLs.
can be used for various things but main objective was to find the possible Subdomain Takeovers through this.
  ## What ASC does?
     basically it screenshots the given list of subdomains and saves it in a new folder.

## To Install :
    => You will have to 1st install the chromedriver according to your chrome version.
    (Reference Video : https://www.youtube.com/watch?v=dz59GsdvUF8)
    
    => The script is written in nodeJS so make sure , nodeJS is installed

    => git clone https://github.com/vijayanathan23/Automated-Screen-Capture

    => cd Automated-Screen-Capture

    => npm install

    => node check.js 

(If the above Command opens the selenium website, Huraaayy! Everythings working. If NOT Something went wrong :( !)

## To get Screen captures from a list in file URL_list.txt
    => node ASC.js URL_list.txt

The above command will start taking screen shots, you can sit back and watch your favourite series!

##  Scope for Future 
I will try to implement this using the WORKER POOL of JS to make it faster. I am not familiar enough with that concept to use in this project.


# sayonara :)
