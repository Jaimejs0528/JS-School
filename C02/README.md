CHALLENGE 02: RESTful APIs and HTTP requests
============================================

- Download postman and get information for a superhero from Marvel API
- Access to https://developer.marvel.com/docs and do all steps to get an API key to get access
- Get information related to the list of characters of Cable & Deadpool (2004) #46 (Zombie Variant)
- Get a list of all stories when Agent X (Nijo) appears
- Generate JSON document with this information and push to GitHub rep

In this challenge, I needed to get all information about a character( in my case a choice **Deadpool**), get all characters that appear into the comic *"Cable & Deadpool (2004) #46 (Zombie Variant)"* and also get all stories where *"Agent X(Nijo)"* appears, To achive this I did the next steps.

First of all, I needed to know how make a request from Marvel's API, then I found how in [Marvel API Docs](https://developer.marvel.com/documentation/authorization), in that site the way to make a request is using an URL from the [Marvel API Tester](https://developer.marvel.com/docs) and an md5 hash which has the next structure **(ts+private key+public key)** to transform that values into a hash(md5) I used a [md5 generator](http://www.miraclesalad.com/webtools/md5.php) which allows transform a plain text into a hash md5. After that I learned how to make a request, I started to do the corresponding requests.

Get a Character information
---------------------------
1. I wanted to know information about deadpool character, then I used the next request:
> https://gateway.marvel.com:443/v1/public/characters?limit=1&nameStartsWith=deadpool&apikey=8c444bdbf2dac07b154fc45aeee8b8e4&hash=50e8cc35453254dfe7fa1f16bb5b2046&ts=1

I applied the limit to 1 beacause the response brought 4 characters and I only wanted one.

![Result]("screenshots/get_deadpool_character.png")

To see the complete Json file [clic here]("DeadpoolCharacter.json")

Get Characters of the comic
---------------------------

1. Get id of the comic *"Cable & Deadpool (2004) #46 (Zombie Variant)"*. First of all, I needed to get the id of the comic, so I used the [Marvel API Tester](https://developer.marvel.com/docs) to know which request I should use, then I selected this:

 > https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=Cable&startYear=2004&issueNumber=46&ts=1&apikey=8c444bdbf2dac07b154fc45aeee8b8e4&hash=50e8cc35453254dfe7fa1f16bb5b2046 

 ![Results]("screenshots/get_ID_comic.png")

 As result the request brought 2 comics with the filters applied, and the second is which I search  **ID=21845**

2. Now with the id of the comic, I just use the next request: 

> http://gateway.marvel.com:80/v1/public/comics/21845/characters?ts=1&apikey=8c444bdbf2dac07b154fc45aeee8b8e4&hash=50e8cc35453254dfe7fa1f16bb5b2046

![Result]("screenshots/get_characters.png")

To see the complete Json file [clic here](characters.json)

Get stories of Agent X
----------------------

1. Using the previous response, we can get the ID of the Agent X Character, which is **ID=1011031** and with this ID I made the next request:

 > https://gateway.marvel.com:443/v1/public/characters/1011031/stories?limit=23&ts=1&apikey=8c444bdbf2dac07b154fc45aeee8b8e4&hash=50e8cc35453254dfe7fa1f16bb5b2046

 ![Result]("screenshots/get_stories_Agent_X.png")
 
 To see the complente Json file [clic here](stories_Nijo.json)
 
 _Note: If you have any throuble with the images, you can see those too into the **screenshots** folder._





