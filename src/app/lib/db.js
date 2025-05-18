// app/lib/mongodb.js
import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.9tddh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const options = {}

let client
let clientPromise



  client = new MongoClient(uri, options)
  clientPromise = client.connect()

export default clientPromise
