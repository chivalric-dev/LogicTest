/**
 * Let’s see we an api url www.example.com/api/get/1 
Write a sample code to call this rest api and display the result.

 */
fetch("http://www.example.com/api/get/1")
.then(resp => resp.json())
.then(data => {

    console.log(data)
})

/**
 *  So here i am getting an CORS error:
 * 
 *  VM343:1 GET http://www.example.com/api/get/1 net::ERR_FAILED
    (anonymous)	@	VM343:1
 * 
 *  new-tab-page/:1 Uncaught (in promise) TypeError: Failed to fetch
    Promise.then (async)		
    (anonymous)
 */