document.getElementById("search").addEventListener('click',searchUsername)

function searchUsername(e){
    e.preventDefault();
    console.log('call')

    let username = document.getElementById('username').value;
    let url = `https://api.github.com/users/` +username

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        if(data.message){
            document.getElementById('result').innerHTML = `
            <div class="d-flex flex-row mb-3">
                <h5>profile not found</h5>
            </div>
            `
            console.log(' user profile not found')
        }else{
            console.log(data);
            document.getElementById('result').innerHTML = `

            <div class="card rounded-4" style="width: 500px">
                    <div class="d-flex flex-row mb-3">
                        <div class="p-4">
                            <img src="${data.avatar_url}"
                                width="130"
                                height="130"
                                class="rounded-circle border border-primary border-5"
                                src=""
                                class="card-img-top"
                                alt="profile image"
                            >
                        </div>
                        <div class="p-1">
                            <div class="card-body">
                                <h3 class="card-title">${data.name}(${data.login})</h3>
                                
                                <div class="d-flex flex-row mb-3">
                                    <div class="p-1">${data.followers} Followers</div>
                                    <div class="p-1">${data.following} Following</div>
                                    <div class="p-1">${data.public_repos} Repos</div>
                                </div>

                                <div class="d-flex flex-row mb-3">
                                    <div class="p-1">
                                        <a class="btn btn-primary" href="${data.html_url}" role="button">
                                        
                                        </a>
                                    </div>
                                    
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    })
    .catch(err=>console.log(err))
}
