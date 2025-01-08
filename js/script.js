document.querySelector(".nav-right .user-profile").addEventListener("click", showSettings);
function showSettings() {
    const settings = document.querySelector(".user-settings-menu");
    settings.classList.toggle("height");
}


document.querySelector(".theme-toggle-btn").addEventListener("click", changeThemeBtn);
function changeThemeBtn() {
    const themeBtn = document.querySelector(".theme-toggle-btn");
    themeBtn.classList.toggle("dark");
    document.body.classList.toggle("dark-mode");
    document.body.querySelector(".theme-toggle-btn span").style.backgroundColor = "white";


    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    let invertedSvgs = document.body.querySelectorAll(".invert");
    invertedSvgs.forEach(e => {
        e.style.filter = "invert(1)";
    })
    }
    else {
        localStorage.setItem("theme", "light");

    let invertedSvgs = document.body.querySelectorAll(".invert");
    invertedSvgs.forEach(e => {
        e.style.color = "white";
    })
    }

}

if (localStorage.getItem("theme") == "light") {
    const themeBtn = document.querySelector(".theme-toggle-btn");
    themeBtn.classList.remove("dark");
    document.body.classList.remove("dark-mode");
}
else if (localStorage.getItem("theme") == "dark") {
    const themeBtn = document.querySelector(".theme-toggle-btn");
    themeBtn.classList.add("dark");
    document.body.classList.add("dark-mode");
}
else {
    localStorage.setItem("theme", "light")
}





