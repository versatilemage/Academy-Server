import express from "express";
import multer from "multer";
import { login } from "../Controllers/Login.js";
import { signup } from "../Controllers/Signup.js";
import { uploadTopics } from "../Controllers/Topics/Topics.js";
import { uploadEvents } from "../Controllers/Events/Events.js";
import { topics } from "../Controllers/Topics/landingTopic.js";
import { events } from "../Controllers/Events/landingEvents.js";
import { AddImages } from "../Controllers/images.js";
import { userProfileData } from "../Controllers/userProfile.js";
import { detailpage } from "../Controllers/DetailPage/DetailPage.js";
import { detail } from "../Controllers/DetailPage/Detail.js";
import { listofPrograms } from "../Controllers/listOf.js";
import { getExcelofEducation } from "../Controllers/readEducation.js";
import { uploadContent, getContent, getContentBySubject } from "../Controllers/Content/Content.js";
import { postEntranceExams, getEntranceExamsByType, getEntranceExamsBySubType, getEntranceExamsByStateExam } from "../Controllers/entranceExam.js";
import {
  getUniversities,
  postUniversities,
} from "../Controllers/Universities/universities.controller.js";
import {
  getProgramme,
  postProgramme,
} from "../Controllers/Programme/programme.controller.js";
import { EventById } from "../Controllers/Events/getEventById.js";
import { editEvent } from "../Controllers/Events/EditEvents.js";
import { addQuiz, addQuizbyXlsx } from "../Controllers/quizupload.js";
import { quizData, filteredQuiz } from "../Controllers/quizData.js";
import { createUser } from "../Controllers/userSignup.js";
import { getuserimg } from "../Controllers/getuserimg.js";
import { editUniversities } from "../Controllers/EditUniversities.js";
import { DeleteUniversity } from "../Controllers/deleteUniversity.js";
import { DeleteProgramme } from "../Controllers/deleteProgramme.js";
import { DeleteSchool } from "../Controllers/deleteSchool.js";
import { AddSchoolData } from "../Controllers/addSchool.js";
import GetSchoolData from "../Controllers/getSchool.js";
import { editProgramme } from "../Controllers/editProgramme.js";
import { editSchool } from "../Controllers/editSchoolData.js";
import { searchData } from "../Controllers/search.js";
import { postCollage } from "../Controllers/collage/Collage.js";
import { getCollage } from "../Controllers/collage/Collage.js";
import { DeleteCollage } from "../Controllers/deleteCollage.js";
import { editCollage } from "../Controllers/editCollageData.js";
import { getSelectedUniversity } from "../Controllers/Universities/universities.controller.js";
import getSelectedCollege from "../Controllers/collage/FindOneCollege.js";
import getSelectedSchool from "../Controllers/findSelectedSchool.js";
import {deleteEvent} from "../Controllers/Events/deleteEvents.js";
import { submitResult, getResults } from "../Controllers/results.js";
import { addAdvertisements, getAdvertisemnts, editAdvertisements, deletAdvertisements } from "../Controllers/advertisements.js";

const Storages = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "profile");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const Upload = multer({
  storage: Storages,
  // limits: {
    // fileSize: 90000000,
  // },
});

const users = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "profilepic");
  },

  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const uploadPic = multer({
  storage: users,
  limits: {
    fileSize: 90000000,
  },
});

const eventStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploadimage')
  },
  filename: (req, file, callback) => {
    callback(null, `${file.originalname}`);
  },
});

const eventImgUpload = multer({
  storage: eventStorage
});

const Quizimage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "QuizQuestionImage");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const QuizImg = multer({
  storage: Quizimage,
});

const AdvertisementImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "AdImages")
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const advertisementMulter = multer({
  storage: AdvertisementImage
});

const Route = express.Router();

Route.post("/signup", signup);
Route.post("/studentsignup", uploadPic.single("userimage"), createUser);
Route.post("/login", login);
Route.get("/userimage", getuserimg);
Route.post("/post-topic", uploadTopics);
Route.post("/post-event",eventImgUpload.single("eventImage"), uploadEvents);
Route.get("/topics", topics);
Route.get("/geteducation", getExcelofEducation);
Route.get("/events", events);
Route.post("/profilepicture", Upload.single("testImage"), AddImages);
Route.post("/listofexcel", listofPrograms);
Route.get("/userProfile", userProfileData);
Route.get("/detailpage", detailpage);
Route.post("/detailpage", detail);
Route.post("/exceltojson", postUniversities);
Route.get("/universities", getUniversities);
Route.post("/programme", postProgramme);
Route.get("/programme", getProgramme);
Route.get("/getselecteduniversity", getSelectedUniversity);
Route.get("/getselectedcollege", getSelectedCollege);
Route.get("/getselectedschool", getSelectedSchool);
Route.get("/event/:id", EventById);
Route.put("/editevent",eventImgUpload.single("eventImage"), editEvent);

Route.post("/addquiz",addQuiz);
Route.post("/addquizbyfile",addQuizbyXlsx);

Route.get("/getfilteredquiz",filteredQuiz);

Route.post("/addschool",AddSchoolData);
Route.get("/getschool", GetSchoolData);
Route.get("/getcollage", getCollage)
Route.post("/postcollage", postCollage);
Route.get("/quizdata", quizData);
Route.put("/edit-event", editEvent);
Route.put("/edit-universities", editUniversities);
Route.put("/edit-programme", editProgramme);
Route.put("/edit-school", editSchool);
Route.put("/edit-collage", editCollage);
Route.delete("/delete-universities/:S_No", DeleteUniversity);
Route.delete("/delete-programme/:SNo", DeleteProgramme);
Route.delete("/delete-school/:SlNo", DeleteSchool);
Route.delete("/delete-collage/:SNo", DeleteCollage);
Route.delete("/delete-event/:eventId", deleteEvent);
Route.get("/search", searchData) ;

Route.post("/add-content", uploadContent);
Route.get("/get-content", getContent);
Route.get("/get-contentsubject", getContentBySubject);

Route.post("/postResults", submitResult);
Route.get("/getResults", getResults);

Route.post("/post-entrance", postEntranceExams);
Route.get("/get-EntranceType", getEntranceExamsByType);
Route.get("/get-EntranceSubType", getEntranceExamsBySubType);
Route.get("/get-EntranceStateExams", getEntranceExamsByStateExam);

Route.post("/post-advertisement", advertisementMulter.single("adImage"), addAdvertisements);
Route.get("/get-advertisement", getAdvertisemnts);
Route.put("/editadvertisement", editAdvertisements);
Route.delete("/delete-advertisement/:advertisementID", deletAdvertisements);

export default Route;
