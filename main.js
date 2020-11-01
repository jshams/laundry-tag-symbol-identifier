const isUploaded = () => {
    const filepondEl = document.getElementsByName('filepond')[0]

    // if the classname is empty something has been uploaded
    return (filepondEl.className == "");
};

const processUpload = () => {
    if (isUploaded()) {
        window.location.href = "results.html";
    }
    else {
        alert('Please upload an image before continuing.');
    }
};