let userPosts = [
    {
        profileImg: "https://scontent.fisb2-1.fna.fbcdn.net/v/t39.30808-1/299082763_112430841570586_1233386603864801548_n.jpg?stp=dst-jpg_s120x120_tt6&_nc_cat=1&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeFikIgHlZZHA80NmfHNEgBcepPBynYeINB6k8HKdh4g0DISKLpq3dDe8yNA9gU9a0qHOpMyrwW9XDM9EVeMe8eG&_nc_ohc=nPuAQLsjIRoQ7kNvgG4HH02&_nc_oc=Adg9p-jFAg6GvWlE8BOFbUzQsnVX4ibxwzZteL3JvyT9ggZcGV4u0BoVdxfzFjRcFYk&_nc_zt=24&_nc_ht=scontent.fisb2-1.fna&_nc_gid=AzeKJg1Em_csqpxUCbXvrvC&oh=00_AYA-SqbvH03dn5AfHxRw9SE3sRNPFrWteFkLGPBuh6HRuw&oe=67800B51",
        profileName: "User1",
        postDateAndTime: "23 December 2024 at 17:01",
        postDesc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod!",
        postHashTags: ["#web", " #design", " #development"],
        postImg: "https://scontent.fisb2-2.fna.fbcdn.net/v/t39.30808-6/472192278_1798426247397414_6424509171405035048_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHEnRzTxaJTmhSJy5ab5ZnGJyIp-nrOMg4nIin6es4yDselQXRpkkfSJQX5vnKGoGJpoCxjyxTS6MXytK3mp0Q0&_nc_ohc=jqJAp0hzpzIQ7kNvgFHt_TI&_nc_oc=AdiNY-9iZFtJo_iZatz2UVkDI0vhcCwoHyIVdoRVvt9GPolyaF8CVic7TqcAvrjiheg&_nc_zt=23&_nc_ht=scontent.fisb2-2.fna&_nc_gid=AOz5lOkR3P-GvxSOMdDU5E0&oh=00_AYAzw-sWRaZ_2gRaGVU0ZA1fjaF3ly70feocNB7pZuQXuQ&oe=677FF977",
        likes: 12,
        comments: 4,
        send: 1,
        share: 2,
    },
    {
        profileImg: "https://scontent.fisb2-1.fna.fbcdn.net/v/t39.30808-1/289372790_101808645923614_6580982531168518970_n.jpg?stp=dst-jpg_s120x120_tt6&_nc_cat=1&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeGShcGNmJE3FIx3veU_BqOrSQS0GEuJsvJJBLQYS4my8qGjXjFBqimMcNEEXV4kITYptwf28ow2EksFzxfdlLwc&_nc_ohc=KE1CocgP0OsQ7kNvgEUURD9&_nc_oc=AdilaRhIC0NwjEf27AUxjjnhOHM6xD-rVMXtTkw2n0CG3oPbSH2QMZ02X6wpSJHdNcw&_nc_zt=24&_nc_ht=scontent.fisb2-1.fna&_nc_gid=As2jEdXQF4hVJl7NAz6q5Rk&oh=00_AYD8HusnvbyDTCIB-U7XW3aZh6JJxP2A-htDalKYeuAahA&oe=67800613",
        profileName: "user2",
        postDateAndTime: "3 hours ago",
        postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod!",
        postHashTags: ["#web", "#design", "#development"],
        postImg: "https://scontent.fisb2-1.fna.fbcdn.net/v/t45.1600-4/438271190_120208590988380497_985233703700858824_n.jpg?stp=cp0_dst-jpg_fr_q75_spS444_tt6&_nc_cat=110&ccb=1-7&_nc_sid=467c85&_nc_eui2=AeFunFCcQbwEDop3jllAhbA_Xxb3YtaZ1UJfFvdi1pnVQg1Az0ZOcP74ofBIry4nSKAlj3_Ls8excVtJjsHh_ob5&_nc_ohc=utPz0USr-rwQ7kNvgGTxwfk&_nc_oc=AdjocmbXGQTRyOgX5dl_eMOEI0mBF8G3KUfMNWJrFE6H-kX3iPItXpd7aQk0g0LfLc8&_nc_zt=1&_nc_ht=scontent.fisb2-1.fna&_nc_gid=As2jEdXQF4hVJl7NAz6q5Rk&oh=00_AYA9cKArC2Au1rO2-KPAgNg1x9L0NQPe6GevBfZE_uMgsg&oe=677FFB7F",
        likes: 10,
        comments: 3,
        send: 2,
        share: 1,
    },
    {
        profileImg: "../assets/images/user3.jpg",
        profileName: "user3",
        postDateAndTime: "4 hours ago",
        postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod!",
        postHashTags: ["#web", "#design", "#development"],
        postImg: "https://scontent.fisb2-2.fna.fbcdn.net/v/t39.30808-6/472336149_1437743284277345_7155647377431321124_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF4Z4ki8YMGPVxfEnctZFeW9BdRlNY1_gj0F1GU1jX-CDemzugahCE5Hj0ostGwPzloqVEze-6RJ676GNA_jphu&_nc_ohc=rp0-HJA6DmwQ7kNvgHZ9g8L&_nc_oc=AdhBNTflZ1488jDD9UKKXrl7GzpHprHIdrpE6BxPRzOa4Dl4MFB4aJMBXxZlHY_tr6g&_nc_zt=23&_nc_ht=scontent.fisb2-2.fna&_nc_gid=AozNWinXLh2EmPTtyXpoWRc&oh=00_AYC7gO-nO3fzD4BJw8b1AXNPABf3C6-ChhVMc18Vc6sziw&oe=677FF9F5",
        likes: 8,
        comments: 2,
        send: 3,
        share: 3,
    },
    {
        profileImg: "https://scontent.fisb2-1.fna.fbcdn.net/v/t39.30808-1/458144628_122108730830484379_1609357746470738868_n.jpg?stp=dst-jpg_s120x120_tt6&_nc_cat=108&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHA4p_GupQv12HIMw4B2ezB32JlUPu785HfYmVQ-7vzkfcLyb5XKN4Ryf-gBxhnm94v-JGZAsFWlQb3Ygly72qE&_nc_ohc=Am5HvZR4QAQQ7kNvgH2DakI&_nc_oc=Adi1HrzhokIaX7VwxjiduxJgivZwGDiZDbQJA4srjA7MHjZO6AbbuNmRJKFLx8cC71U&_nc_zt=24&_nc_ht=scontent.fisb2-1.fna&_nc_gid=AEl92rUeSbfrZryksKK2s5G&oh=00_AYAJgqjunUhyr6DberjvJXx5c1udmnaqKpyANf0PNmN4bw&oe=67800BBF",
        profileName: "user4",
        postDateAndTime: "5 hours ago",
        postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod!",
        postHashTags: ["#web", "#design", "#development"],
        postImg: "https://scontent.fisb2-2.fna.fbcdn.net/v/t39.30808-6/471628874_122131108316484379_726703362060137680_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHzC4F34jEgdH3x5SdPjqHmxkifOdrn6ujGSJ852ufq6MrqCsZ4_BQWgsGrhq9J38xViPJqszUI6vKhyixTzpUk&_nc_ohc=qZY-GbL5JIcQ7kNvgHzQxGC&_nc_oc=AdhaYXXf1h0858W1X9xpWig5AXmjt5MBijuuez99g6IlIc7OjkmNz2QvXFh8EpTCM8I&_nc_zt=23&_nc_ht=scontent.fisb2-2.fna&_nc_gid=AF5f9MtwC0OwiSy5tSTOGLH&oh=00_AYCaF9_W-GOTXEAiqegnj-4IzXEHXZGo6CFaBRjWfeFuPQ&oe=677FF993",
        likes: 6,
        comments: 1,
        send: 4,
        share: 4,
    },
    {
        profileImg: "../assets/images/user5.jpg",
        profileName: "user5",
        postDateAndTime: "6 hours ago",
        postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod!",
        postHashTags: ["#web", "#design", "#development"],
        postImg: "../assets/images/user5.jpg",
        likes: 4,
        comments: 0,
        send: 5,
        share: 5,
    },
    {
        profileImg: "../assets/images/user6.jpg",
        profileName: "user6",
        postDateAndTime: "7 hours ago",
        postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod!",
        postHashTags: ["#web", "#design", "#development"],
        postImg: "../assets/images/user6.jpg",
        likes: 23902,
        comments: 0,
        send: 600,
        share: 3324,
    },
    
];

