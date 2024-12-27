This branch is used for Part 3 of the project, if you want to see our work for part 2 then go to the "main" branch
# Welcome to our Facebook React website project as part of the BIU Advanced Programming Course!

The Webstie app was developed in VS code software and it is connected to a Node Js server that we link here down below so make sure you already clone the server,
follow its instructions, and run it before you open this app because it won't work without it! if you did it continue...

This is the link to our server:https://github.com/EliyaRabia/FacebookServer

After you have done it, you can start cloning this repository.

git clone -b Part3ConnectServer https://github.com/EliyaRabia/FacebookWeb

(on vs code)

Now, open the cloned folder in vs-code with the command:

cd repository-name 

Now, you need to run this command;

npm install

When it's finished, run this command: 

npm start

And the website will open and the first page you will see is the login page.

## Here's a video that shows what our website can do

https://www.youtube.com/watch?v=7xheojkxw5M

## First of all you need to register a user

New users can create an account by navigating to the Sign Up page by clicking "Sign Up". They must provide a username, password (your password must contain at least 8 characters of capital letters and a sign ), display name (the name you and your friends will see in posts, comments, and your profile page), and a profile picture. When choosing a picture from the computer files, pick a photo in PNG or JPEG format and size up to 2mb. You must fill in all the inputs to create a user. if you want to see what is the password that you have written put your mouse on the eye icon. After you are ready press Sign-Up.

## Now you can login to your account!

Please enter the username and password of the account you have created and press Sign-in and next page you will see is the feed page:

## The Navigation bar 

At the top of the feed and the other pages you will see there is a navigation bar that can help you navigate from one page to another: 

* If you press the Facebook-Icon on the left, you will move to the feed page.
* If you press the Home-Icon in the middle, you will also move to the feed page.
* On the right side of the navigation bar you can see the name you have chosen and your profile picture, by clicking on this you will navigate to your profile page.
* If you press the Bell-Icon you will you should see a list of notifications about friend requests, for each notification you will see the   name and the profile pic of the user that sends you the friend request and you can choose to approve his request or decline it, if you are choosing to approve him with approve icon, this friend will add into your friends list. if you decline him with the decline icon, you will not be his friend. either way, after you click the approve or decline icon, the notification will be deleted from the list. 
You can notice that if you have some notifications you will see a red circle with the number of notifications beside the bell icon.
* If you press the Menu-Icon you will have 3 options:
  1. Dark mode/light mode - change your app view into dark mode/light mode depending on what you are doing right now.
  2. Edit User - navigates you into the Edit User page.
  3. Log Out - navigates you back to the login page.

## The Left side of the website 

On the left side of the website, you can see two sections
    
  1. The top section contains some buttons that are similar to the real Facebook website, you can click on the button "your profile" to navigate into your profile.
    
  2. the bottom section contains your user's "friends list". If your user has some friends, you can see the list of them, and each one of them will include his name and profile pic. By clicking on their profile picture, you can navigate to their profile page.

## The Right side of the website 

On the right side of the website, you can also see two sections: 
    
  1. The top section contains some current events. currently, you can see that there are programming advanced lessons scheduled.
    
  2. The bottom section contains 2 nice ads like the real Facebook website. 

## What can you do on the Feed page?

When you log in to the website you will see in the center the Feed page, the feed page contains 2 Sections: 

### Add a Post 

Here you can add a post to the server posts list, first of all, you can see your name and your profile pic in the left circle. also in the text box, you can see that your name is in it and it will ask you to write what you think. you can write there the text of the post you want to upload, also you can add a picture by clicking on the "Photo/Video" button. you will have the option to upload a file from your computer, When you are choosing a picture from the computer files make sure you pick a photo in PNG or JPEG format and size up to 2Mb. After you choose your pic you will see a preview of it and a button for the option to delete this pic if you regret it. Now when your post is ready you can click on the "post" button you will see your post in the posts list under this section!, now the text box will initialized and you can add another post if you want.

### Post List 

