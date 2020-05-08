//-----------------simple program in promise................

let startProject = async () => {
    let promiseToCompleteProject = new Promise((resolve, reject) => {

       setTimeout(()=> {resolve('repository created ')},3000)
    })

    let result = await promiseToCompleteProject;
    console.log(result);

}

startProject();
