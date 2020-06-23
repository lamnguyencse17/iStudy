import { MongoClient, GridFSBucket } from "mongodb";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

let connection;
export const writeToGridFS = (file) => {
  return new Promise((resolve, reject) =>
    mongoConnection()
      .then(async (client) => {
        file.name = `${Math.round(new Date().getTime() / 1000)}-${file.name}`;
        let gridFSBucket = new GridFSBucket(client.db(), {
          bucketName: "Files",
        });
        let bucket = gridFSBucket.openUploadStream(file.name, {
          contentType: file.mimetype,
          metadata: {
            owner: file.owner,
            date: Date.now(),
            lesson: file.lesson,
            // add to lesson
          },
        });
        bucket.write(file.data, async (err) => {
          if (err) {
            reject(err);
          }
        });
        bucket.end(async (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      })
      .catch(async (err) => {
        reject(err);
      })
  );
};

export const getFileFromGridFS = (fileId) => {
  return new Promise((resolve, reject) =>
    mongoConnection()
      .then(async (client) => {
        let gridFSBucket = new GridFSBucket(client.db(), {
          bucketName: "Files",
        });
        let file = await gridFSBucket
          .find({ _id: mongoose.Types.ObjectId(fileId) })
          .toArray();
        console.log(file);
        let filename = file[0].filename;
        resolve({
          filename,
          contentType: file[0].contentType,
          data: gridFSBucket.openDownloadStreamByName(filename),
        });
      })
      .catch(async (err) => {
        reject(err);
      })
  );
};

export const clearFileFromLesson = (lessonId) => {
  // lessonId is string type
  return new Promise((resolve, reject) =>
    mongoConnection()
      .then(async (client) => {
        let gridFSBucket = new GridFSBucket(client.db(), {
          bucketName: "Files",
        });
        let file = await gridFSBucket
          .find({ "metadata.lesson": lessonId })
          .toArray();
        gridFSBucket.delete(
          mongoose.Types.ObjectId(file[0]._id),
          (err, result) => {
            if (err) {
              console.log(err);
              reject(false);
            } else {
              resolve(true);
            }
          }
        );
      })
      .catch(async (err) => {
        console.log(err);
        reject(false);
      })
  );
};

const mongoConnection = () => {
  return new Promise((resolve, reject) => {
    if (connection) resolve(connection);
    MongoClient.connect(
      "mongodb+srv://ttcnpm:ttcnpm@ttcnpm-uiisz.gcp.mongodb.net/iStudy?retryWrites=true&w=majority",
      (err, db) => {
        if (err) reject(err);
        connection = db;
        resolve(connection);
      }
    );
  });
};
