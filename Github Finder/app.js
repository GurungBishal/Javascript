//Instansiate Github
const github = new GitHub;

//Instansiate UI
const ui = new UI;


//Search Input
const searchUser = document
    .getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText != '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //Show Alert
                    ui.showAlert('User Not Found', 'alert alert-danger');

                } else {
                    //Show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repo);
                }
            })
    } else {
        //Clear Profile
        ui.clearProfile();

    }
});