# Plan

- create server in `server.js` - DONE
- at `http://localhost:7890/index.html` server goes into `public` directory, finds `index.html`, reads `index.html`, and sends contents as a response
  1. Request will be a GET to index.html??
  2. use parseRequest function to parse user's request
  3. use fs to go into `public` directory and find `index.html` 
    * if `index.html` exists, 
      1. read file
      2. send contents back to user as a response
    * else if `index.html` does not exist, respond with "Not Found"

-------------------------------

## HTTP Static File Server

Create a node server that serves files from a public directory.

If a user hits your server at `http://localhost:7890/index.html`
your server should go into the `public` directory and find an
`index.html` file, read it, and send the contents as a response.
If no file is found respond with a Not Found message.

### Steps

* design a solution (in english what do you need to do)
* break down the problem into smaller chunks
* start working on chunks
  * define an outcome (how do you know when the chunk is complete)
  * define a validation (write a test)
  * write code
  * validate code (test passes)
  * commit
  * read code and refactor
  * commit
  * repeat for next chunk

### Rubric **10pts**

* Followed Steps *5pts*
* Meaningful Tests: *2pt*
* Clean Code: *2pt*
* It Works: *1pt*