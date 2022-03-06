// import firebase from "firebase";
import React from "react";
import db from "../services/firebase";
import firebase from "firebase";
import "firebase/storage"



function Upload() {

    const [fileUrl, setFileUrl] = React.useState(null);
    const [musicUrl, setMusicUrl] = React.useState(null);
    const [disable, setDisable] = React.useState(true);

    const fileChanged = async (e) =>{
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref("Image");
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL());
    };
    const musicChanged = async (e) =>{
        const music = e.target.files[0];
        const storagemRef = firebase.storage().ref("Music");
        const musicRef = storagemRef.child(music.name);
        await musicRef.put(music);
        setMusicUrl(await musicRef.getDownloadURL());
    };

    React.useEffect(() => {
        if (musicUrl !== null) {
            setDisable(false);
            alert("click on submit");
            console.log(disable);
        }
    },[musicUrl]);


    const submit =  (e) => {

        e.preventDefault();
        if (musicUrl != null && fileUrl !== null) {
            const musicName = e.target.musicName.value;
            if (!musicName) {
                return;
            }
            db.collection("Music").doc(musicName).set({
                name: musicName,
                music: musicUrl,
                image: fileUrl,
            });
            alert("Music added");
        }


    };
    return (
        <div className={style.uploadpage}>
            <form onSubmit={submit} className={style.uploadform}>
                <label>images</label>
                <input
                    type="file"
                    className={style.myfile}
                    name="img"
                    onChange={fileChanged}
                    required
                />
                <label>Music files</label>
                <input type="file" name="music" onChange={musicChanged} required />
                <input
                    type="text"
                    name="musicname"
                    placeholder="Music name"
                    required
                />
                <button className={style.btn} disabled={disable} >Submit</button>
            </form>
        </div>
    );
}

export default Upload