Here you can see the list of posts that contains the posts that are right now in the server and have been uploaded by users from the server (if there are no posts you won't see anything there). You can notice that if you have more than 25 posts, 20 posts that show up will be of your friends/yours and the other 5 of users that are not your friends. Every post contains the name of the user uploaded, his profile picture in a circle, the date, some text content, and optionally a picture for the post. 

if the post is written by your user you will also see a Three-Dots icon that can let you delete the post from the server, edit the text of the post, or delete/add pic:
* If you choose to edit your post text, a text box that looks exactly like the add post section will open, you will see your old text is written and you can change it. By clicking the approve icon your text of the post will be edited and you will see your edited text in the post, if you change your mind about editing click on the garbage icon and the text will remain the same. 
* If you already had a picture in your post you will have the option of "delete picture" which will delete your picture from your post.
* If you don't have a picture in your post you will have the option of "add picture" where you can add a picture for your post from your computer files. After you choose your photo, the updated post will be shown with the new picture. 

You can also notice that the post contains at the bottom of it a like counter that indicates how many likes the post has and a comments counter that indicates how many comments there are. 
You can also click on the like icon button to do/undo like for the post, you can see it will add/decrease from the counter.
If you click on the share icon it will open up for you a little menu with options of share. 

### Comments
If you click on the comments icon of the post:
* If there are already comments for this post in the server you will see them in a list. every comment has the name of the uploader his picture and the content text. if there are no comments you won't see anything there. 
* You can add a comment yourself by clicking on the comment icon and it opens you a text box. please write what you want just don't leave it blank. and you can click on the arrow button to add it and then you will see your comment in the list. 
* If you are *the writer of the posts where these comments are in*, you also can see a garbage icon in every comment of this post and this icon will let you delete any comment you like from the post (even if it's not yours).
* if you are *the writer of the comment* you can see 2 icons: the garbage that can let you delete it and a pencil icon that lets you edit the comment. When you choose to edit the comment you will see a text box that will let you change what you have written and when you are ready click on the  approve icon or garbage icon if you changed your mind.

You can also click on the Profile Picture of one of the posts writers to navigate to his Profile Page. 


## What can you do on the Profile Page?

If you are here you must have clicked on some user icon or clicked on your profile icon, here you can see the profile page of the user. You can see in the top section the user name and his profile picture and you can see the number of friends he has.

near the Profile Picture several options can be shown:
1. if you are on the profile page of a user who is your friend - you will see a "delete friend" button that will let you delete him from your friends.
2. If you are on the profile page of a user who is not your friend but has sent you a request to be his friend - you will see the "approve" button that will let you accept his request and this user will be added to your friends list.
3. If you are on the profile page of a user who is not your friend, but you sent him a request - you will see the text " Friend request sent" and it will change when the user approves or declines your friend request.
4. If you are on the profile page of a user who is not your friend, and you both didn't send any request you will see an Add friend button that when you click it, will send the user a request for a friend and the button will change into number 3. option.
5. If you are on a profile page of your own - you won't see anything there.

In the center section, you can see the friends list, here you can see the list of friends this user has. you can see their names and their profile pics. If you click on someone's profile pic you will navigate to his profile page. 
 
in the bottom section, several options can be shown: 
1. If you are on the profile page of a user that is yourself/your friend - you will see yourself/your friend posts that only you/he has written.
2. If you are on the profile page of a user who is not your friend, but has sent you a request to be his friend - you won't see his posts and you will see a text "You need to be his friend to see his posts" but if you click "approve" you will suddenly see the posts because now you are friends.
3. If you are on the profile page of a user who is not your friend/you sent him a request - you won't see his posts and you will also see the text: "You need to be his friend to see his posts" because you are still not friends, sorry...
4. In case the user has no posts you will see the text: "No posts available".


## What can you do on the Edit User page? 

If you are looking to change your user details this is the right place! Here you can change your username/password/display-name/picture if you want.
When choosing a picture from the computer files, pick a photo in PNG or JPEG format and size up to 2mb.
When your details are ready you can click on submit and you will go back to the feed page and you will see the changes that you just did! 
If you change your mind and don't want to edit the user details, press the cancel button and you will back to the feed page without any change.
You can also delete your user by clicking the "delete user" button, if you press it you will be navigated back to the login page and your user will be deleted from the server.

## And that's it! please enjoy using our app!

Written by:

Eliya Rabia 

Ofek Yemini

Or Shmuel


 
 





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
