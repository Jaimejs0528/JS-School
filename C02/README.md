CHALLENGE 02: RESTful APIs and HTTP requests
============================================


In this challenge, I needed to get all characters that appear into the comic *"Cable & Deadpool (2004) #46 (Zombie Variant)"*, also get all stories where *"Agent X(Nijo)"* appears, To achive this I did the next steps.

First of all, I needed to know how make a request from Marvel's API, then I found how in [Marvel API Docs](https://developer.marvel.com/documentation/authorization), in that site the way to make a request is using an URL from the [Marvel API Tester](https://developer.marvel.com/docs) and an md5 hash which has the next structure **(ts+private key+public key)** to transform that values into a hash(md5) I used a [md5 generator](http://www.miraclesalad.com/webtools/md5.php) which allows transform a plain text into a hash md5. After that I learned how to make a request, I started to do the corresponding requests.


Get Characters of the comic
---------------------------

1. Get id of the comic *"Cable & Deadpool (2004) #46 (Zombie Variant)"*. First of all, I needed to get the id of the comic, so I used the [Marvel API Tester](https://developer.marvel.com/docs) to know which request I should use, then I selected this:

 > https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=Cable&startYear=2004&issueNumber=46&ts=1&apikey=8c444bdbf2dac07b154fc45aeee8b8e4&hash=50e8cc35453254dfe7fa1f16bb5b2046 

 ![Results](https://i.gyazo.com/b4d169ac056e86bcd2b4502952079a90.png)

 As result the request brought 2 comics with the filters applied, and the second is which I search  **ID=21845**

2. Now with the id of the comic, I just use the next request: 

> http://gateway.marvel.com:80/v1/public/comics/21845/characters?ts=1&apikey=8c444bdbf2dac07b154fc45aeee8b8e4&hash=50e8cc35453254dfe7fa1f16bb5b2046

![Result](https://i.gyazo.com/4dfa6de301cfef2c940fb2cb455f1f57.png)

To see the complete Json file [clic here](characters.json)

Get stories of Agent X
----------------------

1. Using the previous response, we can get the ID of the Agent X Character, which is **ID=1011031** and with this ID I made the next request:
 > https://gateway.marvel.com:443/v1/public/characters/1011031/stories?limit=23&ts=1&apikey=8c444bdbf2dac07b154fc45aeee8b8e4&hash=50e8cc35453254dfe7fa1f16bb5b2046

 ![Result](https://i.gyazo.com/27fa298047c2d21daf561393c6a2d70b.png)
 
 To see the complente Json file [clic here](stories_Nijo.json)
 
 _Note: If you have any throuble with the images, you can see those too into the **screenshots** folder._





