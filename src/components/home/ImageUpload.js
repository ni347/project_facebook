import React, { useState } from 'react'
import './ImageUpload.js';
import Dialog from '@mui/material/Dialog';
// import { storage, db, auth } from '../../firebase';
// import firebase from "../../firebase";
import './ImageUpload.css';
import CloseIcon from '@mui/icons-material/Close';

function ImageUpload(){

    return (
        <div className="imageupload">
            <Dialog
                // open={open}
                // onClose={handleClose}
                // scroll={scroll}
            >
                <div class="makeStyles-paper-1">
                    <div class="modalInit">
                        <h1>Create Post</h1>
                        <CloseIcon class="closeModalIcon"  />
                    </div>
                    <div class="hr2" />
                    <div class="profileHead">
                        {/* <img src={user?.photoURL} className="Avatar" /> */}
                        <h1></h1>
                    </div>
                    <div class="inputForUpload">
                        <input type="file" accept="image/*" className='four' />
                        <textarea rows="4" placeholder={`What's on your mind,?`} />
                    </div>
                    <div class={`previewImage`}>
                        {/* <img src={imageURL} className="previewImaage" /> */}
                    </div>
                    <img alt="" class="colorAlpha" src="https://facebook.com/images/composer/SATP_Aa_square-2x.png"></img>

                    <progress className="hidden" max="100" />

                    <div className="publishOptions">
                        <div class="left">
                            <h1>Add to your post</h1>
                        </div>
                        <div class="right">
                            <i class="Icon roomIcon" />
                            <i class="Icon photoIcon" />
                            <i class="Icon friendsIcon" />
                            <i class="Icon feelingIcon" />
                            <i class="Icon tagIcon" />
                            <i class="Icon moreIcon" />
                        </div>
                    </div>
                    <button type="submit" class={`postButton`}>Post</button>
                </div>
            </Dialog>

            <div class="imageupload__container">
                <div class="postArea">
                    <img  class="Avatar" />
                    <input placeholder={`What's on your mind,?`} />
                </div>
                <div class="hr" />
                <div class="options">
                    <div class="liveVideo">
                        <i class="liveVideoIcon" />
                        <h2>Live video</h2>
                    </div>
                    <div class="photo">
                        <i class="photoIcon" />
                        <h2>Photo/Video</h2>
                    </div>
                    <div class="feeling">
                        <i class="feelingIcon" />
                        <h2>Feeling/Activity</h2>
                    </div>
                </div>
            </div>
        </div>
        //Are you ready to build the most updated Facebook Version using React JS and Firebase ? You are in the right course. The only pre-requisite is the previous course which is Facebook Clone V1. So, whenever you are ready, click that enroll button to enroll for this course !
    )
}

export default ImageUpload

// export default firebase