document.querySelector(".users-posts").innerHTML = userPosts.map(post => {
    return `
    <div class="user-post">
                    <div class="post-title">
                        <img src="${post.profileImg}" alt="">
                        <div class="user-name">
                            <p><strong>${post.profileName}</strong></p>
                            <p><time datetime="2024-12-23T17:01:00">${post.postDateAndTime}</time></p>
                        </div>
                    </div>
                    <div class="post-description">
                        <p>${post.postDesc}
                        <a href="#">${post.postHashTags}</a>
                    </div>
                    <div class="post">
                        <img src="${post.postImg}"
                            alt="">
                    </div>
                    <div class="reaction-row">
                        <div class="like">
                            <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1"
                                style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v4/y4/r/xAljGE-8t8Y.png?_nc_eui2=AeFgWZvpUqXxYjv4fi34Gw22YHlezEfsCP5geV7MR-wI_q2rpiIKRr36R1GH_iNwCAvttgpH1yfut5BngOeuxITo');background-position:0 -798px;background-size:auto;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i>
                            <p>${post.likes}</p>
                        </div>
                        <div class="like">
                            <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1"
                                style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v4/y4/r/xAljGE-8t8Y.png?_nc_eui2=AeFgWZvpUqXxYjv4fi34Gw22YHlezEfsCP5geV7MR-wI_q2rpiIKRr36R1GH_iNwCAvttgpH1yfut5BngOeuxITo');background-position:0 -588px;background-size:auto;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i>
                            <p>${post.comments}</p>
                        </div>
                        <div class="like">
                            <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1"
                                style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v4/y4/r/xAljGE-8t8Y.png?_nc_eui2=AeFgWZvpUqXxYjv4fi34Gw22YHlezEfsCP5geV7MR-wI_q2rpiIKRr36R1GH_iNwCAvttgpH1yfut5BngOeuxITo');background-position:0 -441px;background-size:auto;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i>
                            <p>${post.send}</p>
                        </div>
                        <div class="like">
                            <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1"
                                style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v4/y4/r/xAljGE-8t8Y.png?_nc_eui2=AeFgWZvpUqXxYjv4fi34Gw22YHlezEfsCP5geV7MR-wI_q2rpiIKRr36R1GH_iNwCAvttgpH1yfut5BngOeuxITo');background-position:0 -924px;background-size:auto;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i>
                            <p>${post.share}</p>
                        </div>
                    </div>
                </div>
    `
}).join("");