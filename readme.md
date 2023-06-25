### how to run

- fork and clone repo
- inside the project dir run npm install
- provide details for the database(postgress) in an env following the sample.env format (link to the sample.env - )
- run npm run start on windows / npm run start_mac on mac/linux

### Routes

<details>
<summary> 
<font color="green">GET</font>
Get all posts in the blog</summary>
     
    description: this route gets all the post in the database and returns them in json format
    Path: /blog/posts

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
add a post to the blog </summary>
    
    description: this route creates a new post with the following details - title, content, created_at, updated_at
    Path: /blog/post/create
    
    `{
        "post":  {
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
get an individual post from blog</summary>
    
    description: this route takes an id as a parameter and returns the post that the id belongs to
    Path: /blog/post/:id
    
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
edit an individual post in the blog</summary>
    
    description: this route edits the post with the specific id passed in
    Path: /blog/post/edit/:id
    
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
delete an individual post from the blog</summary>
    
    description: this route deltes the post with the specific id passed in
    Path: /blog/posts/:id
    status: 204
    
</details>
