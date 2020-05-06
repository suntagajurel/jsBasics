//-----------------simple program in promise................

let startProject = async () => {
    let promiseToCompleteProject = new Promise((resolve, reject) => {

        let isFinished = true;

        if (isFinished) {
            resolve('project is finished');
        } else {
            reject(" project will take some time");
        }

    })
    let result = await promiseToCompleteProject;
    alert(result);

}

startProject();
