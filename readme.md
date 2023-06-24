### how to run

- fork and clone repo
- inside the project dir run npm install
- provide details for the database(postgress) in an env following the sample.env format (link to the sample.env - )
- run npm run start on windows / npm run start_mac on mac/linux

### Routes

> Get all posts in the blog - [blogs](https://localhost:3000/blogs)

<code>
description: this route gets all the post in the database and returns them in json format
Path: /blogs
{
posts: [

           {
               "id": 1,
               "title": "my first blog",
               "content": "this is my test and first blog",
               "created_at": "2023-06-24T19:58:24.164Z",
               "updated_at": "2023-06-24T19:58:24.164Z"
           }
       ]

}
</code>

<details>
<summary>
<font color="green">GET</font>
Get all posts in the blog - [blogs](https://localhost:3000/blogs)</summary>

description: this route gets all the post in the database and returns them in json format
Path: /blogs

`{
       "posts": [
           {
               "id": 1,
               "title": "my first blog",
               "content": "this is my test and first blog",
               "created_at": "2023-06-24T19:58:24.164Z",
               "updated_at": "2023-06-24T19:58:24.164Z"
           }
       ]
   }`

</details>

<details>
<summary>
<font color="green">POST</font>
add a post to the blog [blogs](https://localhost:3000/create)</summary>

description: this route creates a new post with the following details - title, content, created_at, updated_at
Path: /create

`{
"post": {
"id": 6,
"title": "this is the 6th post",
"content": "this is my test and 6th post blog",
"created_at": "2023-06-24T19:58:24.164Z",
"updated_at": "2023-06-24T19:58:24.164Z"
}

}`

</details>

<details>
<summary>
<font color="green">GET</font>
get an individual post from blog [blogs](https://localhost:3000/blogs/3)</summary>

description: this route takes an id as a parameter and returns the post that the id belongs to
Path: /blogs/:blogId

`{
       "post": {
               "id": 3,
               "title": "my first blog",
               "content": "this is my test and first blog",
               "created_at": "2023-06-24T19:58:24.164Z",
               "updated_at": "2023-06-24T19:58:24.164Z"
           }
   }`

</details>

<details>
<summary>
<font color="yellow">PUT</font>
edit an individual post in the blog [blogs](https://localhost:3000/edit/1)</summary>

description: this route edits the post with the specific id passed in
Path: /edit/:blogId

`{
       "updatedPost": {
               "id": 1,
               "title": "edited first blog",
               "content": "this is my test and first blog -edited",
               "created_at": "2023-06-24T19:58:24.164Z",
               "updated_at": "2023-06-24T19:58:24.164Z"
           }
   }`

</details>

<details>
<summary>
<font color="red">DELETE</font>
delete an individual post from the blog [blogs](https://localhost:3000/blogs/1)</summary>

description: this route deltes the post with the specific id passed in
Path: /blogs/:blogId
status: 204

</details>
`````
