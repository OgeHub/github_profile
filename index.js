const form = document.getElementById("userForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("userInput").value;
    const url = "https://api.github.com/users/" + username;
   
    fetch(url).then(res => res.json()).then(data =>{

        const userId = data.id;
        const imgUrl = "https://avatars.githubusercontent.com/u/" +userId+ "?v=4"
        const userName = data.login;
        const followers = data.followers;
        const repoCount = data.public_repos;
        const fullName = data.name;
        const repoUrl = "https://api.github.com/users/" + userName + "/repos";
        
        document.getElementById("photo").innerHTML = `<img src="${imgUrl}" class="rounded float-start photoStyle"/>`

        document.getElementById("result").innerHTML = `
        <p><span class="title">Name:</span> ${fullName}</p>
        <p><span class="title">Username:</span> ${userName}</p>
        <p><span class="title">Followers:</span> ${followers}</p>
        <p><span class="title">Repository Count:</span> ${repoCount}</p>
        ` 
        fetch(repoUrl).then(repos => repos.json()).then(repo => {
            const repo1 = repo[repo.length - 1].name;
            const repo2 = repo[repo.length - 2].name;
            const repo3 = repo[repo.length - 3].name;
            const repo4 = repo[repo.length - 4].name;


            document.getElementById("topRepos").innerHTML = `
            <p><span class="title">Newest Repositories:</span></p>
            <p>${repo1}</p>
            <p>${repo2}</p>
            <p>${repo3}</p>
            <p>${repo4}</p>
            `
        })

    });

});

